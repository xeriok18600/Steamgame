import '../sass/style.sass'
import 'jquery'
import { cardAdd } from "./module/card"

const api = 'https://jsonsweeteaste.herokuapp.com/menu'
var menu = []

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: api,
		dataType: 'json',
		error: function() {
			console.log("載入失敗")
		},
		success: function(res) {
			menu = res
			console.log(menu)
			$('#total__title').text(menu.length)
			cardAdd(menu)
		}
	})
})
