window.onload = function()
{
//roll a number 0 to 5, if its less than 1, make the splash text the survey, else, make it a random splash
if (Math.random()*5 < 1) {
  document.getElementById("splash").innerHTML = "<a href='https://forms.gle/u8SQaAH6rXxBpcx19' target='_blank'>Please take our survey</a>"
}
else {
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
}
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

