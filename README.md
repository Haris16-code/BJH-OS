# 💻 BJH OS

Hi everyone! 👋 I'm a college student — my name is **Muhammad Haris** and I made a **web-based operating system** named **BJH OS** 🌐💡

**BJH OS** is a **browser-based operating system** developed using **pure HTML, CSS, and JavaScript** — no frameworks, no backend dependencies ⚙️🚫. It’s designed to give you the feel of a real desktop OS, but in your web browser 🖥️✨

---

## 🚀 Key Features

- 🖼️ **Custom Desktop Environment**  
  Draggable, resizable windows with a familiar desktop layout.

- 📦 **Built-in Apps**  
  Includes File Manager, Notes, Chat App (*ChatLink*), Settings, and more.

- 🧩 **Modular Architecture**  
  Easily add new themes, wallpapers, and apps.

- 💾 **Persistent Data**  
  Uses `localStorage` to save your preferences and data between sessions.

- 🧑‍💻 **Powerful Web Terminal**  
  Run commands and control the OS with a built-in terminal — ideal for devs and power users.

- 🌐 **Remote Alerts & Update System**  
  Displays alerts and updates fetched from a remote JSON config.

- 📡 **IoT Integration (In Progress)**  
  Working on ESP8266/ESP32 support for real-world sensor interaction.

---

## 🛠️ How to Run BJH OS

1. ⬇️ **Download the ZIP** from the [BJH OS MAIN REPOSITORY](https://github.com/Haris16-code/BJH-OS)  
2. 🗂️ **Extract** the ZIP file  
3. Open the extracted `BJH-OS` folder  
4. 🖱️ **Double-click** the file named `Setup.html`  
5. 🌍 BJH OS will launch in your default browser  

> 🧑‍💻 No installation required — just open and go!

---

## 🧰 BJH OS TOOL

To make managing BJH OS even easier, I developed a Python-based utility called **BJH OS TOOL** 🐍🛠️  
It lets you:

- 📦 Install BJH OS updates  
- 🎮 Install apps and games  
- 🖼️ Install wallpapers and cursors

---

## 🖥️ BJH OS TOOL 64-Bit

### 🛠️ Install BJH OS Update  
- Download the latest update ZIP  
- Extract it  
- Open **BJH OS TOOL 64-Bit**  
- Click **Install Update**  
- Select the extracted folder  
- Refresh BJH OS

### 🖱️ Install Cursor  
- Download an SVG cursor  
- Click **Install Cursor**  
- Select the `.svg` file  
- Refresh BJH OS

### 🖼️ Install Wallpaper  
- Download a JPG or PNG image  
- Click **Install Wallpaper**  
- Select the image  
- Refresh BJH OS

### 🎮 Install Apps/Games  
- Download from App Market  
- Extract the files  
- Click **Install App**  
- Select the app folder  
- Open it from BJH OS home screen

---

## 🖥️ BJH OS TOOL 32-Bit

### ▶️ Run Tool  
- Double-click to start

### 🛠️ Install BJH OS Update  
- Provide the folder path for the update

**Examples:**  
- Absolute: `C:\Users\YourName\Downloads\bjh_update`  
- Relative: `.\Downloads\bjh_update`

### 🎯 Install Cursor (SVG)  
- Provide the full path to the `.svg` file

**Examples:**  
- Absolute: `C:\Users\YourName\Downloads\custom_cursor.svg`  
- Relative: `.\Downloads\custom_cursor.svg`

### 🖼️ Install Wallpaper (Image)  
- Provide the full path to `.jpg` or `.png` image

**Examples:**  
- Absolute: `C:\Users\YourName\Pictures\custom_wallpaper.jpg`  
- Relative: `.\Pictures\custom_wallpaper.jpg`

### 📦 Install App  
- Provide the directory path that contains `index.html`

**Examples:**  
- Absolute: `C:\Users\YourName\Downloads\Western-aim-game-main`  
- Relative: `.\Downloads\Western-aim-game-main`

---

## 📁 General Notes on File Paths

- 🧭 **Absolute Path:** Full path from the root of the filesystem  
- 🧮 **Relative Path:** Path relative to your current directory

**Examples:**  
- Absolute: `C:\Users\YourName\Documents\myfile.jpg`  
- Relative: `.\Documents\myfile.jpg`

✅ Ensure the file or folder exists before proceeding.

---

## ⌨️ Entering Paths in Windows

When prompted, paste or type the full path of the file or folder.  
Be sure to include the correct file extension:

```bash
C:\Users\YourName\Downloads\myfile.jpg