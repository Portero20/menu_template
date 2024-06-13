const { app, shell, Menu } = require('electron');

const setMainMenu = (mainWindow) => {

    const menuTemplate = [
        {
            label: 'Archivo',
            submenu: [
                {
                    label: 'Abrir',
                    click: () => {
                        console.log('Abrir archivo');
                    }
                },
                {
                    label: 'Guardar',
                    click: () => {
                        console.log('Guardar archivo');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Salir',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edición',
            submenu: [
                { role: 'undo', label: 'Deshacer' },
                { role: 'redo', label: 'Rehacer' },
                { type: 'separator' },
                { role: 'cut', label: 'Cortar' },
                { role: 'copy', label: 'Copiar' },
                { role: 'paste', label: 'Pegar' }
            ]
        },
        {
            label: 'Ver',
            submenu: [
                { role: 'reload', label: 'Recargar' },
                { role: 'forcereload', label: 'Forzar Recarga' },
                { role: 'toggledevtools', label: 'Alternar Herramientas de Desarrollo' },
                { type: 'separator' },
                { role: 'resetzoom', label: 'Restablecer Zoom' },
                { role: 'zoomin', label: 'Acercar' },
                { role: 'zoomout', label: 'Alejar' },
                { type: 'separator' },
                { role: 'togglefullscreen', label: 'Alternar Pantalla Completa' }
            ]
        },
        {
            label: 'Ventana',
            submenu: [
                { role: 'minimize', label: 'Minimizar' },
                { role: 'close', label: 'Cerrar' }
            ]
        },
        {
            label: 'Ayuda',
            submenu: [
                {
                    label: 'Aprender más',
                    click: async () => {
                        await shell.openExternal('https://electronjs.org');
                    }
                }
            ]
        },
        {

            label: 'Themes',
            submenu: [

                {

                    label: 'Light',
                    click: () => {

                        mainWindow.webContents.send('update-theme', 'light')

                    }

                },

                {

                    label: 'Dark',
                    click: () => {

                        mainWindow.webContents.send('update-theme', 'dark')


                    }

                }

            ]

        }

    ];

    const menu = Menu.buildFromTemplate(menuTemplate)

    Menu.setApplicationMenu(menu)

}

module.exports = setMainMenu;
