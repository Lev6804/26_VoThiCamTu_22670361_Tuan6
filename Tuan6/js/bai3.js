var images = [
    "../image/b1.jpg"
    , "../image/b2.jpg"
    , "../image/b3.jpg"
    , "../image/b4.jpg"
    , "../image/b5.jpg"
    , "../image/b6.jpg"
    , "../image/b7.jpg"
    , "../image/b8.jpg"
    , "../image/b9.jpg"
    , "../image/b10.jpg"
];

var currentImageIndex = 0;
var timeoutId = null;

function changeImage() {
    var imgElement = document.getElementById('image');
    imgElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    timeoutId = setTimeout(changeImage, 1000); 
}

function stop(){
    clearTimeout(timeoutId);
    timeoutId = null;
    currentImageIndex = 0; 
    var imgElement = document.getElementById('image');
    imgElement.src = images[currentImageIndex]; 
}
   

