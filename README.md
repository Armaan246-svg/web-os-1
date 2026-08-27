# AetherOS

A small web-based desktop interface I made using HTML, CSS, and JavaScript.

I wanted to see if I could make a browser page feel a little more like an actual operating system instead of just making another normal website.

## What it has

- Desktop-style interface
- Notepad
- Calculator
- Settings window
- Draggable windows
- Clock
- Different background themes
- Notepad saves text using localStorage

## How it works

The project is split into three main files:

- `index.html` - the structure of the desktop and applications
- `style.css` - the layout and appearance
- `script.js` - window movement, calculator, clock, themes, and notepad saving

There are no frameworks or libraries being used. It is just HTML, CSS, and vanilla JavaScript.

## Notepad

The notepad uses `localStorage`, so the text stays saved when the page is refreshed.

I also fixed an issue where the Notepad window would close but could not be opened again. The desktop icon was pointing to the wrong window ID.

## Things I learned

This project helped me understand how HTML elements can be controlled with JavaScript.

I also learned more about:

- DOM elements
- JavaScript event handlers
- CSS positioning
- Moving elements around the page
- localStorage
- Keeping multiple windows organized

## What I want to improve

There are still things I want to add later:

- More applications
- Better window resizing
- A proper taskbar
- More themes
- Better mobile support
- More desktop customization

## Running it

You don't need to install anything.

Download or clone the repository and open `index.html` in a browser.

## Built with

HTML  
CSS  
JavaScript
