//getting date
var now = new Date();
var date = (now.getMonth()+1)+''+now.getDate();
//setting aniversary text
if (date==323){

    //years scince 2021
    const ani = document.createElement("div");
    ani.style = "display: flex; align-items: center; font-size: 30px;"
    ani.innerHTML = '<i>'+(now.getFullYear()-2021)+'</i>' + '<img src="images/ani.gif" style="width: 50%;">';
    document.body.appendChild(ani);
    
    
}
