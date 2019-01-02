export function cardAdd(title, pic, origin, discount, sale, eva) {
	var displayInfo = $('#card__group')
	displayInfo.append('<div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img class="bg-p" src="' + pic + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + pic + '"/></figure></div><div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6" data-text=" ' + origin + ' ">' + discount + '</p></div></div><div class="content">' + eva + ' </div><a href="#">#冒險</a><a href="#">#大型多人連線</a><br /></div></div></div>')

}
// https://cdn.discordapp.com/attachments/161411050300899328/524866016552157215/LOAD.png

export function cardSearch(menu) {
	$(':input').on('input', function () {
		var value = $(this).val()
		for (var i = 0; i <= menu.length; i++) {
			if (value == menu[i].name) {
				$(('#card__group')).html('<div data-info="del" class="column is-3"><div class="card"><div class="card-image"><figure class="image is-4by3"><img class="bg-p" src="' + menu[i].url + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + menu[i].url + '"/></figure></div><div class="media-content"><p class="title is-4">' + menu[i].name + '</p><p class="subtitle is-6">$$$</p></div></div><div class="content">俗又大碗 </div><a href="#">#冒險</a><a href="#">#大型多人連線</a><br /><time datetime="">11:09 PM - 1 Jan 2016</time></div></div></div>')
			} else if (!value) {
				var del = $(".column[data-info='del']")
				$(del).addClass('display-none')
				return cardAdd(menu)
			}
		}
		console.log(menu)
	})
}