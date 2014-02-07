$(document).ready(function(){
  $('#get_color').click(function(e){
    e.preventDefault();
    changeCell();
  });

  function changeCell(){
    $.post('/color', function(data){
      $('li').eq(data["cell"]).css("background-color", data["color"]);
    });
  }
});