# BJH OS 4.6 — Developer Documentation

**Version:** 4.6  
**Last Updated:** November 28, 2025  
**Project Status:** Active Development  

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Installation & Setup](#installation--setup)
5. [Architecture & Key Systems](#architecture--key-systems)
6. [File Descriptions](#file-descriptions)
7. [Development Guidelines For Developing Apps And Games For BJH OS Using BJH OS Studio](#development-guidelines-for-developing-apps-and-games-for-bjh-os-using-bjh-os-studio)
8. [API Reference](#api-reference)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)

---

## Project Overview

**BJH OS** is a **web-based desktop operating system** concept built with HTML, CSS, and JavaScript. It emulates a Windows-like desktop environment with a functional taskbar, start menu, draggable app windows, widgets, and a suite of built-in applications (calculator, notepad, file manager, antivirus, etc.).

### Key Features (v4.6)

- **Draggable App Windows:** Apps open in floating iframe windows with close buttons.
- **Maximize/Restore:** Windows can toggle fullscreen with double-click titlebar support.
- **In-window App Launching:** Start menu and toolbar items open inside windows instead of new tabs.
- **window.open Intercept:** Redirects same-origin `window.open()` calls to the iframe window system.
- **Programmatic API:** `window.openAppInWindow(url, title)` for script-based window management.
- **Integrated Antivirus:** Virus definition database and file scanning.
- **Widgets:** Embedded calculator, QR generator, translator, dictionary.
- **Responsive UI:** Material Design icons, smooth animations, accessibility support.

### Target Use Cases

- Educational purposes (learning OS UI/UX design).
- Proof-of-concept for web-based operating systems.
- Portfolio and demonstration of web technologies.
- Customizable browser-based desktop environment.

---

## Project Structure

```
BJH OS 4.6 new Update/
├── desktop1.html              # Main entry point (core OS interface)
├── index.js                   # Service Worker registration
├── manifest.json              # PWA manifest (app metadata)
├── Setup.html                 # Initial setup/welcome page
├── service_worker.js          # Service Worker for offline support
├── installed apps.html        # List of installed apps
├── test.html                  # Testing utilities page
├── What's new.txt             # Changelog and feature list
├── HOW TO RUN.txt             # Quick start instructions
│
├── Scripts/
│   ├── sketch.js              # Core UI/event handlers (1340+ lines)
│   └── minmax.js              # Window min/max utilities
│
├── Styles/
│   ├── style.css              # Main desktop & taskbar styles
│   ├── index.css              # Additional styling
│   └── minmax.css             # Window control styles
│
├── Assets/
│   ├── PWA/                   # PWA icons (192x192, 512x512)
│   ├── RGOS-family/           # Branding assets
│   ├── windows11-*.png        # Windows-style icons
│   ├── Start Button.png
│   ├── bin.png                # Recycle bin icon
│   └── [other UI assets]
│
├── Root Directory/
│   └── OS Files/              # Core OS apps and utilities
│       ├── about device.html  # Android-style about page
│       ├── settings.html      # System settings
│       ├── file manager.html  # File explorer
│       ├── flash_browser.html # Embedded browser app
│       ├── notepad.html       # Text editor
│       ├── calculator.html    # Calculator app
│       ├── calendar.html      # Calendar widget
│       ├── clock.html         # Clock app
│       ├── weather.html       # Weather widget
│       ├── command prompt.html# Terminal emulator
│       ├── bjh-os-antivirus.html # Antivirus utility
│       ├── BJHOS_AI.html      # AI assistant app
│       ├── paint.html         # Drawing/painting app
│       ├── media player.html  # Audio/video player
│       ├── screen recorder.html # Screen capture tool
│       ├── battery full details.html
│       ├── device status.html # System status info
│       ├── legal info.html    # License & legal
│       ├── privacy policy.html
│       ├── Games Center/      # Games subdirectory
│       ├── Other Files/       # Additional utilities
│       ├── Other Scripts/     # Helper scripts
│       ├── SOUNDS/            # Audio assets
│       ├── VIDEO ANIMATIONS/  # Video assets
│       └── ICONS/             # App icon files
│
├── Apps - (Testing)/
│   ├── apps.html / apps.css
│   ├── calc/                  # Calculator widget
│   ├── QR-generator/          # QR code generator
│   ├── Dictionary-widget/     # Dictionary lookup
│   ├── translate-widget/      # Translation tool
│   └── AI-Chatbot-main/       # AI chatbot
│
├── Customize BJH OS/
│   ├── Background Wallpaper/  # Wallpaper options
│   ├── Cursor/                # Cursor themes
│   └── [Customization assets]
│
├── Installed Apps/            # Directory for installed apps
├── TEST APPS/                 # Testing apps (antivirus test, console)
├── BJH_OS_Tool_*.exe          # Standalone installers (32-bit, 64-bit)
│
└── [Other files: configuration, documentation, etc.]
```

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | CSS Grid, Flexbox, CSS Animations |
| **Icons & Fonts** | Material Design Icons, Google Fonts (Poppins) |
| **PWA** | Service Worker, Manifest.json |
| **Architecture** | Vanilla JS (no frameworks) |
| **Deployment** | Static HTML/CSS/JS (can be served via any web server) |

### Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Electron (for desktop app versions)

---

## Installation & Setup

### Quick Start

1. **Extract the project** to a folder:
   ```bash
   unzip BJH_OS_4.6.zip
   cd "BJH OS 4.6 new Update"
   ```

2. **Open in browser:**
   - **Direct:** Double-click `Setup.html` (opens in default browser)
   - Navigate to `desktop1.html` (main OS interface)

---

## Architecture & Key Systems

### 1. **Window Management System** (NEW v4.6)

Located in `desktop1.html` `<script>` block (near end of file).

**How it works:**
- Container element: `#app-windows-container` holds all app windows
- Each app window is a `<div class="app-window">` with:
  - Titlebar (header with title and controls)
  - Close button (✕) — removes window from DOM
  - Maximize button (▢/🗗) — toggles fullscreen
  - iframe content area — loads app HTML
  - Drag handlers — move window via titlebar

**Key functions:**
```javascript
window.openAppInWindow(url, title)      // Programmatic window open
createAppWindow(url, title)              // Internal window factory
// Events: click interception, window.open override, drag handlers
```

**Features:**
- Z-index stacking (bring window to front on click)
- Drag via titlebar (stores position on maximize)
- Double-click titlebar to toggle maximize
- Window.open() override for same-origin URLs
- Click interception on anchor tags

### 2. **Taskbar & Start Menu** (`sketch.js`)

**Taskbar:**
- Fixed at bottom of screen
- Dock apps (file manager, browser, paint icons)
- Start button (opens/closes start menu)
- Tab/desktop switcher
- Search bar
- System tray (volume, network, battery, calendar, etc.)

**Start Menu:**
- Categorized app list (A-Z alphabetical)
- App search functionality
- Pinned apps section
- Recommended files section
- Quick settings

**Code Entry Point:**
```javascript
// sketch.js - Main UI controls
let startbutton = document.getElementsByClassName("startbutton")[0];
startbutton.addEventListener('click', () => { /* show/hide menu */ });
// + 1300+ lines of UI event handlers
```

### 3. **Styling System** (`Styles/`)

**Files:**
- `style.css` — Main desktop, taskbar, windows, animations (~1000+ lines)
- `index.css` — Global styles, resets, theme variables
- `minmax.css` — Window control button styles

**Key CSS Variables/Classes:**
```css
.taskbar { ... }            /* Bottom taskbar */
.startmenu { ... }          /* Start menu panel */
.app-window { ... }         /* Draggable window container */
.app-window.maximized { ... }  /* Fullscreen state */
@keyframes fade-in, slide-up, scale-up, ...  /* Animations */
```

### 4. **Service Worker** (`service_worker.js`, `index.js`)

Provides offline support and PWA functionality.

**What it does:**
- Caches critical assets (HTML, CSS, JS, icons)
- Serves cached content when offline
- Enables "Install app" feature

**Registration:**
```javascript
// index.js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js");
}
```

### 5. **App Registry & Launching**

Apps are simple HTML files (loaded in iframe windows):
- **Local paths** (e.g., `Root Directory/OS Files/calculator.html`) open in-window
- **External URLs** (https://) open in new tab (unless intercepted)
- **Same-origin URLs** use window.open override to open in iframe

**App Categories:**
- **System Apps:** Settings, File Manager, Device Status
- **Utilities:** Calculator, Calendar, Clock, Notepad
- **Tools:** Antivirus, Browser, Screen Recorder, Paint
- **Games:** Snake, Gravity Game, Game Center
- **Widgets:** Embedded calc, QR, Translator, Dictionary

---

## File Descriptions

### Entry Points

| File | Purpose |
|------|---------|
| `desktop1.html` | **Main OS UI** — Full desktop with taskbar, windows, and app management |
| `Setup.html` | Welcome/setup page with PWA install prompt |
| `test.html` | Testing utilities and diagnostics |

### Core Scripts

| File | Lines | Purpose |
|------|-------|---------|
| `Scripts/sketch.js` | ~1340 | Main UI event handlers, animations, start menu logic |
| `Scripts/minmax.js` | ~50 | Window minimization/maximization utilities |
| `index.js` | ~10 | Service Worker registration |
| `service_worker.js` | ~50 | Offline caching and PWA support |

### Core Styles

| File | Purpose |
|------|---------|
| `Styles/style.css` | Main styling (taskbar, windows, start menu, animations) |
| `Styles/index.css` | Global styles and theme variables |
| `Styles/minmax.css` | Window control button styling |

### Key Apps

| App | Location | Description |
|-----|----------|-------------|
| About Device | `Root Directory/OS Files/about device.html` | Android-style "About" page with device info |
| Settings | `Root Directory/OS Files/settings.html` | System settings (display, sound, themes) |
| File Manager | `Root Directory/OS Files/file manager.html` | File explorer with mock filesystem |
| Calculator | `Root Directory/OS Files/calculator.html` + `Apps - (Testing)/calc/` | Scientific calculator |
| Antivirus | `Root Directory/OS Files/bjh-os-antivirus.html` | File scanner with virus definitions |
| Paint | `Root Directory/OS Files/Other Files/Paint/paint.html` | Drawing and image editing tool |
| Command Prompt | `Root Directory/OS Files/command prompt.html` | Terminal emulator |
| Media Player | `Root Directory/OS Files/media player.html` | Audio/video playback |

### Assets

| Directory | Contents |
|-----------|----------|
| `Assets/PWA/` | PWA icons (192x192, 512x512 PNG) |
| `Assets/RGOS-family/` | Branding and theme assets |
| `Root Directory/OS Files/ICONS/` | App icons (PNG format, 64x64) |
| `Apps - (Testing)/` | App templates and examples |
| `Customize BJH OS/` | Wallpapers, cursor themes, customization packs |

---

## Development Guidelines For Developing Apps And Games For BJH OS Using BJH OS Studio

### Code Style & Best Practices

1. **HTML Structure:**
   - Use semantic HTML5 tags (header, nav, main, etc.)
   - Include ARIA labels for accessibility
   - Validate HTML with W3C Validator

2. **CSS:**
   - Use CSS Grid/Flexbox for layout (avoid floats)
   - Define variables for colors, fonts, spacing
   - Use BEM naming convention for classes (e.g., `block__element--modifier`)
   - Prefix animations/transitions with vendor prefixes for older browsers

3. **JavaScript:**
   - Use `const`/`let` (avoid `var`)
   - Avoid global variables; use IIFE or modules
   - Add comments for complex logic
   - Use event delegation for dynamic elements
   - Test in multiple browsers

4. **File Organization:**
   - One main script per feature/module
   - Keep scripts under 500 lines when possible
   - Group related HTML/CSS/JS together

5. **Performance:**
   - Lazy-load apps (iframes load on demand)
   - Minimize CSS/JS files for production
   - Use CSS transforms for animations (GPU acceleration)
   - Cache frequently accessed DOM elements

6. **Accessibility:**
   - Add `alt` text to images
   - Use semantic HTML (buttons, links, labels)
   - Ensure keyboard navigation works
   - Test with screen readers

### How to Develop Apps for BJH OS Using BJH OS Studio

BJH OS supports **HTML, CSS, and JavaScript** apps natively. This guide covers how to use BJH OS Studio, font integration, step-by-step creation, best practices, and registration.

#### App Folder Structure

Both app types use **identical folder structure**. Create your app in this structure:

```
YOUR_APP_NAME/
├── index.html              # Main entry point (REQUIRED)
├── favicon.ico             # App icon (64x64 PNG/ICO) (REQUIRED)
├── style.css               # Styling (optional)
├── app.js                  # JavaScript logic (optional)
├── constants.js            # Configuration & constants (optional)
└── assets/                 # Resources folder (optional)
    ├── images/
    │   ├── banner.png
    │   ├── icons/
    │   └── backgrounds/
    ├── fonts/              # Custom fonts
    ├── sounds/             # Audio files
    └── data/               # JSON data, configs
```

**Critical Requirements:**
- **Folder name** becomes app identifier (lowercase, no special characters, spaces)
  - ❌ Bad: `My App`, `MY_APP`, `My-App`
  - ✅ Good: `myapp`, `my_app`, `my-app`
- **index.html** must exist (entry point when app launches)
- **favicon.ico** must exist in folder root (displayed in start menu, 64x64 PNG/ICO)
- All paths must be **relative** (e.g., `./assets/image.png`, NOT `/assets/image.png`)
- App runs **in iframe** (sandboxed for security)

#### Two Types of Apps

**1. Built-in Apps** (Hardcoded in BJH OS)
- Location: `Root Directory/OS Files/[APP_NAME]/`
- Registered: Manually edit `desktop1.html` start menu
- User can't remove (unless code is changed)
- Always appear in start menu

**2. 3rd-Party Apps** (Installed via BJH OS Tool And Developed Via BJH OS Studio)
- Location: `Installed Apps/[APP_NAME]/`
- Registered: Automatically via BJH OS Tool
- Appear in Installed Apps after installation in BJH OS

**Both use identical structure and code!** The only difference is registration method and location.

#### Developing Built-in Apps Manually

**Location:** `Root Directory/OS Files/my-app/`

**Step 1: Create folder with required files**
```
Root Directory/OS Files/my-app/
├── index.html       (REQUIRED)
├── favicon.ico      (REQUIRED - 64x64)
├── style.css        (optional)
└── app.js          (optional)
```

**Step 2: Register in `desktop1.html`**

Add this to the start menu section:
```html
<li>
  <a href="Root Directory/OS Files/my-app/index.html">
    <button class="startAppsbutton">
      <img src="Root Directory/OS Files/ICONS/my-app.png" alt="">
      My App
    </button>
  </a>
</li>
```

**Step 3: Add icon**

Save PNG to: `Root Directory/OS Files/ICONS/my-app.png`
# BJH OS Studio - The Ultimate Developer Guide
# Developing 3rd-Party Apps Installed Via BJH OS Studio
## 📖 Table of Contents For BJH OS Studio
1. [Introduction To BJH OS Studio](#1-introduction)
2. [Installation & Requirements](#2-installation--requirements)
3. [Interface Overview](#3-interface-overview)
4. [Project Management](#4-project-management)
5. [The Editor & Workflow](#5-the-editor--workflow)
6. [Asset Management](#6-asset-management)
7. [BJH OS Integration APIs](#7-bjh-os-integration-apis)
8. [Compilation & Exporting](#8-compilation--exporting)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Introduction To BJH OS Studio
**BJH OS Studio** is the official Integrated Development Environment (IDE) built to empower developers to create robust HTML5-based Applications and Games for the **BJH OS** ecosystem. 

It provides a syntax highlighting, and integrated asset management, stripping away the complexity of manual configuration.

---

## 2. Installation & Requirements

### System Requirements
* **OS:** Windows 10/11, Linux, or macOS
* **Storage:** 500 MB free
### [Download BJH OS Studio Latest Version](https://github.com/Haris16-code/BJH-OS-Studio/releases/tag/bjh-os-studio-first-official-release)
---

## 3. Interface Overview
The Studio is designed with a modern, dark-themed (default) layout inspired by VS Code.

### Top Toolbar
* **New Project:** Start a fresh App or Game.
* **Open Project:** Load an existing folder.
* **Run App:** Refreshes the Live Preview.
* **Compile:** Validates and exports to .zip.
* **Check Updates:** Fetches the latest IDE version from GitHub.
* **About:** Developer credits.

### Left Panel (File Explorer)
* Shows the directory tree of your project.
* Supports Context Menu (Right-Click) operations.

### Center Panel (Code Editor)
* Tabbed editing for multiple files.
* Syntax highlighting for HTML, CSS, JS, and JSON.
* **Auto-Save Enabled:** Saves work automatically 1 second after typing stops.

### Right Panel (Live Preview)
* A Chromium-based web engine that renders your app in real-time.

### Bottom Panel (Console Log)
* Displays system messages, errors, and validation statuses.

---

## 4. Project Management

### Creating a New Project
1. Click **New Project**.
2. **App Name:** The visible title (e.g., "Super Calculator").
3. **Type:** 
   * `app`: Standard windows/utilities.
   * `game`: Full-screen immersive experiences.
4. **Location:** Parent directory.
5. **Icon:** Select a `.ico` file (Mandatory for BJH OS Desktop).

### Project Structure
BJH OS Studio automatically generates this structure:



⚠️ **Critical Warning:** Never delete `project_config.js`. It contains the `PROJECT_TYPE` constant that tells BJH OS how to launch your software.

---

## 5. The Editor & Workflow

### Syntax Highlighting
The editor automatically detects file extensions and colors code accordingly:

* **HTML:** Tags (Blue), Attributes (Light Blue), Strings (Orange)
* **JS:** Keywords (Purple), Functions (Yellow), Comments (Green)
* **CSS:** Properties (Purple), Values (Orange)

### Auto-Save System
You do not need to press Ctrl+S. The IDE features a "Debounce Save" mechanism.

**How it works:** When you stop typing for 1 second, the file is automatically written to the disk.  
**Feedback:** Check the bottom log panel for `"Saved: filename.ext"`.

---

## 6. Asset Management
BJH OS Studio v1.0 introduces a robust Context Menu for managing files without leaving the IDE.

### Right-Click Actions (File Tree)
| Action | Description |
|--------|-------------|
| 📄 New File | Creates an empty file (e.g., `utils.js`). |
| 📂 New Folder | Creates a subdirectory. |
| ⬇ Import File(s) | Opens a file picker to copy external files (images, music) into the selected folder. |
| 📦 Import Folder | Copies an entire external directory structure into your project. |
| ✏ Rename | Renames the selected item. |
| 🗑 Delete | Safely removes the item (closes open tabs first to prevent crashes). |

---

## 7. BJH OS Integration APIs
To ensure your app feels "Native," use these integration patterns.

### A. Font Synchronization
BJH OS users can set a custom system font. Your app inherits this via the mandatory script injected into `index.html`:

```javascript
// This runs automatically on load
document.addEventListener('DOMContentLoaded', () => {
  const storedFont = localStorage.getItem('selectedFont');
  if (storedFont) {
    document.body.style.fontFamily = storedFont;
  }
});
```

8\. Compilation & Exporting
---------------------------

When your development is complete, you must package the app for distribution.

### The Compilation Process

1.  Click **Compile**.
    
2.  **Validator Runs:**
    
    *   Checks if index.html exists.
        
    *   Checks if project\_config.js is valid.
        
    *   Scans for the Font Sync script.
        
3.  **Output:** If successful, a dialog asks where to save the .zip file.
    
4.  The IDE compresses the folder, excluding temporary files.
    

**Distribution:** Send the resulting .zip file to BJH OS users. They can install it via the BJH OS App Store or by extracting it to their apps folder.

9\. Troubleshooting
-------------------

### Common Issues

*   **Live Preview not updating:** Ensure your browser is Chromium-based and Run App is clicked.
    
*   **Compile fails:** Check console log for missing files or invalid project\_config.js.
    
*   **Assets not appearing:** Confirm the files are inside the assets/ folder.
## BJH OS Studio Guide End Here
---

### Step 4: User Installation
1. The user extracts the ZIP file.  
2. Open the **BJH OS Tool** app.  
3. Click the **Install App** button.  
4. Select the extracted folder.  
5. BJH OS Tool will automatically:
   - Read the `index.html` and `favicon.ico` files.  
   - Detect the app/game name (based on the folder name).  
   - Copy all files from the app folder into the **Installed Apps** folder in the BJH OS main directory.  
   - Save app information in `installed_apps.html`, including app/game name, path to `index.html`, and path to `favicon.ico`.  
6. After installation, **restart or run BJH OS**.  
7. The newly installed app will appear automatically under **Installed Apps**.  
   - Open the Start menu (BJH OS icon at the bottom-left) and type **Installed Apps**, or check **Pinned Apps** to access it quickly.


**No code changes needed!** Installer handles registration automatically.

#### Font Sync with BJH OS Settings

When user changes font in Settings, all apps automatically use the selected font. Add this code to your app's `<head>`:

```html
<!-- Font Sync Script -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const storedFont = localStorage.getItem('selectedFont');
    if (storedFont) {
      document.body.style.fontFamily = storedFont;
    }
  });
</script>
```

**How it works:**
1. User changes font in BJH OS Settings → stored in `localStorage.selectedFont`
2. Your app reads this value on page load
3. Applied to `document.body` → all elements inherit the font
4. Works for both built-in and 3rd-party apps

#### Complete App Example: Calculator

Here's a simple calculator app (works for both built-in and 3rd-party):

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="calc-container">
    <div class="display">0</div>
    <div class="buttons">
      <button class="btn number">7</button>
      <button class="btn number">8</button>
      <button class="btn number">9</button>
      <button class="btn operator">÷</button>
      <button class="btn number">4</button>
      <button class="btn number">5</button>
      <button class="btn number">6</button>
      <button class="btn operator">×</button>
      <button class="btn number">1</button>
      <button class="btn number">2</button>
      <button class="btn number">3</button>
      <button class="btn operator">−</button>
      <button class="btn number">0</button>
      <button class="btn">.</button>
      <button class="btn operator">=</button>
      <button class="btn operator">+</button>
    </div>
  </div>

  <!-- Font Sync Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const storedFont = localStorage.getItem('selectedFont');
      if (storedFont) {
        document.body.style.fontFamily = storedFont;
      }
    });
  </script>
  
  <script src="app.js"></script>
</body>
</html>
```

**style.css:**
```css
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calc-container {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 300px;
}

.display {
  background: #222;
  color: #fff;
  font-size: 32px;
  text-align: right;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: bold;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #f0f0f0;
  cursor: pointer;
  font-weight: 600;
}

.btn.number {
  background: #e3f2fd;
  color: #1976d2;
}

.btn.operator {
  background: #667eea;
  color: white;
}
```

**app.js:**
```javascript
let display = document.querySelector('.display');
let buffer = '0';
let previousValue = null;
let operation = null;

document.querySelectorAll('.btn.number').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const value = e.target.innerText;
    if (buffer === '0') {
      buffer = value;
    } else {
      buffer += value;
    }
    display.innerText = buffer;
  });
});

document.querySelectorAll('.btn.operator').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const op = e.target.innerText;
    if (op === '=') {
      if (operation && previousValue) {
        const result = calculate(previousValue, parseFloat(buffer), operation);
        buffer = String(result);
        display.innerText = buffer;
        previousValue = null;
        operation = null;
      }
    } else {
      previousValue = parseFloat(buffer);
      buffer = '0';
      operation = op;
    }
  });
});

function calculate(prev, current, op) {
  switch (op) {
    case '+': return prev + current;
    case '−': return prev - current;
    case '×': return prev * current;
    case '÷': return prev / current;
    default: return current;
  }
}
```

**How to install & run your app in BJH OS**

1) Install using BJH OS Tool (recommended)

- Open the BJH OS Tool executable located in the project root: `BJH_OS_Tool_64_Bit_4.6.exe` (or `BJH_OS_Tool_32_Bit_4.6.exe` if present).
- Click the **Install App** button in the tool.
- In the file picker, select your app folder (the folder that contains `index.html`, `favicon.ico`, etc.). Select the entire folder — do not pick individual files.
- The tool will copy the folder into `Installed Apps/` and register the app for BJH OS. A success message will confirm installation.

2) Run BJH OS and open the installed app

- Open `desktop1.html` in your browser to start BJH OS (or use your normal workflow to run the OS).
- Click the BJH OS / Start icon in the bottom-left corner.
- Look in **Pinned Apps** or use Start → Search and type "Installed Apps" (or click the `Installed Apps` app if visible).
- Open the `Installed Apps` listing — you should see your installed app listed. Click it to launch in a draggable window.

Notes:
- The installer automatically places apps under `Installed Apps/[APP_NAME]/`. You can also manually copy a prepared app folder into `Installed Apps/` and then refresh BJH OS; the Installer will detect it.
- Built-in apps are added by editing `desktop1.html` (start menu) and placing the app folder under `Root Directory/OS Files/`.

3) Packaging and sharing your app

- To share your app, compress the entire app folder (the folder that contains `index.html` and `favicon.ico`) into a ZIP file.
- Distribute the ZIP. The recipient should extract the ZIP to a temporary location, open the `BJH_OS_Tool_64_Bit_4.6.exe`, click **Install App**, and select the extracted folder.
- After installation the app will appear in the `Installed Apps` listing and Start menu as described above.

Quick manual-install fallback:
- If a user cannot run the Installer, copy the app folder directly into `Installed Apps/` and then open `desktop1.html` and refresh the page — the OS will detect the folder and list the app.

#### Best Practices

**DO:**
- ✅ Use relative paths for all assets (`./assets/image.png`)
- ✅ Include font sync script in `<head>`
- ✅ Keep app responsive (works on 900x600 minimum)
- ✅ Use localStorage for user preferences
- ✅ Include favicon.ico (required)
- ✅ Test in multiple browsers

**DON'T:**
- ❌ Don't use absolute paths (`/assets/` breaks app)
- ❌ Don't use `window.open()` for same-origin (use `window.openAppInWindow()`)
- ❌ Don't assume external network (support offline)
- ❌ Don't use `eval()` or insecure code
- ❌ Don't use special characters in app folder name

#### Testing Checklist

Before submitting/publishing:
- [ ] Folder structure correct (index.html, favicon.ico required)
- [ ] All paths are relative
- [ ] Font sync script included
- [ ] Responsive CSS
- [ ] App opens in draggable window
- [ ] Works offline
- [ ] No console errors
- [ ] Folder name is lowercase (no spaces/special chars)

### Modifying Styles

**Global theme (Colors, Fonts):**
Edit `Styles/index.css` (CSS variables at top):
```css
:root {
  --primary: #0066cc;
  --secondary: #f0f0f0;
  --font-main: 'Poppins', Arial, sans-serif;
}
```

**Taskbar/Desktop:**
Edit `Styles/style.css` (`.taskbar`, `.startmenu`, `.desktop` classes)

**Window appearance:**
Edit inline styles in `desktop1.html` (`.app-window`, `.app-window.maximized` CSS rules)

### Debugging

**Browser Console:**
```javascript
// Check if window system is loaded
console.log(window.openAppInWindow);  // Should be a function

// Manually open a window
window.openAppInWindow('Root Directory/OS Files/calculator.html', 'Calculator');

// Check z-index stack
console.log(document.querySelectorAll('.app-window'));
```

**Service Worker:**
- DevTools → Application → Service Workers
- Check "Offline" to test offline mode
- Clear cache: "Clear storage" button

---

## API Reference

### Window Management API

#### `window.openAppInWindow(url, title)`
Opens an app in a draggable iframe window.

**Parameters:**
- `url` (string): Path or URL to app HTML file
- `title` (string, optional): Window title (defaults to filename)

**Returns:** Window DOM element (`.app-window` div)

**Example:**
```javascript
window.openAppInWindow('Root Directory/OS Files/calculator.html', 'Calculator');
window.openAppInWindow('Root Directory/OS Files/paint.html', 'Paint');
```

**Notes:**
- Same-origin URLs only (security restriction)
- External URLs fall back to `window.open()` in new tab
- Title auto-truncates with ellipsis if too long

### Event Interception

The window system automatically intercepts:
- **Anchor clicks** on same-origin links → open in iframe
- **window.open()** calls for same-origin URLs → open in iframe
- External links (https://...) → open in new tab (default)

**To force a link to open natively:**
```html
<!-- Add data-native attribute -->
<a href="Root Directory/OS Files/app.html" data-native>
  Open in new tab
</a>
```

### CSS Classes (Window System)

| Class | Purpose |
|-------|---------|
| `.app-window` | Draggable window container |
| `.app-window.maximized` | Fullscreen/maximized state |
| `.win-header` | Titlebar (draggable area) |
| `.win-title` | Window title text |
| `.win-controls` | Control buttons (maximize, close) |
| `.disable-select` | Prevents text selection during drag |

### Lifecycle Events

| Event | Trigger | Use Case |
|-------|---------|----------|
| `mousedown` (header) | User clicks titlebar | Start dragging |
| `mousemove` (document) | User moves mouse | Update window position |
| `mouseup` (document) | User releases mouse | Stop dragging |
| `dblclick` (header) | User double-clicks titlebar | Toggle maximize |
| `click` (close btn) | User clicks X button | Remove window |

---

## Troubleshooting

### Common Issues

**Q: Apps won't open in windows (opening in new tab instead)**
- **Cause:** `target="_blank"` on anchor tag, or URL is external origin
- **Solution:** Remove `target="_blank"` from HTML; ensure URL is same-origin

**Q: window.open() not intercepted**
- **Cause:** External URL (different domain) or script error
- **Solution:** Check browser console for errors; verify URL starts with `http://localhost` or relative path

**Q: Window can't be dragged**
- **Cause:** Window is maximized, or click on iframe content (not titlebar)
- **Solution:** Click titlebar to drag; click maximize button to restore; avoid clicking inside iframe

**Q: Service Worker not caching offline**
- **Cause:** Running via `file://` protocol instead of HTTP server
- **Solution:** Use local web server (Python, Node.js, etc.); open via `http://localhost:port`

**Q: Start menu not showing**
- **Cause:** CSS not loaded, or JS error in `sketch.js`
- **Solution:** Open DevTools → Console, check for JS errors; ensure all CSS files are linked

**Q: Icons not showing**
- **Cause:** Incorrect path to image asset
- **Solution:** Verify relative paths; use absolute paths from project root (e.g., `Assets/...` not `../Assets/...`)

### Browser Compatibility Issues

| Issue | Browser | Fix |
|-------|---------|-----|
| Animations jittery | Safari | Add `-webkit-` prefix; use `transform` instead of `top/left` |
| Service Worker fails | Firefox (offline mode) | Ensure served over HTTP (not file://) |
| Flexbox layout broken | Edge 12-15 | Use older syntax; add `-ms-` prefixes |
| Grid layout broken | IE 11 | Not supported; use fallback flexbox |

### Performance Optimization

**Slow app launching:**
- Minimize iframe HTML (remove unused scripts/styles)
- Lazy-load app resources (load JS on-demand)
- Use CDN for external assets

**High memory usage:**
- Close unused windows (each window = iframe = process memory)
- Clear browser cache periodically
- Reduce animation frame rate (use `requestAnimationFrame` wisely)

---

## Contributing

### Workflow for Contributors

1. **Fork/Clone** the repository
2. **Create feature branch:** `git checkout -b feature/my-feature`
3. **Make changes** following code style guidelines
4. **Test** in multiple browsers
5. **Commit:** `git commit -m "Add my feature"`
6. **Push:** `git push origin feature/my-feature`
7. **Submit PR** with description and screenshots

### Bug Reports

Include:
- Detailed description of issue
- Steps to reproduce
- Browser/OS version
- Screenshot/video if possible
- Error messages from console

### Feature Requests

Describe:
- Use case and user story
- Expected behavior
- Proposed implementation (optional)
- UI mockups (optional)

---

## Appendix: Useful Resources

### Official Docs
- [MDN Web Docs](https://developer.mozilla.org/) — HTML/CSS/JS reference
- [W3C Standards](https://www.w3.org/) — HTML/CSS specifications
- [PWA Documentation](https://web.dev/progressive-web-apps/) — Service Workers & PWA

### Design Resources
- [Material Design Icons](https://fonts.google.com/icons) — Icon library
- [Google Fonts](https://fonts.google.com/) — Font collection
- [CSS Tricks](https://css-tricks.com/) — CSS guides and tricks

### Tools
- [VS Code](https://code.visualstudio.com/) — Code editor
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) — Browser debugging
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) — Performance audit
- [WAVE](https://wave.webaim.org/) — Accessibility checker

### Community
- GitHub Issues — Bug tracking and feature requests
- Stack Overflow — Q&A for coding problems
- Reddit r/webdev — Web development discussion

---

## License & Credits

**Project:** BJH OS  
**Version:** 4.6  
**Developer:** Muhammad Haris  
**Status:** Open-concept project (not affiliated with Microsoft Windows)

**Icon Attribution:**
- [icons8.com](https://icons8.com/) — Icons
- [Google Fonts & Icons](https://fonts.google.com/) — Fonts and Material Design icons
- [Weatherwidget.org](https://weatherwidget.org/) — Weather widget

**Disclaimer:**
This project is not affiliated with Microsoft or Windows. It is an Web Based Operating System project demonstrating web technologies.

---

**End of Developer Documentation**

For questions, issues, or contributions, please contact us on [Discord](https://discord.gg/SdDSUtCbX8)
