$(document).ready(function(){
	$('#get_color').click(function(event){
		event.preventDefault()
		myRequest = $.ajax({
			type: "post",
			url: '/color',
			data: $(this).serialize()
		})
		myRequest.done(function(serverData){
			var cell = serverData.cell
			var color = serverData.color
			$('li').eq(cell).css('background-color', color)
		myRequest.fail(function(){
			console.log('myRequest failed')
		})
		})
	})
});