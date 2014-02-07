$(document).ready(function(){
  $('#get_color').on("click", function(event){
    event.preventDefault();
    getCell();
    });
});

function getCell(){
  $.ajax({
    type: "POST",
    url: "/color"
  }).done(function(response){
    changeCellColor(response);
  }).fail(function(response){
    console.log(response);
  })
}

function changeCellColor(response){
  var data = $.parseJSON(response)
  var index = data.cell-1
  $($('li')[index]).css("background-color", data.color);
}