let buttons = [ $('#btn1'), $('#btn2'), $('#btn3'), $('#btn4') ];
let buttonSounds = [
	$('#sound1'),
	$('#sound2'),
	$('#sound3'),
	$('#sound4')
];

$(document).keydown(function() {
	startGame();
});

function startGame() {
	let randomIndex = Math.floor(Math.random() * 4);
	buttons[randomIndex].addClass('flash');
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		buttons[randomIndex].removeClass('flash');
	}, 100);
}
