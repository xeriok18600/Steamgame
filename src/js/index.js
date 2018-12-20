import '../sass/style.sass'
import 'jquery'

import {
	cardAdd,
	cardSearch
} from './module/card'

var imagesLoaded = require('imagesloaded')
var $ = require('jquery')
imagesLoaded.makeJQueryPlugin($)

const api = 'https://jsonsweeteaste.herokuapp.com/menu'
var menu = []

$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: api,
		dataType: 'json',
		error: function () {
			console.log("載入失敗")
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

$('header').mouseenter(function () {
	var turn = $(":img[data-info='turn']")
	turn.addClass('turn')
})