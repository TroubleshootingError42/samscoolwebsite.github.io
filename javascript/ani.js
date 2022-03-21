//getting date
var now = new Date();
var date = (now.getMonth()+1)+''+now.getDate();
//setting aniversary text
if (date==323){

    //years scince 2021
    const div = document.createElement("div");
    div.style = "display: flex; align-items: center; font-size: 30px;"
    div.innerHTML = (now.getFullYear()-2021) + '<img src="https://samscoolwebsite.com/images/logo.gif">';
    document.body.appendChild(div);
    
    
}