// My Scripts
$(document).foundation();

//animate.css stuff

$('h1').click(function(){

$('img').addClass('animated rubberBand');

//console.log('click me');

});

// Transit
$('img').click(function(){

	$('p').transition({ 
		x: 200,
		y: 200

	});
});