$(document).ready(function(){

$('#get_color').on("click", function(event) {
  event.preventDefault();
  $.post("/color", function(response){
    $('li')[response.random_cell].style.background=response.random_color
  });
})

});