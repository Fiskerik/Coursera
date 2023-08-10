(function(){

    "use strict";

    const parag = document.querySelectorAll('p');
    const btn = document.querySelector('button');
    btn.addEventListener('click', function(){

        for (let i=0; i<parag.length; i++){
        parag[i].style.color = "red";
        }
    });

})();