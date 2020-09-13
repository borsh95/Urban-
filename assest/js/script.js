let slider = new Swiper('.swiper-container', {
	slidesPerView: 1,
	allowTouchMove: false,
	navigation: {
		nextEl: '.arrows__next',
		prevEl: '.arrows__prev',
	},
});


//menu
const menuHeader = document.querySelector('.header__menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleNav, false);

window.addEventListener('resize', function () {

	if (window.outerWidth > 768 && hamburger.classList.contains('active')) {
		toggleNav();
	}
}, false);

function toggleNav() {
	hamburger.classList.toggle('active');
	menuHeader.classList.toggle('active');
}

//sci
const sciToggle = document.querySelector('.sci__toggle');

sciToggle.addEventListener('click', function () {
	sciToggle.classList.toggle('active');
}, false);

//video 
const playBtn = document.querySelector('.play');
const closeBtnVideo = document.querySelector('.trailer__btn-close');
const trailerEl = document.querySelector('.trailer');
const video = document.querySelector('video');


playBtn.addEventListener('click', toggleVideo, false);
closeBtnVideo.addEventListener('click', toggleVideo, false);

function toggleVideo() {
	trailerEl.classList.toggle('active');

	video.currentTime = 0;
	video.pause();
}



