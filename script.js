let activeWindow = null;
let zIndexCounter = 10;
function dragMouseDown(e, windowId) {
    if (e.target.classList.contains('close-btn')) return;
    e = e || window.event;
    e.preventDefault();
    activeWindow = document.getElementById(windowId);
    if (!activeWindow) return;
    zIndexCounter++;
    activeWindow.style.zIndex = zIndexCounter;
    let posX = e.clientX;
    let posY = e.clientY;
    document.onmousemove = function(evt) {
        evt = evt || window.event;
        evt.preventDefault();
        let dx = posX - evt.clientX;
        let dy = posY - evt.clientY;
        posX = evt.clientX;
        posY = evt.clientY;  
        activeWindow.style.top = (activeWindow.offsetTop - dy) + "px";
        activeWindow.style.left = (activeWindow.offsetLeft - dx) + "px";
    };
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}
function openWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.display = "block";
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;
    }
}
function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.display = "none";
    }
}
let calcVal = "0";
function calcInput(num) {
    if (calcVal === "0" || calcVal === "Error") {
        calcVal = String(num);
    } else {
        calcVal += String(num);
    }
    updateCalcDisplay();
}
function calcOp(op) {
    if (calcVal !== "Error") {
        calcVal = calcVal.trim() + " " + op + " ";
        updateCalcDisplay();
    }
}
function calcClear() {
    calcVal = "0";
    updateCalcDisplay();
}
function calcEval() {
    try {
        // Strip out trailing '=' if passed in string
        let cleanExpr = calcVal.replace(/=/g, '').trim();
        let result = Function('"use strict"; return (' + cleanExpr + ')')();
        calcVal = String(result);
    } catch (err) {
        calcVal = "Error";
    }
    updateCalcDisplay();
}
function updateCalcDisplay() {
    const display = document.getElementById('calc-display');
    if (display) {
        display.value = calcVal;
    }
}
function updateClock() {
    const clockEl = document.getElementById('taskbar-time');
    if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();
function setTheme(theme) {
    if (theme === 'sunset') {
        document.body.style.background = "linear-gradient(135deg, #4c0519, #881337, #1e1b4b)";
    } else if (theme === 'emerald') {
        document.body.style.background = "linear-gradient(135deg, #064e3b, #022c22, #0f172a)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    if (noteInput) {
        noteInput.value = localStorage.getItem('webos_notes') || '';
        noteInput.addEventListener('input', () => {
            localStorage.setItem('webos_notes', noteInput.value);
        });
    }
});
