(function(){
    "use strict";
    
    const heading = document.querySelector('h1');
    const formtag = document.querySelector('form');
    
    formtag.addEventListener('submit', function(event){
        event.preventDefault();
        const fontnumber = parseInt(document.querySelector('input').value);
        if(fontnumber){
            heading.style.fontSize = fontnumber + "px";

        }
        else{
            alert("This is not a number!");
        }

    });


})();