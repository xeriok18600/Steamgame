import '../sass/style.sass'
import 'jquery'
import {
	cardAdd,
	cardSearch
} from './module/card'
import {
	mouseStatus,
	scrollStatus,
	clickTop
} from './module/mouse'

var imagesLoaded = require('imagesloaded')
// var InfiniteScroll = require('infinite-scroll')
var $ = require('jquery')

imagesLoaded.makeJQueryPlugin($)

const api = 'https://jsonsweeteaste.herokuapp.com/menu'
var menu = []
var page = 1
// eslint-disable-next-line camelcase

$.ajax({
	type: 'GET',
	url: api,
	data: {
		'page': page
	},
	dataType: 'json',
	error: function () {
		console.log('載入失敗')
	},
	success: function (res) {
		page += 1
		menu = res
		console.log(menu)
		$('#total__title').text(menu.length)
		$('#card__group').imagesLoaded(function () {
			cardAdd(menu)
		})
		cardSearch(menu)
	}
})

mouseStatus()

$(window).data('ajaxready', true).scroll(function () {
	// eslint-disable-next-line camelcase
	var w_scrollTop = $(window).scrollTop()
	scrollStatus(w_scrollTop)
	console.log(w_scrollTop)

	// var infScroll = new InfiniteScroll('#card__group', {
	// 	path: testData
	// })

	// function testData() {
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: api,
	// 		dataType: 'json',
	// 		error: function () {
	// 			console.log('載入失敗')
	// 		},
	// 		success: function (res) {
	// 			menu = res
	// 			console.log(menu)
	// 			$('#total__title').text(menu.length)
	// 			$('#card__group').imagesLoaded(function () {
	// 				cardAdd(menu)
	// 			})
	// 			cardSearch(menu)
	// 		}
	// 	})
	// }
})

clickTop()