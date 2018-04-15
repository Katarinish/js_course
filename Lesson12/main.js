$(document).ready(function() {
	
	
	$('a[href="#tour"], .contact, a[href="#sheldure"]').on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeIn('slow');
		$(".modal").slideDown('slow');
	});

	$('.close').on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeOut('slow');
		$(".modal").slideUp('slow');
	});


});