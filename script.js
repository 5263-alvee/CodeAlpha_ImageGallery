const images = document.querySelectorAll(".image-card img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;


// Open lightbox

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightboxImage.src = images[currentIndex].src;

        lightbox.style.display = "flex";

    });

});


// Next image

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;

});


// Previous image

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

});


// Close lightbox

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// Close when clicking outside image

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});