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
		$('html, body').animate({
			scrollTop: 0
		}, 600)
	})
}

export function gameFilter() {
	$('#btn__group > span').click(function () {
		if ($(this).data('status') == '1') {
			$('span').removeClass('is-success is-selected')
			$(this).addClass('is-success is-selected')
			$('#card__group > .column').removeClass('display-none')
		} else {
			$('span').removeClass('is-success is-selected')
			$(this).addClass('is-success is-selected')
			if ($('#card__group > .column').data('status') == 'total') {
				$('.total').addClass('display-none')
			}
		}
	})
}