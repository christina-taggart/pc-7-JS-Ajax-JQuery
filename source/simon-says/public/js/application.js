$(document).ready(function(){

  $('#get_color').on('click', getColor );

  function getColor(){
    console.log(this)
    $.get("/color").done( function(response) {
      response = JSON.parse(response)
      var square = $('#color_me li')[response.cell];
      $(square).css('background-color', response.color);
      setTimeout(getColor, 1000);
    })
  }

});