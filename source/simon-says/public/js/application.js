$(document).ready(function(){
  
  $('#get_color').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/color'
    }).done(function(data) {
      var boxes = $('#color_me li');
      $(boxes[data.cell]).css('background-color', data.color);
    }) 
  });

});