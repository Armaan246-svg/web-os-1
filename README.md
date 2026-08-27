# WebOS 1 - Personal Desktop Environment

Welcome to my WebOS project! This is a simple, lightweight desktop environment built from scratch using HTML, CSS, and plain JavaScript. It runs completely inside any web browser and mimics a real operating system layout with windows, shortcuts, and a functional taskbar.

---

## 🌟 Features

* **Draggable Windows**: Click and hold the header bar of any window to drag it around your screen freely.
* **Persistent Notepad**: A built-in scratchpad where you can write down notes. Anything you type is automatically saved to your browser's local storage, so your notes won't disappear when you refresh or close the tab.
* **Working Calculator**: A handy calculator app for basic arithmetic operations (addition, subtraction, multiplication, and division).
* **Live Taskbar Clock**: Shows the exact current time at the bottom right corner of the screen, updating live every second.
* **Theme Switcher (Custom Feature)**: Found inside the Display Settings window. Lets you switch between Midnight, Sunset, and Emerald desktop background gradients on the fly.
* **Open & Close Apps**: Desktop icons launch applications, and pressing the `×` button closes them cleanly without breaking screen interaction.

---

## 🛠️ Built With

* **HTML5**: Defines the structure for desktop icons, application windows, and taskbar elements.
* **CSS3**: Handles dark mode styling, window layering, glassmorphism UI, and grid layouts.
* **JavaScript (Vanilla ES6)**: Powers window dragging mechanics, mouse event tracking, local storage savings, and math calculation logic without any external libraries.

---

## 📁 Project Structure

```text
web-os-1/
├── index.html    # Main page containing desktop layout and windows
├── style.css     # Glassmorphism styling, layout rules, and background themes
├── script.js    # Drag-and-drop logic, app controls, clock, and calculator code
└── README.md     # Documentation and devlogs
