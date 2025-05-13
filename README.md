# BJH OS

Hi everyone! I'm a college student my Name is Muhammad Haris and I made a web-based operating system named **BJH OS**.

**BJH OS** is a browser-based operating system developed using **pure HTML, CSS, and JavaScript** — no frameworks, no backend dependencies. It’s designed to give you the feel of a real desktop OS, but in your web browser.

---

## Key Features

- **Custom Desktop Environment**  
  Draggable, resizable windows with a familiar desktop layout.

- **Built-in Apps**  
  Includes File Manager, Notes, Chat App (*ChatLink*), Settings, and more.

- **Modular Architecture**  
  Easily add new themes, wallpapers, and apps.

- **Persistent Data**  
  Uses `localStorage` to save your preferences and data between sessions.

- **Powerful Web Terminal**  
  Perform advanced tasks, run commands, and control the OS using a built-in terminal interface — ideal for devs and power users.

- **Remote Alerts and Update System**  
  Displays alerts and update notices fetched from a remote JSON configuration.

- **IoT Integration (In Progress)**  
  Working on ESP8266/ESP32 support for real-world interactions and sensor monitoring.

---

## How to Run BJH OS

1. **Download the ZIP** file of BJH OS from the [BJH OS MAIN REPOSITORY]https://github.com/Haris685/BJH-OS)
2. **Extract** the ZIP file.
3. Open the extracted `BJH-OS` folder.
4. **Double-click** the file named `Setup.html`.
5. BJH OS will launch automatically in your default browser.

> No installation required. Just open and go!

---

## BJH OS Tool

To make managing BJH OS even easier, I developed a Python-based utility called **BJH OS TOOL**. It lets you:

- Install BJH OS updates
- Install apps and games
- Install wallpapers and cursors
## How to use BJH OS TOOL in Windows?
# BJH OS TOOL Installation Guide

This guide covers instructions for both **BJH OS TOOL 64-Bit** and **BJH OS TOOL 32-Bit** versions.

---

## BJH OS TOOL 64-Bit

### 1. Install BJH OS Update
- Download the latest update ZIP file.
- Extract it.
- Open **BJH OS TOOL 64 Bit**.
- Click **Install Update**.
- Select the extracted update folder.
- Refresh BJH OS to apply the update.

### 2. Install Cursor
- Download an SVG cursor from the Customization Market or Google.
- Open the tool and click **Install Cursor**.
- Select the `.svg` file.
- Refresh BJH OS to apply.

### 3. Install Wallpaper
- Download a JPG or PNG wallpaper.
- Open the tool and click **Install Wallpaper**.
- Select the image file.
- Refresh BJH OS to apply.

### 4. Install Apps/Games
- Download the app/game from the BJH OS App Market.
- Extract the files.
- Open the tool and click **Install App**.
- Select the folder that contains the app.
- Open the app from your BJH OS home screen.

---

## BJH OS TOOL 32-Bit

### Run Tool
Double-click the file:
### 1. Install BJH OS Update
- Provide the folder path where the update files are located.

**Examples:**
- Absolute Path: `C:\Users\YourName\Downloads\bjh_update`
- Relative Path: `.\Downloads\bjh_update`

### 2. Install Cursor (SVG)
- Provide the full file path to the SVG cursor.

**Examples:**
- Absolute Path: `C:\Users\YourName\Downloads\custom_cursor.svg`
- Relative Path: `.\Downloads\custom_cursor.svg`

### 3. Install Wallpaper (Image)
- Provide the full file path to the image (JPEG, PNG).

**Examples:**
- Absolute Path: `C:\Users\YourName\Pictures\custom_wallpaper.jpg`
- Relative Path: `.\Pictures\custom_wallpaper.jpg`

### 4. Install App
- Provide the directory path containing the app files, including an `index.html`.

**Examples:**
- Absolute Path: `C:\Users\YourName\Downloads\Western-aim-game-main`
- Relative Path: `.\Downloads\Western-aim-game-main`

---

## General Notes on File Paths

- **Absolute Path:** Full path from root of filesystem.
- **Relative Path:** Path relative to your current directory.

**Examples:**
- Absolute: `C:\Users\YourName\Documents\myfile.jpg`
- Relative: `.\Documents\myfile.jpg`

Ensure the file or folder exists before proceeding.

---

## Entering Paths in Windows

When prompted, paste or type the full path of the file or folder. Make sure to include the correct file extension:

```bash
C:\Users\YourName\Downloads\myfile.jpg