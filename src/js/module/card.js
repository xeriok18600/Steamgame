export function cardAdd(title, pic, origin, discount, sale, eva, b_pic, link) {
	var displayInfo = $('#card__group')
	if (discount.length != 0) {
		displayInfo.append('<div data-info="' + title + '" class="column is-one-quarter dis"><div class="card"><div class="card-image"><div class="show">' + sale + '</div><figure class="image is-4by3"><img class="bg-p" src="' + b_pic + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + pic + '"/></figure></div><div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6" data-text=" ' + origin + ' ">' + discount + '</p></div></div><div class="content">' + eva + ' </div></div></div></div>')
		var status = $('#card__group > .dis')
		$('#discount__title').text(status.length)
	} else {
		displayInfo.append('<div data-status="total" data-info="' + title + '" class="column is-one-quarter total"><div class="card"><a target="_blank" href="' + link + '"><div class="card-image"><figure class="image is-4by3"><img class="bg-p" src="' + b_pic + '"/></figure></div></a><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + pic + '"/></figure></div><div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6">' + origin + '</p></div></div><div class="content">' + eva + ' </div></div></div></div>')
	}
}

// https://cdn.discordapp.com/attachments/161411050300899328/524866016552157215/LOAD.png

export function cardSearch() {
	var displayInfo = $('#card__group')
	$(':input').on('input', function () {
		var value = $(this).val()
		var regex = new RegExp(value + '+', 'gi')
		if (value) {
			$('#card__group > .column').each(function () {
				var title = $(this).data('info')
				var compare = title.match(regex)
				if (compare) {
					$(this).removeClass('display-none')
				} else {
					$(this).addClass('display-none')
					console.log('none')
				}
			})
		}
	})
}