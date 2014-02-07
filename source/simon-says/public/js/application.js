$(document).ready(function(){
  $("#get_color").on('click', function(e){
    e.preventDefault();
    getBoxAndColor(e);
  })
});

function getBoxAndColor(e){
  $.ajax({
    type: "POST",
    url: "/color"
  }).done(function(response){
    colorBox(response);
  }).fail(function(){
    console.log("Request failed");
  })
}

function colorBox(response){
  var parsed = $.parseJSON(response)
  $($('li')[parsed.cell - 1]).css({"background-color":parsed.color});
}


