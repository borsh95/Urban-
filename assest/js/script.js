let slider = new Swiper('.swiper-container', {
	slidesPerView: 1,
	allowTouchMove: false,
	navigation: {
		nextEl: '.arrows__next',
		prevEl: '.arrows__prev',
	},
});

//novbar
const hamburger = document.querySelector('.hamburger');
const closeBtnNav = document.querySelector('.navbar__btn-close');
const navbarEl = document.querySelector('.navbar');

hamburger.addEventListener('click', toggleNav, false);
closeBtnNav.addEventListener('click', toggleNav, false);

function toggleNav() {
	hamburger.classList.toggle('active');
	navbarEl.classList.toggle('active');
}

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



