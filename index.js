const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {

		mainWindow = new BrowserWindow({
			height: 600,
			width: 800,
			webPreferences: { backgroundThrottling: false },
		});

		mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

// IPC communication
ipcMain.on('my:signal', (event, signal_data) => {

});
