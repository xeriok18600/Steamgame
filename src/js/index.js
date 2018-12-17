import '../sass/style.sass'
import 'jquery'

const api = 'https://jsonsweeteaste.herokuapp.com/menu'
var menu = []

$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: api,
		dataType: 'json',
		success: function (res) {
			menu.push(res)
			console.log(menu)
		}
	})

})