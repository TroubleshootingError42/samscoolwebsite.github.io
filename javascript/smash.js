quick = 360
guyisok = true
timeshot = 0

function kill() {
    timeshot++
    if (timeshot == 10)
    {
        alert("haven't you done enough damage already")
    }


    //recoil gun
    document.getElementById("killer").style = "transform: rotate(45deg);";
    //guy dies
    guyisok = false

    if (quick == 0) 
    {
        document.getElementById("flipper").style = "transform: rotate(270deg);"
    }
    else
    {
        document.getElementById("flipper").style = "transform: rotate(-90deg);"
    }

    
    //revert from recoil
    setTimeout(puthimback, 250);

function puthimback() {
    document.getElementById("killer").style = "transform: rotate(0deg);"
}
}



function flip() {
    if (guyisok)
    {
        document.getElementById("flipper").style = "transform: rotate("+quick+"deg);";

        if (quick == 360) 
        {
            quick = 0
        }
        else
        {
            quick = 360
        }
    }
    else
    {
        alert("you have killed him")
    }
    

}