$(document).ready(function(){
	$('#get_color').on('click', function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url:'/color',

		}).done(function(colors){
			$('li').eq(colors.cell).css ("background-color", colors.color)
		})

	})

});