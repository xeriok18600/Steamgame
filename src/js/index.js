import '../sass/style.sass'
import 'jquery'

// import {
// 	cardAdd
// } from "./module/card"

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
			// cardAdd(menu)
			for (var i = 0; i <= menu.length; i++) {
				$('#card__group').append('<div class="column is-3"><div class="card"><div class="card-image"><figure class="image is-4by3"><img class="bg-p" src="' + menu[i].url + '"/></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img class="sm-p" src="' + menu[i].url + '"/></figure></div><div class="media-content"><p class="title is-4">' + menu[i].name + '</p><p class="subtitle is-6">$$$</p></div></div><div class="content">俗又大碗 </div><a href="#">#冒險</a><a href="#">#大型多人連線</a><br /><time datetime="">11:09 PM - 1 Jan 2016</time></div></div></div>')
			}
			$("img").lazyload()
		}
	})
})

$(':input').on('input', function () {
	var test = $(this).val()
	$('.test').text(test)
	console.log(test)
})