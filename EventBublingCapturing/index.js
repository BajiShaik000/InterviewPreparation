document.querySelector("#grandparent").addEventListener("click",(e)=>{
    console.log("Grandparent Clicked");
    e.stopPropagation();
},true);

document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent Clicked");
},true);

document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child Clicked");
},true);


//First Event capturing happens and then Event bubling happens