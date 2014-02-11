
$(document).ready(function(){
  $('a').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/color'
    }).done(function(serverResponse){
      console.log(serverResponse)
    })
  })
});