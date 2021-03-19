//libraries like jquery etc
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    }
});

/** Musica Player */
const playButton = document.getElementById("play-btn");
const playButtonImg = document.querySelector(".play-icon");
const img1 = "http://localhost:9050/img/play-icon.svg"
const img2 = "http://localhost:9050/img/pause-icon.svg"
const playerBar = document.querySelector(".player-bar");

playButton.addEventListener('click', (e) => {
    e.preventDefault();
    playButtonImg.src = (playButtonImg.src === img1)? img2 : img1;
    playerBar.classList.toggle("playing");
})