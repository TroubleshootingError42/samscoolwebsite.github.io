var color;
var quality;
var quantity;
var itsNotOkay = true
var slidePos = 0

let slideImgs = ["products/product.jpg", "products/cover.png", "products/coverBlue.png", "products/coverREB.png", "products/coverWalmart.png" ]



///CAROSUEL

//To do: make it so that images in the carosul are centered

function next()
{
  if (slidePos < slideImgs.length-1)
  {
    slidePos++
  }
  else {
    slidePos = 0
  }

document.getElementById("crapImg").src = slideImgs[slidePos];
}

function back()
{
  if (slidePos > 0)
  {
    slidePos--
  }
  else {
    slidePos = slideImgs.length-1
  }

document.getElementById("crapImg").src = slideImgs[slidePos];;
}


function center()
{
document.getElementById("crapImg").style.top = (500-document.getElementById("crapImg").height)/2+"px"
}






///DOWNLOAD

function purchase() {
  //get details from dropdowns and what not
    color = document.getElementById("colorSelect").value;
    quality = document.getElementById("qualitySelect").value;
    quantity = document.getElementById("carlosInp").value;

  //get the name of the file based on aformentioned dropdowns and what not
    filename = "cover"+color+"."+quality;
    console.log(filename);

  //set up a download element
    const anchor = document.createElement('a');
    anchor.href = "products/"+filename;
    anchor.download = filename;
    anchor.target = "_blank";
    anchor.innerHTML = "e";


    document.body.appendChild(anchor);
    
    if (quantity > 5 && itsNotOkay) 
    {
      //if you want to download more than 5 files, it let's you know you're about to download more than 5 files
    text="hey, you're about to download "+quantity+" files, which could be a lot, idk";
        if (confirm(text) == true) 
          {
            getfiles();
            itsNotOkay = false;
          }
    }
    else 
    {
        getfiles();
    }

    
    
    
  //click the newly created element
    function getfiles(){
        for (let i = 0; i < quantity; i++) {
            anchor.click(); 
        }
        anchor.remove;
    }
    
    
    
  }