// Modules to control application life and create native browser window
const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require("fs");
const { app, BrowserWindow, Menu, ipcMain } = electron;

// Set ENV
process.env.NODE_ENV = 'production';

let mainWindow;

function createWindow() {

	// Create the browser window.
	const mainWindow = new BrowserWindow({
		icon: path.join(__dirname, './img/icons/icon.ico'),
		title: 'D4 Toolbox',
		width: 1000,
		height: 900,
		resizable: true,
		frame: true,
		webPreferences: {
			preload: path.join(__dirname, './js/preload.js'),
			nodeIntegration: true,
			sandbox: false,
			enableRemoteModule: true,
		},
	});

	// Remove the Menu Bar
	mainWindow.setMenuBarVisibility(true);

	// and load the index.html of the app.
	mainWindow.loadFile('./index.html');

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()

	// Build Menu from Template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert Menu
	Menu.setApplicationMenu(mainMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

// Create Menu Template
const mainMenuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Patches'
			},
			{
				label: 'Exit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click() {
					app.quit();
				}
			}
		]
	}
];

// Add DevTools if not in Production
if (process.env.NODE_ENV !== 'production') {
	mainMenuTemplate.push({
		label: 'DevTools',
		submenu: [
			{
				label: 'Toggle DevTools',
				accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.