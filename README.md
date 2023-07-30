# EDoP-g - Edge Workspace Shortcut Creator

![EDoP-g Logo](assets/icon.ico)

EDoP-g is a simple Electron.js application that allows Microsoft Edge Workspaces users to create shortcuts for their workspaces on the desktop. Normally, Edge Workspaces do not have a direct way to create shortcuts, but with EDoP-g, you can easily create shortcuts to your workspaces on the desktop.

## Features

- Create shortcuts for your Microsoft Edge Workspaces.
- Simple and user-friendly interface.

## Usage

1. Clone or download this repository to your local machine.
2. Open a terminal or command prompt in the project directory.
3. Run the following command to build the application:

```bash
build.bat
```

4. After the build process is complete, you will find the executable file for the application in the "builds" directory.

5. Run the executable file, and a window will appear asking for a file name (e.g., myWorkspace) and the URL of the workspace (e.g., https://www.edge.myworkspace).

6. Click the "Create" button, and a shortcut with the given file name (e.g., myWorkspace) will be created on your desktop. Clicking the shortcut will open Microsoft Edge with the specified URL.

## How It Works

EDoP-g is developed using Electron.js. The main functionality is achieved through the use of IPC (Inter-Process Communication) between the main process and the renderer process. When you enter the file name and URL in the provided fields and click "Create," the data is sent to the main process via IPC. The main process then writes a batch script with the specified URL and saves it with the given file name as a .bat file on your desktop.

### Using the .bat File

The .bat file created on your desktop serves as a shortcut to your workspace. When you double-click the .bat file, it automatically opens Microsoft Edge with the specified URL, providing you quick access to your workspace.

## Build Process

To automate the build process and avoid the need for lengthy commands, a `build.bat` file has been provided. Simply run the following command in the project folder:

```bash
build.bat
```

The script will automatically install the required dependencies and build the application for you.

## Credits

EDoP-g is created by Muhammed Şamil Albayrak. Feel free to use and modify the application as per your needs.

## License

[MIT License](LICENSE)
