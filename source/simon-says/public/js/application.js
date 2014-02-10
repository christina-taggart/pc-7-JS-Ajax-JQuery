$(document).ready(function(){
	$('#get_color').on("click", function(e){
		e.preventDefault();
		$.ajax({
			type: 'post',
			url: '/color'
		}).done(function(json){
			var object = $.parseJSON(json)
			$('li:nth-child(' + object.cell + ')').css('background-color', object.color)
		})
	})
});