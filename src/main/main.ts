import { app, BrowserWindow } from 'electron'

let win: BrowserWindow

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // win.loadFile(path.join(__dirname, 'index.html'))
  win.loadURL('http://localhost:8080')
}

app.whenReady().then(createWindow)
