const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

const todayBackground = images[Math.floor(Math.random()*images.length)];

const backgroundImg = document.createElement("img");


backgroundImg.src = `img/${todayBackground}`;

document.body.appendChild(backgroundImg);
