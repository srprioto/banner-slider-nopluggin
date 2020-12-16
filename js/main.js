
$(document).ready(function () {
	
	var imgItems = $('.slider li').length;
	var imgPos = 1;

	for (var i = 1; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color': '#000'});

	//ejecutando funciones

	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function () {
		nextSlider();
	}, 3000);

	//funciones
	function pagination(){

		var paginationPos = $(this).index() + 1 ;

		$('.slider li').hide();
		$('.slider li:nth-child(' + paginationPos + ')').fadeIn();

		$('.pagination li').css({'color': '#cecece'});
		$(this).css({'color': '#000'});

		imgPos = paginationPos;
	}

	function nextSlider() {

		if (imgPos >= imgItems) {
			imgPos = 1;
		}else{
			imgPos++;
		}

		$('.pagination li').css({'color': '#cecece'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#000'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}

	function prevSlider() {

		if (imgPos <= 1) {
			imgPos = imgItems;
		}else{
			imgPos--;
		}

		$('.pagination li').css({'color': '#cecece'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#000'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}

});