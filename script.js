let activeWindow = null;
let zIndexCounter = 10;
function dragMouseDown(e, windowId) {
    e = e || window.event;
    e.preventDefault();
    activeWindow = document.getElementById(windowId);
    zIndexCounter++;
    activeWindow.style.zIndex = zIndexCounter;
    let posX = e.clientX;
    let posY = e.clientY;
    document.onmousemove = function(e) {
        e.preventDefault();
        let dx = posX - e.clientX;
        let dy = posY - e.clientY;
        posX = e.clientX;
        posY = e.clientY;
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
    win.style.display = "block";
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
}
function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}
function updateClock() {
    const now = new Date();
    document.getElementById('taskbar-time').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
let calcVal = "0";
function calcInput(num) {
    if (calcVal === "0") calcVal = num;
    else calcVal += num;
    document.getElementById('calc-display').value = calcVal;
}
function calcOp(op) {
    calcVal += " " + op + " ";
    document.getElementById('calc-display').value = calcVal;
}
function calcClear() {
    calcVal = "0";
    document.getElementById('calc-display').value = calcVal;
}
function calcEval() {
    try {
        calcVal = eval(calcVal).toString();
    } catch {
        calcVal = "Error";
    }
    document.getElementById('calc-display').value = calcVal;
}
function setTheme(theme) {
    if (theme === 'sunset') {
        document.body.style.background = "linear-gradient(135deg, #4c0519, #881337, #1e1b4b)";
    } else if (theme === 'emerald') {
        document.body.style.background = "linear-gradient(135deg, #064e3b, #022c22, #0f172a)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)";
    }
}
const noteInput = document.getElementById('note-input');
noteInput.value = localStorage.getItem('webos_notes') || '';
noteInput.addEventListener('input', () => {
    localStorage.setItem('webos_notes', noteInput.value);
});
