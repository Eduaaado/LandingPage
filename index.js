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

$(document).ready(function() {
	$(window).scroll(function() {
		var y = $(this).scrollTop();

		if (y > 300) {
			$('h1').addClass('textanimation')
			$('div').addClass('blockanimation')
		}
	});
});
