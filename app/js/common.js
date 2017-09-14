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
	autoplayTimeout: 6000,
	autoplayHoverPause:false,
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

	$('select').selectize({
		create: true
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true,
		autoplay: true,
		// animateOut: 'fadeOut',
		autoplayTimeout: 6000,
		autoplayHoverPause:false,
		autoHeight: true
	});

	/*Sloww scroll on menu parts*/
	$(document).ready(function(){
		$(".main-mnu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-backward" aria-hidden="true"></i>','<i class="fa fa-forward" aria-hidden="true"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
			1600: {
				items: 4
			}
		}
	});

	


	
});
	


