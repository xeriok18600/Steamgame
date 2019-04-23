import '../sass/style.sass'
import 'jquery'
import {
	cardAdd,
	cardSearch
} from './module/card'
import {
	scrollStatus,
	clickTop
} from './module/mouse'

var imagesLoaded = require('imagesloaded')
// var InfiniteScroll = require('infinite-scroll')
var $ = require('jquery')
imagesLoaded.makeJQueryPlugin($)

let p = 1
const api = 'https://ancient-mesa-96474.herokuapp.com/Page/' + p + ''
// eslint-disable-next-line camelcase

$.ajax({
	type: 'GET',
	url: api,
	dataType: 'json',
	error() {
		console.log('載入失敗')
	},
	success(res) {
		var applications = res.applications
		var total = res.applications.length
		var time_title = res.datetime.substr(0, 10)
		$.each(applications, function (index, ele) {
			var b_pic = ele.header_pic
			var pic = ele.small_pic
			var title = ele.app_name
			var sale = ele.discount.replace(/-/, '')
			var eva = ele.evaluation
			var origin = ele.original_price
			var discount = ele.discount_price
			var link = ele.steam_link
			var rank = ele.rank
			gameFilter(title, pic, origin, discount, sale, eva, b_pic, link, rank)
		})
		$('#total__title').text(total)
		$('#time__title').text(time_title)
	},
	beforeSend() {
		$('#loading').show()
	},
	complete() {
		cardSearch()
		clickTop()
		$('#loading').hide()
	}
})

$(window)
	.data('ajaxready', true)
	.scroll(function () {
		// eslint-disable-next-line camelcase
		var w_scrollTop = $(window).scrollTop()
		scrollStatus(w_scrollTop, p)
	})


function gameFilter(title, pic, origin, discount, sale, eva, b_pic, link, rank) {
	$('#card__group').imagesLoaded(function () {
		cardAdd(title, pic, origin, discount, sale, eva, b_pic, link, rank)
	})
	$('#btn__group > span').click(function () {
		if ($(this).data('status') == '1') {
			$('.dis').remove()
			$('#card__group').imagesLoaded(function () {
				cardAdd(title, pic, origin, discount, sale, eva, b_pic, link, rank)
			})
			$('span').removeClass('is-success is-selected')
			$(this).addClass('is-success is-selected')
			// $('#card__group > .column').removeClass('display-none')
		} else {
			$('span').removeClass('is-success is-selected')
			$(this).addClass('is-success is-selected')
			// $('.total').addClass('display-none')
			$('.total').remove()
		}
	})
}