# AetherOS - Lightweight Web Desktop Environment

A custom, web-based operating system interface built using vanilla HTML, CSS, and modern JavaScript. Designed to mimic a functional desktop experience directly inside any modern web browser.

Live Demo: [Insert Your Deployed Link Here]

---

## 🌟 Key Features

* **Draggable Window Management**: Custom event-driven window dragging with active window stack focus (`zIndex` layering).
* **Interactive Notepad**: Built-in simple text editor with real-time `localStorage` synchronization so notes persist across refreshes.
* **Functional Calculator**: On-screen calculator application supporting standard arithmetic operations.
* **Custom Feature - Live Dynamic Theme Switcher**: Change OS desktop background gradients on the fly between Midnight, Sunset, and Emerald themes.
* **Live System Clock**: Dynamic real-time taskbar clock displaying local time.

---

## 🛠️ Built With

* **HTML5**: Semantic structural markup for desktop icons, taskbar, and modular window components.
* **CSS3**: Glassmorphism aesthetic using CSS backdrop filters, custom color variables, and flex/grid layouts.
* **JavaScript (ES6+)**: Custom DOM drag-and-drop mechanics, state persistence, and real-time updates without heavy external frameworks.

---

## 📖 Devlogs & Progress

### Devlog 1: Desktop Layout & Window Architecture
* Laid down the foundational DOM structure using standard HTML tags.
* Created the desktop environment grid, taskbar layout, and base window containers.
* Styled the initial desktop using modern dark glassmorphic CSS rules.

### Devlog 2: Custom Mouse Dragging Mechanics
* Avoided external heavy UI libraries and implemented a raw JavaScript event listener system (`mousedown`, `mousemove`, `mouseup`).
* Added coordinate offsets calculation to smoothly drag windows around the screen.
* Handled window focus management using an incremental `zIndex` state counter.

### Devlog 3: App Logic & Dynamic Theme Switcher
* Built out individual application functionality: interactive calculator and persistent localStorage notepad.
* Added an unlisted custom display settings panel featuring a real-time background gradient theme switcher.
* Tested cross-browser desktop rendering and finalized deployment pipeline via GitHub Pages.

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/web-os-1.git](https://github.com/YOUR_USERNAME/web-os-1.git)
