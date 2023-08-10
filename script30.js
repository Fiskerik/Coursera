(function(){

    "use strict";

        const getbody = document.querySelector('body');
            
            document.addEventListener('keydown', function(event){

                const keypress = event.which;

                switch(keypress){
                case 66: getbody.className="one"; break;
                case 86: getbody.className="two"; break;
                case 67: getbody.className="three"; break;
                case 70: getbody.className="four"; break;
                case 71: getbody.className="five"; break;
            }


            });


})();