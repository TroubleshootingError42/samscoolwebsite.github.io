curse = false
funnypress = 0;
funnybusiness = true;
heylisten();

function removeCountry() {

    //TAKE THE LIST OPTION THAT'S BEEN SELECTED AND APPLY IT TO VARIABLE "VICTIM"
    victim = $('#countrySelect').find(":selected").val();

    //If they choose "country select" they get the funny award
    if (victim == "AAAfunny") {
        funnypress++;
        if (funnypress == 5 && curse == false) {
            $("#award").css("opacity", 1);
        }
    }

    //MAKES SURE ALL THE FUN STUFF HAPPENS ONLY WHEN THEY'RE NOT BEING FUNNY
    else {

        //chooses one fo five random yay sound and plays it if the curse isn't on
        if ((!(sickeninglist.includes(victim)) && curse == false) || funnybusiness == false) {
            cheerChoice = "yay/yay"+(Math.floor(Math.random()*5)+1)+".mp3";
            new Audio(cheerChoice).play();
        }

        //When the correct country is selected, the curse is set to true, this will only happen once
        else if (curse == false){
            curse = true;
            //PLAY THE DRONE
            new Audio("yay/Silence.mp3").play();
            //CSS MAKEOVER!!!
            $('#bigolmap').css({"fill": "#000000", "stroke": "#999999", "stroke-width": "1"});
            $('body').css({"background-image": "url('bg.gif')", "background-color": "#000000"});
            $('button, option, select').css({"background-color": "#000000", "color": "#ffffff", "border-color": "#000000"});
            $('#award').attr('src', 'mistake.png');
            $('#funnybusiness').remove();
            $('#olblue').remove();
            $('title').text('⠀');
            $('#icohaha').attr('href', 'badico.png');
            $('a').css({"color": "#ffffff"});
        }

        //REMOVE THE COUNTRY AND ITS ITEM IN THE LIST
        $('[name="'+victim+'"]').remove();
        $('option[value="'+victim+'"]').remove();
    }
}
