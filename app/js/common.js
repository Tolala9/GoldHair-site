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



	
});
