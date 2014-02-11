$(document).ready(function(){
	$color_grid = $('#color_me')

	$('#get_color').on('click', function(event){
		event.preventDefault()
		$.post('/color', {})
			.done( function(data) {
				$changeCell = $(find_nth_cell(data.cell,$color_grid))
				$changeCell.css('background-color',data.color)
			})
	})
});

function find_nth_cell(n, $grid) {
	return $grid.children()[n-1]
}