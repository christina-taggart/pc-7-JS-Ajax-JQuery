$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    e.preventDefault();
    colorCell();
  });

  function colorCell(){
    $.ajax({
      type: "POST",
      url: "/color"
    }).done(function(data){
      updateCellColor(data);
    });

    function updateCellColor(data){
      $('li')[data.cell].style.background=data.color;
    }
  }
});