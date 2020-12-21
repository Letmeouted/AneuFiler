/*
 * @Author: whf
 * @Date: 2020-11-19 15:07:54
 * @LastEditTime: 2020-12-21 15:16:48
 * @FilePath: \AneuFiler\main.js
 */
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 680,
    height: 510,
    autoHideMenuBar: true,
    frame: true,
    transparent: false,
    resizable: true,
    alwaysOnTop: false, // [true] had bad experience on windows
    webPreferences: {
      contextIsolation:false,
      nodeIntegration:true,
      enableRemoteModule:true //ensure renderer.js can be used normally require('electron').remote
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
   mainWindow.webContents.openDevTools()
   
  // Emitted when the window is closed.
  mainWindow.on('closed', function () { mainWindow = null })
}

app.on('ready', function() { createWindow() })
//Solve Development Tool tips
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
// Quit when all windows are closed.
app.on('window-all-closed', function () { app.quit() })

app.on('activate', function () { if (mainWindow === null) createWindow() })
