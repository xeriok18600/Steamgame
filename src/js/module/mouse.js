export function mouseStatus() {
	var turn = $('img[data-info=\'turn\']')
	$('header').hover(function () {
		turn.addClass('turn')
	})
	$('header').mouseleave(function () {
		turn.removeClass('turn')
	})
}

export function scrollStatus(w_scrollTop) {
	if (w_scrollTop >= 150) {
		$('#top').removeClass('display-none')
	} else {
		$('#top').addClass('display-none')
	}
}

export function clickTop() {
	$('#top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600)
	})
}