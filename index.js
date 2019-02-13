//NAVIGATION BAR

$(window).on('scroll', function() {
	if ($(window).scrollTop()) {
		$('nav').addClass('black')
	} else {
		$('nav').removeClass('black');
	}

//PARALLAX

	var scrollTop = $(this).scrollTop();

	$('.sec-bg').css('top', (scrollTop * 0.8) + 'px')

});

//TEXT REVEAL
