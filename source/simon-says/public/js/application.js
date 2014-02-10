$(document).ready(function(){

	//shit goes in here to color shit

	$("#get_color").on("click", function(event) {
		$.ajax({
			type: "POST",
			url: '/color'
		})
		.done(function(json_hash){
			$( "#color_me li" ).eq(json_hash.cell -1).css("background-color", json_hash.color);
		})
	})
});
