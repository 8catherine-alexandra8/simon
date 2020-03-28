let buttons = [ $('#btn1'), $('#btn2'), $('#btn3'), $('#btn4') ];
let buttonSounds = [
	$('#sound1'),
	$('#sound2'),
	$('#sound3'),
	$('#sound4')
];
let simonPlayed = [];
let userPlayed = [];

$(document).keydown(function() {
	startGame();
});

function startGame() {
	$(document).off('keydown');
	let randomIndex = Math.floor(Math.random() * 4);
	startButton = buttons[randomIndex][0];
	startButton.classList.add('flash');
	simonPlayed.push(startButton.id);
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		startButton.classList.remove('flash');
	}, 100);
	userClickResponse();
}
function userClickResponse() {
	$(document).click('col', function(event) {
		userClick = event.target;
		userClick.classList.add('flash');
		playButtonSound(event.target.id);
		setTimeout(function() {
			userClick.classList.remove('flash');
		}, 100);
		userPlayed.push(event.target.id);
	});
}

function playButtonSound(id) {
	switch (id) {
		case 'btn1':
			const clip1 = $('#sound1');
			clip1.trigger('play');
			break;
		case 'btn2':
			const clip2 = $('#sound2');
			clip2.trigger('play');
			break;
		case 'btn3':
			const clip3 = $('#sound3');
			clip3.trigger('play');
			break;
		case 'btn4':
			const clip4 = $('#sound4');
			clip4.trigger('play');
			break;

		default:
			console.log(id);
			break;
	}
}
