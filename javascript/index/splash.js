window.onload = function() {
  var splashList = [
      "<i>Mindcraft?</i> No no no no no, I will not endulge!",
      "r/beigejeans, that's a nice place",
      "Born and raised",
      "Famous rapper emcee MF DOOM",
      "<div onmouseover='up()'>hey, hover over me</div>",
      "Charnlie Brownd",
      "Due to inflation, sam's cool texture pack is now even more free",
      "<a href='https://google.com'>google.com</a>",
      "<a href='https://grabify.link/3WD3L6'>Hey click this to give me your ip adress</a>",
      "Shoutout to AllIn2Ring",
      "I talk to a skeleton, he helps me realize my faults."
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

