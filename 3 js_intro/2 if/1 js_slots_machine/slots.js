let images = ['7.jpg', 'banana.png', 'bell.webp', 'cherry.webp', 'crown.png', 'horse.webp', 'strawberry.png'];
let money = 200;
function getNewImages() {
    let p1idx = Math.floor(Math.random() * images.length);
    let p2idx = Math.floor(Math.random() * images.length);
    let p3idx = Math.floor(Math.random() * images.length);
    let p1 = images[p1idx];
    let p2 = images[p2idx];
    let p3 = images[p3idx];
    document.getElementById('img1').src=p1;
    document.getElementById('img2').src=p2;
    document.getElementById('img3').src=p3;

    // p1 = first image,  for example '7.jpg'
    // p2 = second image, for example 'banana.png'
    // p3 = third image,  for example '7.jpg'
    // if the user wins, increase money by 50
    // if the user loses, decrease money by 5

    document.getElementById('cash').innerHTML = money;
}