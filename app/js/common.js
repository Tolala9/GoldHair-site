$(function() {
	
	/*MMenu Plugin*/
	$('#my-menu').mmenu({
		extensions: ["fx-panels-none", "fx-listitems-slide", "pagedim-black", "shadow-page"],
		"offCanvas": {
						"position": "right"
				 },
	 	navbar: {
	 		title: '<img src="img/logo.png" alt="Gold Hair">'
	 	}
	 	
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');

	});

/*Owl carousel*/
$('.carousel-services').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	animateOut: 'fadeOut',
	// autoplaySpeed: 5,
	// smartSpeed: 5000,
	autoplayTimeout: 4000,
	autoplayHoverPause:false,
	// autoplaySpeed: true,
	dots: false,
	navText: ['<i class="fa fa-backward" aria-hidden="true"></i>','<i class="fa fa-forward" aria-hidden="true"></i>'],
	responsiveClass: true,
	responsive: {
		0:{
			items: 1
		},
		800:{
			items:2
		},
		1100:{
			items:3
		}
		
	}
	});

	function carouselService() {
		$('.carousel-services-item').each(function(){
				var ths = $(this),
						thsh = ths.find('.carousel-services-content').outerHeight();
						ths.find('.carousel-services-image').css('min-height', thsh);
			});
	}carouselService();
	
});
	


