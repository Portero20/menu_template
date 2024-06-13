const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const setMainMenu = require('./menuTemplate'); // Importa el template del menú principal

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {

            preload: path.join(__dirname, 'preload.js')

        }
    });

    mainWindow.loadFile('index.html'); // Reemplaza con la URL de tu sitio web

    setMainMenu(mainWindow)

}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
