/*(function(){
    "use strict";
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let currentimage = 0;
    const photo = document.getElementById('myimage');
    
    document.getElementById('next').onclick = nextImage;
    document.getElementById('previous').onclick = previousImage;

    
        function nextImage(){
            currentimage++;
            if(currentimage > 4){
                currentimage = currentimage - myImages.length;
            }
            
            photo.setAttribute('src',myImages[currentimage]);
            
        }
        function previousImage(){
            currentimage--;
            if(currentimage < 0){
                currentimage = currentimage + myImages.length;
            }
            
            document.getElementById('myimage').src = myImages[currentimage];
        }


})();*/