//sprite follows direction of mouse
const sprite = document.querySelector('.sprite');
const images = {
    up: sprite.querySelector('img[alt="Up"]'),
    down: sprite.querySelector('img[alt="Down"]'),
    left: sprite.querySelector('img[alt="Left"]'),
    right: sprite.querySelector('img[alt="Right"]')
};

function getDirection(mouseX, mouseY) {
    const rect = sprite.getBoundingClientRect();
    const spriteX = rect.left + rect.width / 2;
    const spriteY = rect.top + rect.height / 2;
    const dx = mouseX - spriteX;
    const dy = mouseY - spriteY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > absDy) {
        return dx > 0 ? 'right' : 'left';
    } else {
        return dy > 0 ? 'down' : 'up';
    }
}

function updateSpriteDirection(direction) {
    for (const key in images) {
        if (images[key]) {
            images[key].classList.remove('active');
        }
    }
    if (images[direction]) {
        images[direction].classList.add('active');
    }
}

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const direction = getDirection(mouseX, mouseY);
    updateSpriteDirection(direction);
});

images.down.classList.add('active');


//slider functions
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

showSlides(slideIndex);

function showSlides(n) {
    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

//scroll for nav
document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 150) {
        navbar.classList.add('transparent');
    } else if(window.scrollY > -150) {
        navbar.classList.remove('transparent');
    }
});

//refresh
window.onload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function() {
    const alienGif = document.getElementById("alien-gif");
    const breakText = document.getElementById("break-text");

    // Function to move the GIF to the left and show the text
    function animate() {
        alienGif.style.left = '10%'; // Adjust the value as needed to move to the left
        breakText.classList.remove('hidden');
        breakText.classList.add('visible');
    }

    // Trigger the animation after a delay (e.g., 1 second)
    setTimeout(animate, 1000);
});