$(document).ready(function(){

$('#get_color').on("click", function(event) {
  event.preventDefault();
  $.post("/color", function(result_data){
    alert("You got back this: " + result_data);
  });
})

});