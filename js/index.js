$(function(){

	$('.header__slider').slick({
		dots:true,
		speed: 800,
		arrows: false,
		});
	$('.works__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		

	})
	document.querySelector('.our__works-drible');

	document
		.querySelectorAll('ul.slick-dots li button')
		.forEach( (e) =>{e.innerText = ''});
});