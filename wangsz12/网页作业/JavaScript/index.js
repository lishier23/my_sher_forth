var autoSwitch = setInterval(next, 3000);
var now = 1, pre = 1;

function last() {
    clearInterval(autoSwitch);
    pre = now;
    now--;
    if (!now) now = 4;
    switchImg(pre, now);
    autoSwitch = setInterval(next, 3000);
}

function next() {
    clearInterval(autoSwitch);
    pre = now;
    now = (now + 1) % 5;
    if (!now) now = 1;
    switchImg(pre, now);
    autoSwitch = setInterval(next, 3000);
}

function switchImg(preIdNum, nowIdNum) {
    document.getElementById("img" + preIdNum).className = "img-others";
    document.getElementById("img" + nowIdNum).className = "img-now";
    document.getElementById("bnav" + preIdNum).className = "circle bottomnav-others";
    document.getElementById("bnav" + nowIdNum).className = "circle bottomnav-now";
}

function continueAutoSwitch() {
    autoSwitch = setInterval(next, 3000);
}

function selectImg(which) {
    clearInterval(autoSwitch);
    pre = now;
    now = which;
    switchImg(pre, now);
    autoSwitch = setInterval(next, 3000);
}

function showSubtopic() {
    setTimeout(function() {
        for (var i = 1; i <= 12; i++){
            setTimeout(showSpecificSubtopic, 100 * i, i);
        }
    }, 1000);
    
}

var cursorBlinkVar;
function showSpecificSubtopic(which) {
    if (which == 12) {
        document.getElementById("cursor").style.visibility = "visible";
        cursorBlinkVar = setInterval(cursorBlink, 500);
    }
    else {
        document.getElementById("subt" + which).style.visibility = "visible";
        setTimeout(showSpecificSubtopicWord, 100, which);
    }
}

var subtopicWords = new Array("t","o","&nbsp","m","y","&nbsp","p","a","g","e",".");
function showSpecificSubtopicWord(which) {
    document.getElementById("subt" + which).innerHTML = subtopicWords[which-1];
}

var cursorVisible = true;
function cursorBlink() {
    var cursor = document.getElementById("cursor");
    if (cursorVisible) cursor.style.visibility = "visible";
    else cursor.style.visibility = "hidden";
    cursorVisible = !cursorVisible;
}

/*实现放大
var zoomed = false;
function imageZoom() {
    if (!zoomed) {
        clearInterval(autoSwitch);
        document.getElementById("img" + now).className = "img-now imagezoomin";
        document.getElementById("imgboxid").style.overflow = "visible";
        zoomed = true;
    }
    else {
        document.getElementById("img" + now).className = "imagezoomout";
        setTimeout(function(){}, 500);
        document.getElementById("img" + now).className = "img-now";
        document.getElementById("imgboxid").style.overflow = "hidden";
        zoomed = false;
        autoSwitch = setInterval(next, 3000);
    }
}
*/

/*测试切换图片
function test(){
    alert("pre:" + pre + "  now:" + now);
}
*/