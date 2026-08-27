var currentWin = null;
var topZ = 100;
var calcExpr = "0";

function grabWindow(e, elementId) {
    currentWin = document.getElementById(elementId);

    if (!currentWin) {
        return;
    }

    topZ++;
    currentWin.style.zIndex = topZ;

    var startX = e.clientX;
    var startY = e.clientY;

    document.onmousemove = function(evt) {
        var diffX = startX - evt.clientX;
        var diffY = startY - evt.clientY;

        startX = evt.clientX;
        startY = evt.clientY;

        currentWin.style.top =
            (currentWin.offsetTop - diffY) + "px";

        currentWin.style.left =
            (currentWin.offsetLeft - diffX) + "px";
    };

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

function showApp(id) {
    var app = document.getElementById(id);

    if (!app) {
        return;
    }

    app.style.display = "block";

    topZ++;
    app.style.zIndex = topZ;
}

function hideApp(id) {
    var app = document.getElementById(id);

    if (!app) {
        return;
    }

    app.style.display = "none";
}

function pressNum(val) {
    if (calcExpr === "0" || calcExpr === "Err") {
        calcExpr = val;
    } else {
        calcExpr += val;
    }

    document.getElementById("screen").value = calcExpr;
}

function pressOp(op) {
    if (calcExpr === "Err") {
        return;
    }

    calcExpr += op;
    document.getElementById("screen").value = calcExpr;
}

function resetCalc() {
    calcExpr = "0";
    document.getElementById("screen").value = "0";
}

function runCalc() {
    try {
        var answer = Function(
            '"use strict"; return (' + calcExpr + ')'
        )();

        calcExpr = String(answer);
    } catch (error) {
        calcExpr = "Err";
    }

    document.getElementById("screen").value = calcExpr;
}

function swapTheme(mode) {
    if (mode === "neon") {
        document.body.style.background = "#2e1065";
    } else if (mode === "retro") {
        document.body.style.background = "#4b5563";
    } else {
        document.body.style.background = "#111827";
    }
}

function tickClock() {
    var now = new Date();

    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");

    var clock = document.getElementById("clock-node");

    if (clock) {
        clock.innerText = hours + ":" + minutes + ":" + seconds;
    }
}

function loadNotepad() {
    var noteBox = document.getElementById("my-notes");

    if (!noteBox) {
        return;
    }

    var savedNotes = localStorage.getItem("saved_scratchpad");

    if (savedNotes !== null) {
        noteBox.value = savedNotes;
    }

    noteBox.addEventListener("input", function() {
        localStorage.setItem(
            "saved_scratchpad",
            noteBox.value
        );
    });
}

setInterval(tickClock, 1000);

tickClock();
loadNotepad();
