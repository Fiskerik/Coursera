(function(){
    const newdiv = document.querySelector('div');
    const btn = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const parag = document.createElement('p');
    const text = document.createTextNode("Here is a new paragraph!");

    btn.addEventListener('click', function(){
        parag.appendChild(text);
        newdiv.appendChild(parag);

    });
    
    btn2.addEventListener('click', function(){
        newdiv.removeChild(parag);
    });



})();