(function(){
    "use strict";

    const newdiv = document.querySelector('div');
    const btn = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
   
    let numofparag = 0;

    btn.addEventListener('click', function(){
        numofparag++;
        const parag = document.createElement('p');
        const text = document.createTextNode(`Here is paragraph number: ${numofparag}`);
        
        parag.appendChild(text);
        newdiv.appendChild(parag);

    });
    
    btn2.addEventListener('click', function(){
        if(numofparag > 1){
        numofparag--;
        newdiv.removeChild(newdiv.children[numofparag]);
        }
        else
        alert("Dont remove the last paragraph!");
    });



})();