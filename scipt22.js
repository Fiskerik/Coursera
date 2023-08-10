(function(){
    "use strict";

    const parag = document.querySelector('p');
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', function(){
        parag.style.color = "red";
    });

})();