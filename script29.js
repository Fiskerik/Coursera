(function(){

    "use strict";
    const getbody = document.querySelector('body');
       
    window.addEventListener('scroll', function(){

        const pagetop = window.pageYOffset;

        switch(true){
        case pagetop < 500: getbody.className="one"; break;
        case pagetop < 1000: getbody.className="two"; break;
        case pagetop < 1500: getbody.className="three"; break;
        case pagetop < 2000: getbody.className="four"; break;
        case pagetop < 2500: getbody.className="five"; break;
    }

    });

})();