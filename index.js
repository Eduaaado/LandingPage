$(window).on('scroll', function() {
	if ($(window).scrollTop()) {
		$('nav').addClass('black')
	} else {
		$('nav').removeClass('black');
	}
});

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();

	$('.sec-bg').css('top', (scrollTop * 0.8) + 'px')
})
