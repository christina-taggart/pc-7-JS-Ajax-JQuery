$(document).ready(function(){
  $('#get_color').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'post',
      url: '/color',
    }).done(function(serverResponse) {
      changeCellColor(serverResponse.cell, serverResponse.color)
    }).fail(function() {
      console.log("Request failed")
    })
  })
});

var changeCellColor = function(cell, color) {
  $('ul li').eq(cell-1).css('background-color', color)
}