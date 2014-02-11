$(document).ready(function(){
  $("#get_color").on("click", function(e){
    e.preventDefault;
    $.ajax({
      type:'POST',
      url:'/color'
    })
    .done(function(response){
      $('#color_me li').eq(response.cell).css('background-color', response.color)
    })
  })
});