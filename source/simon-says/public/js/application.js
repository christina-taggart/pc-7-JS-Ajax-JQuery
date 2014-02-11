$(document).ready(function(){
  $('a').on('click', function(serverResponse) {
    $.ajax({
      type: 'POST',
      url: '/color'
    }).done(
      console.log(serverResponse)
    )
  })
});