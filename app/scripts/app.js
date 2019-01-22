import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
import Swup from 'swup';
// import LazyLoad from "vanilla-lazyload";
import 'magnific-popup';



(function ($) {

	svg4everybody();


	$(function() {

			// const swup = new Swup();

			// Nav more

			var $nav = $('.greedy-nav');
			var $btn = $('.greedy-nav .nav__more');
			var $vlinks = $('.greedy-nav .nav__list');
			var $hlinks = $('.greedy-nav .nav__dropdown');

			var breaks = [];

			function updateNav() {

			  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

			  // The visible list is overflowing the nav
			  if($vlinks.width() > availableSpace) {

				// Record the width of the list
				breaks.push($vlinks.width());

				// Move item to the hidden list
				$vlinks.children().last().prependTo($hlinks);

				// Show the dropdown btn
				if($btn.hasClass('hidden')) {
				  $btn.removeClass('hidden');
				}

			  // The visible list is not overflowing
			  } else {

				// There is space for another item in the nav
				if(availableSpace > breaks[breaks.length-1]) {

				  // Move the item to the visible list
				  $hlinks.children().first().appendTo($vlinks);
				  breaks.pop();
				}

				// Hide the dropdown btn if hidden list is empty
				if(breaks.length < 1) {
				  $btn.addClass('hidden');
				  $hlinks.addClass('hidden');
				}
			  }

			  // Keep counter updated
			  $btn.attr("count", breaks.length);

			  // Recur if the visible list is still overflowing the nav
				if($vlinks.width() > availableSpace) {
					updateNav();
				}

			}

			updateNav();

			// Window listeners

			$(window).on('resize', function () {
				updateNav();
			});


			$btn.on('click', function() {
				$btn.toggleClass('is-open');
				$hlinks.toggleClass('hidden');
			});

			// updateNav();


			// Close more nav

			// let $navMoreTrigger = $('.nav__more');

			// $navMoreTrigger.on('click', function (e) {
			// 	e.stopPropagation();
			// 	$(this).parent().toggleClass('is-open');

			// 	$(document).on('click', function(e) {
			// 		if (!$(e.target).closest('.nav__more').length) {
			// 			$navMoreTrigger.parent().removeClass('is-open');
			// 		}
			// 	});
			// });

			// Hero slider

			var $status       = $('.hero__count');
			var $slickElement = $('.hero__slider');
			var $heroCountFirst = $('.hero__count-first');
			var $heroCountLast = $('.hero__count-last');


			if ( $slickElement.length > 0 ) {

				$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
					var i = (currentSlide ? currentSlide : 0) + 1;


					$heroCountFirst.text('0' + i);

					$heroCountLast.text('0' + slick.slideCount);

				});

				$slickElement.slick({
					autoplay: false,
					fade: true,
					prevArrow: '.hero__nav-prev',
					nextArrow: '.hero__nav-next'
				});
			}


			var $status       = $('.s-articles__count');
			var $slickElementSecond = $('.s-articles__slider');
			var $articlesCountFirst = $('.s-articles__count-first');
			var $articlesCountLast = $('.s-articles__count-last');

			if ( $slickElementSecond.length > 0 ) {
				$slickElementSecond.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
					var i = (currentSlide ? currentSlide : 0) + 1;


					$articlesCountFirst.text('0' + i);

					$articlesCountLast.text('0' + slick.slideCount);

				});

				$slickElementSecond.slick({
					slidesToShow: 3,
					arrows: true,
					speed: 300,
					centerMode: true,
					centerPadding: 0,
					variableWidth: true,
					infinite: true,
					adaptiveHeight: true,
					appendArrows: '.s-articles__nav',
					prevArrow: '.s-articles__nav-prev',
					nextArrow: '.s-articles__nav-next',
					responsive: [{
					  breakpoint: 1920,
					  settings: {
						arrows: true,
						centerMode: true,
						slidesToShow: 3
					  }
					}, {
					  breakpoint: 1024,
					  settings: {
						arrows: true,
						centerMode: true,
						slidesToShow: true,
						variableWidth: false
					  }
					}]
				});

			}




			// Slider

			let $slider = $('.slider__list');
			if ( $slider.length > 0 ) {
				$slider.slick({
					slidesToShow: 3,
					arrows: true,
					speed: 300,
					infinite: false,
					adaptiveHeight: true,
					appendArrows: ".slider__nav",
					responsive: [{
					  breakpoint: 1920,
					  settings: {
					    slidesToShow: 3
					  }
					}, {
					  breakpoint: 991,
					  settings: {
					    slidesToShow: 2
					  }
					}, {
					  breakpoint: 460,
					  settings: {
					    slidesToShow: 1
					  }
					}]

				});
			}


			// Tabs

			const tabsNavLink = $('.tabs__link');
			const tabsNavLinkActive = 'tabs__link_active';
			const tab = $('.tabs__tab');
			const tabActive = 'tabs__tab_active';

			tabsNavLink.click(function (event) {
				event.preventDefault();
				$(this).addClass(tabsNavLinkActive);
				$(this).siblings().removeClass(tabsNavLinkActive);
				const tabCurrent = $(this).attr('href');
				tab.not(tabCurrent).removeClass(tabActive).hide();
				$(tabCurrent).fadeIn(50).addClass(tabActive).show();

				// carouselSecond.reloadSlider();

				console.log(tabCurrent);

			});


			// Magnific

			$('.slider__link').magnificPopup({
				type: 'image',
				gallery:{
					enabled:true
				}
			});


	});


})(jQuery);
