(function(){
    "use strict";
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let currentimage = 0;
    const photo = document.getElementById('myimage');
    let container = document.getElementById('content');
    const nextbtn = document.getElementById('')
    
    document.getElementById('next').onclick = nextImage;
    document.getElementById('previous').onclick = previousImage;

    
        function nextImage(){
            currentimage++;
            if(currentimage > 4){
                currentimage = currentimage - myImages.length;
            }
            swapimage();
            
        }
        function previousImage(){
            currentimage--;
            if(currentimage < 0){
                currentimage = currentimage + myImages.length;
            }
            swapimage();
        }
       
        function swapimage(){
    
            var newSlide = document.createElement('img');
            newSlide.src = `${myImages[currentimage]}`;
            newSlide.className = "fadeinimg";
            container.appendChild(newSlide);
            
            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
        }
   

})();