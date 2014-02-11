$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();
    var request = $.ajax({
      type: "POST",
      url: "/color",
      dataType: "json"
    });

    request.done(function(response){
      $('#color_me li').eq(response["cell"]).css('background-color', response["color"])
    })
  })
});