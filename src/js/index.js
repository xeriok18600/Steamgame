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
var $ = require('jquery')
imagesLoaded.makeJQueryPlugin($)

const api = 'https://jsonsweeteaste.herokuapp.com/menu'
var menu = []
// eslint-disable-next-line camelcase


$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: api,
		dataType: 'json',
		error: function () {
			console.log('載入失敗')
		},
		success: function (res) {
			menu = res
			// console.log(menu)
			$('#total__title').text(menu.length)
			$('#card__group').imagesLoaded(function () {
				cardAdd(menu)
			})
			cardSearch(menu)
		}
	})
})
mouseStatus()

$(window).scroll(function() {
	var w_scrollTop = $(window).scrollTop()
	scrollStatus(w_scrollTop)
	console.log(w_scrollTop)
})

clickTop()