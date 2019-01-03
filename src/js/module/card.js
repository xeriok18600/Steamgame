export function cardAdd(title, pic, origin, discount, sale, eva, b_pic) {
	var displayInfo = $('#card__group')
	displayInfo.append('<div data-info="' + title + '" class="column is-one-quarter"><div class="card"><div class="card-image"><div class="show">' + sale + '</div><figure class="image is-4by3"><img class="bg-p" src="' + b_pic + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + pic + '"/></figure></div><div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6" data-text=" ' + origin + ' ">' + discount + '</p></div></div><div class="content">' + eva + ' </div><a href="#">#冒險</a><a href="#">#大型多人連線</a><br /></div></div></div>')
}
// https://cdn.discordapp.com/attachments/161411050300899328/524866016552157215/LOAD.png

export function cardSearch() {
	$(':input').on('input', function () {
		var value = $(this).val()
		var displayInfo = $('#card__group')
		// var regex = new RegExp(value + "+", "gi")
		// var compare = title.match(regex)
		// if (value != "") {
		// 	if (compare) {
		// 		console.log(title.match(regex))
		// 		displayInfo.html('<div data-info="del" class="column is-one-quarter"><div class="card"><div class="card-image"><div class="show">' + sale + '</div><figure class="image is-4by3"><img class="bg-p" src="' + b_pic + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + pic + '"/></figure></div><div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6" data-text=" ' + origin + ' ">' + discount + '</p></div></div><div class="content">' + eva + ' </div><a href="#">#冒險</a><a href="#">#大型多人連線</a><br /></div></div></div>')
		// 	} else if (value == "") {
		// 		var del = $(".column[data-info='del']")
		// 		$(del).addClass('display-none')
		// 		return cardAdd(title, pic, origin, discount, sale, eva, b_pic)
		// 	}
		// }
	})
}