$(document).ready(function(){
  $("#get_color").on("click", function(){
    $.ajax({
      type:"POST"
      url: '/color'
    })
    .done(function(){
      $('#color_me li:nth-child('cell')').css('background-color', color)
    })
  })
});