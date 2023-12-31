var note = new Audio('note.wav');

function playit() {
    var numy = Number(document.getElementById('numerator').value);
    var demi = Number(document.getElementById('denomenator').value);
    var plauback = demi/numy;
    note.playbackRate = plauback;
    note.play();
}

function buttonP() {
    document.getElementById('funkybutton').src = "buttonP.png";
    console.log('down');
}
function buttonU() {
    document.getElementById('funkybutton').src = "buttonU.png";
    console.log('up');
}

function WHITE() {
    document.getElementsByTagName("input")[0].style.color = "#ffffff";
    document.getElementsByTagName("input")[1].style.color = "#ffffff";
}
