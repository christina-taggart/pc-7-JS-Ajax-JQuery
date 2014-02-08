$(document).ready(function(){
  var boxes = $('#color_me li');

  $('#get_color').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/color'
    }).done(function(data) {
      $(boxes[data.cell]).css('background-color', data.color);
    }) 
  });

});