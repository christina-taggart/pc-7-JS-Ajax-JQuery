
$(document).ready(function(){
  $('#get_color').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/color'
    }).done(function(serverResponse){
      parsed = JSON.parse(serverResponse);
      $('ul li').eq(parsed.cell-1).css('background-color', parsed.color)
    })
  })
});