let buttons = [ $('#btn1'), $('#btn2'), $('#btn3'), $('#btn4') ];
let buttonSounds = [
	$('#sound1'),
	$('#sound2'),
	$('#sound3'),
	$('#sound4')
];
let simonPlayed;
let userFirstPlay;
let userPlayed = [];
let clickCount = 0;

$(document).keydown(function() {
	startGame();
});

function startGame() {
	$(document).off('keydown');
	let randomIndex = Math.floor(Math.random() * 4);
	startButton = buttons[randomIndex][0];
	startButton.classList.add('flash');
	simonPlayed = startButton.id;
	console.log(`in startGame, simonPlayed = ${simonPlayed}`);
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		startButton.classList.remove('flash');
	}, 100);
}
$(document).click('col', function(event) {
	clickCount++;
	console.log(clickCount);
	if (clickCount === 1) {
		userFirstTurn(event.target);
	} else {
		console.log(clickCount);
		userTurn(event.target);
	}
});
function userFirstTurn(target) {
	playButtonSound(event.target.id);
	userFirstPlay = event.target.id;
	console.log(
		`userFirstTurn with clickCount of ${clickCount} and userFirstPlay value of ${userFirstPlay}`
	);
	comparePlays(userFirstPlay);
}

function userTurn(target) {
	playButtonSound(event.target.id);

	console.log(userPlayed);
	userPlayed.push(event.target.id);
	console.log(userPlayed);
}

function playButtonSound(id) {
	switch (id) {
		case 'btn1':
			const clip1 = $('#sound1');
			clip1.trigger('play');
			const btn1 = $('#btn1');
			$('#btn1').addClass('flash');
			setTimeout(function() {
				$('#btn1').removeClass('flash');
			}, 100);
			break;
		case 'btn2':
			const clip2 = $('#sound2');
			clip2.trigger('play');
			const btn2 = $('#btn2');
			$('#btn2').addClass('flash');
			setTimeout(function() {
				$('#btn2').removeClass('flash');
			}, 100);
			break;
		case 'btn3':
			const clip3 = $('#sound3');
			clip3.trigger('play');
			const btn3 = $('#btn3');
			$('#btn3').addClass('flash');
			setTimeout(function() {
				$('#btn3').removeClass('flash');
			}, 100);
			break;
		case 'btn4':
			const clip4 = $('#sound4');
			clip4.trigger('play');
			const btn4 = $('#btn4');
			$('#btn4').addClass('flash');
			setTimeout(function() {
				$('#btn4').removeClass('flash');
			}, 100);
			break;
		default:
			console.log(id);
			break;
	}
}
function simonsTurn() {
	let index = Math.floor(Math.random() * 4);
	nextPlay = buttons[index][0];
	nextPlay.classList.add('flash');
	simonPlayed = simonPlayed + nextPlay.id;
	console.log(`after simonsTurn, simonPlayed  = ${simonPlayed}`);
	buttonSounds[index].trigger('play');
	setTimeout(function() {
		nextPlay.classList.remove('flash');
	}, 100);
	userPlayed = [];
	clickCount = 1;
	console.log(userPlayed);
}

function comparePlays(userFirstPlay, userPlayed) {
	if (simonPlayed === userFirstPlay || simonPlayed === userPlayed) {
		console.log(
			`in comparePlays, simonPlayed is ${simonPlayed}, userFirstPlay is ${userFirstPlay} and userPlayed is ${userPlayed}`
		);
		setTimeout(function() {
			simonsTurn();
		}, 2000);
	} else {
		return;
	}
}
