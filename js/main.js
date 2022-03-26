
var swiper = new Swiper(".myswiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 1500,
	parallax: true,
	loop: true,
    // effect: "fade",

 autoplay: {
 	delay: 2000,
 	stopOnLlastSlide: false,
 	disableOnInteraction: false
 },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
		dynamicBullets: true,
    },

});