const electron = require('electron');
const fs = require('fs');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Load the preload script
      nodeIntegration: true, // Enable Node.js integration in the renderer process
    },
  });

  mainWindow.loadFile('main.html'); // Load the HTML file for the renderer process

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

ipcMain.on('click', (event, url, name) => {

  const batContent = `start microsoft-edge:"${url}"`;
  const batName = `${name}.bat`

  const filePath = path.join(app.getPath('desktop'), batName);

  fs.writeFile(filePath, batContent, (err) => {
    if (err) {
      dialog.showErrorBox('Error', 'An error occurred while creating the .bat file.');
    } else {
      dialog.showMessageBoxSync({
        type: 'info',
        title: 'Success',
        message: `${name}.bat file created successfully on your desktop.`,
      });
    }
  });
});


const mainMenuTemplate = [
    {
        label : "File",
        submenu : [
            {
                label : "Exit",
                accelerator : process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
                role: "quit"
            }
        ]
    },
]
if(process.platform == "darwin"){
    mainMenuTemplate.unshift({
        label : app.getName(),
        role : "TODO"
    })
}





