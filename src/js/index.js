import '../sass/style.sass'
import 'jquery'
import {
	cardAdd,
	cardSearch
} from './module/card'
import {
	mouseStatus,
	scrollStatus,
	clickTop,
	gameFilter
} from './module/mouse'

var imagesLoaded = require('imagesloaded')
// var InfiniteScroll = require('infinite-scroll')
var $ = require('jquery')

imagesLoaded.makeJQueryPlugin($)

const api = 'https://ancient-mesa-96474.herokuapp.com/Get'
var page = 1
// eslint-disable-next-line camelcase

$.ajax({
	type: 'GET',
	url: api,
	dataType: 'json',
	error: function () {
		console.log('載入失敗')
	},
	success: function (res) {
		page += 1
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
			$('#card__group').imagesLoaded(function () {
				cardAdd(title, pic, origin, discount, sale, eva, b_pic, link)
			})
		})
		$('#total__title').text(total)
		$('#time__title').text(time_title)
	},
	complete: function() {
		cardSearch()
		gameFilter()
	}
})

mouseStatus()


$(window).data('ajaxready', true).scroll(function () {
	// eslint-disable-next-line camelcase
	var w_scrollTop = $(window).scrollTop()
	scrollStatus(w_scrollTop)
	// console.log(w_scrollTop)
})

clickTop()