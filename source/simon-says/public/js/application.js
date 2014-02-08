$(document).ready(function(){
  var boxes = $('#color_me li');

  $('#get_color').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/color'
    }).done(function(server_response) {
      console.log(server_response);
    }) 
  });

});