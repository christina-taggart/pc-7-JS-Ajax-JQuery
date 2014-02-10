$(document).ready(function(){

$('#get_color').on("click", function(event) {
  event.preventDefault();
  $.post("/color", function(result_data){
    $('li')[result_data.random_cell].style.background=result_data.random_color
  });
})

});