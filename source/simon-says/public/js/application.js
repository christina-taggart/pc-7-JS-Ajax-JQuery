$(document).ready(function(){

  $('#get_color').on("click",function(event){
    event.preventDefault()
    colorChange()
  })

    function colorChange(){
    $.ajax({
      url: '/color',
      type: 'post'
    }).done(function(square){
    	// console.log(square)
      $("#color_me li").eq(square.cell-1).css("background", square.color)
    })
	}
})