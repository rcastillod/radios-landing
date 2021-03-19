/** Advertisements Carousel */
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
const pauseButtonImg = document.querySelector(".pause-icon");
const url = window.location.hostname;
const img1 = "./img/play-icon.svg";
const img2 = "./img/pause-icon.svg";
const playerBar = document.querySelector(".player-bar");

playButton.addEventListener('click', (e) => {
    e.preventDefault();
    playerBar.classList.toggle("playing");
})

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