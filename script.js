let activeWindow = null;
let zIndexCounter = 10;
function dragMouseDown(e, windowId) {
    e = e || window.event;
    if (e.target.tagName === 'BUTTON') return;
    activeWindow = document.getElementById(windowId);
    if (!activeWindow) return;
    zIndexCounter++;
    activeWindow.style.zIndex = zIndexCounter;
    let posX = e.clientX;
    let posY = e.clientY;
    document.onmousemove = function(evt) {
        evt = evt || window.event;
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
let currentExpression = "";
function calcInput(val) {
    if (currentExpression === "Error") currentExpression = "";
    currentExpression += val;
    document.getElementById('calc-display').value = currentExpression;
}
function calcOp(op) {
    if (currentExpression === "Error") currentExpression = "";
    currentExpression += op;
    document.getElementById('calc-display').value = currentExpression;
}
function calcClear() {
    currentExpression = "";
    document.getElementById('calc-display').value = "0";
}
function calcEval() {
    try {
        let result = Function('"use strict"; return (' + currentExpression + ')')();
        currentExpression = String(result);
        document.getElementById('calc-display').value = currentExpression;
    } catch (e) {
        document.getElementById('calc-display').value = "Error";
        currentExpression = "Error";
    }
}
