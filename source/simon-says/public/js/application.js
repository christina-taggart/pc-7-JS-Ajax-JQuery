$(document).ready(function(){
	$("#get_color").on("click",function(event) {
		event.preventDefault;
		$.ajax ({
			type: "post",
			url: "/color"
		}).done(function(data){
			console.log(data)
			$("li").eq(data.cell).css ("background-color", data.color)


})})});