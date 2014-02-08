$(document).ready(function(){

$('#get_color').on("click", function(event) {
  event.preventDefault();
  $.post("/color", function(result_data){
    debugger
    $('ul li:eq(1)').css('background-color', result_data.random_color);
  });
})

});