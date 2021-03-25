/** Advertisements Carousel */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
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
const pauseButtonImg = document.querySelector(".pause-icon");
const volumeSlider = document.querySelector(".volume-slider");
const audio = document.getElementById("music");
const img1 = "./img/play-icon.svg";
const img2 = "./img/pause-icon.svg";
const playerBar = document.querySelector(".player-bar");
let playState = "play";

playButton.addEventListener('click', () => {
    if(playState === 'play') {
        audio.play();
        playerBar.classList.add("playing");
        playState = 'pause';
    } else {
        audio.pause();
        playerBar.classList.remove("playing");
        playState = 'play';
    }
});
volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});

/** Mobile Menu Info */
jQuery(document).ready(function(){
	if( $('.mobile-info').length > 0 ) {
		var stretchyNavs = $('.mobile-info');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.mobile-info__trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.mobile-info__trigger') && !$(event.target).is('.mobile-info__trigger span') ) && stretchyNavs.removeClass('visible');
		});
	}
});