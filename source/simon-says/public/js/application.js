$(document).ready(function(){

$('#get_color').on("click", function(event) {
  event.preventDefault();
  $.post("/color", function(result_data){
    $($('ul li')[result_data.random_cell]).css('background-color', result_data.random_color);
  });
})

});