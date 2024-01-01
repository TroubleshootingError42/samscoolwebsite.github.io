function playAudio() { 
    console.log('working');
    var seintheme = new Audio("https://www.redringtones.com/wp-content/uploads/2016/12/seinfeld-theme-song.mp3");
    seintheme.play();
    seintheme.loop = true;
    document.getElementsByTagName("html")[0].style.backgroundImage = "url(seinback.gif)";
  } 