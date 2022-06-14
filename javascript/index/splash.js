window.onload = function() {
  var splashList = [
      "<i>Mindcraft?</i> No no no no no, I will not endulge!",
      "r/beigejeans, that's a nice place",
      "Born and raised",
      "I might hold on to that ip adress of yours",
      "The Js? Never heard of them.",
      "Famous rapper emcee MF DOOM",
      "<div onmouseover='up()'>hey, hover over me</div>",
      "it's being delivered to you right now!",
      "Charnlie Brownd",
      "Due to inflation, sam's cool texture pack is now even more free"
  ];

  document.getElementById("splash").innerHTML = splashList[Math.floor(Math.random() * splashList.length)];
};


//splash functions
var splashRight = 0;
function up() {
  document.getElementById("splash").innerHTML = "i am free";
  hovMove1()
}

function hovMove1() {
  splashRight += 7
  document.getElementById("splash").style.right = splashRight+"px"
setTimeout(hovMove2, 10)
}
           
function hovMove2() {
if (splashRight > screen.width) { console.log("it's gone"); }
else { setTimeout(hovMove1, 10); }
}

