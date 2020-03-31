let buttons = [ $('#btn1'), $('#btn2'), $('#btn3'), $('#btn4') ];
let buttonSounds = [
	$('#sound1'),
	$('#sound2'),
	$('#sound3'),
	$('#sound4')
];
let simonPlayed;
let userFirstPlay;
let userPlayed = 'a';
let clickCount = 0;
let level = 1;

$(document).keydown(function() {
	startGame();
});

function startGame() {
	console.log('startGame running');
	$('h2').text(`level ${level}`);
	$(document).off('keydown');
	let randomIndex = Math.floor(Math.random() * 4);
	startButton = buttons[randomIndex][0];
	startButton.classList.add('flash');
	simonPlayed = startButton.id;
	console.log(`in startGame, simonPlayed = ${simonPlayed}`);
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		startButton.classList.remove('flash');
	}, 50);
}
function simonsTurn() {
	console.log('simonsTurn running');
	let index = Math.floor(Math.random() * 4);
	let nextPlay = buttons[index][0];
	nextPlay.classList.add('flash');
	simonPlayed = simonPlayed + nextPlay.id;
	console.log(`after simonsTurn, simonPlayed  = ${simonPlayed}`);
	buttonSounds[index].trigger('play');
	setTimeout(function() {
		nextPlay.classList.remove('flash');
	}, 50);
	userPlayed = 'a';
	clickCount = 1;
	console.log(userPlayed);
}

$(document).click('col', function(event) {
	clickCount++;
	console.log(clickCount);
	if (clickCount === 1) {
		userFirstTurn(event.target);
		buttonSoundAndFlash(event.target.id);
	} else {
		console.log(clickCount);
		userTurn(event.target);
		buttonSoundAndFlash(event.target.id);
	}
});
function userFirstTurn(target) {
	console.log('userFirstTurn running');

	userFirstPlay = event.target.id;
	console.log(
		`userFirstTurn with clickCount of ${clickCount} and userFirstPlay value of ${userFirstPlay}`
	);
	comparePlays(userFirstPlay);
}

function userTurn(target) {
	console.log('userTurn running');

	userPlay = event.target.id;
	userPlayed = userPlayed + userPlay;
	console.log(userPlayed);
	comparePlays(userPlayed);
}

function comparePlays() {
	console.log('comparePlays running');

	let simonPlayedA = 'a' + simonPlayed;
	setTimeout(function() {
		console.log(userPlayed);
		if (simonPlayed === userFirstPlay || simonPlayedA === userPlayed) {
			console.log(
				`in comparePlays, simonPlayedA is ${simonPlayedA}, simonPlayed is ${simonPlayed}, userFirstPlay is ${userFirstPlay} and userPlayed is ${userPlayed}`
			);
			winRound();
			return;
		} else {
			gameOver();
			console.log('gameover triggered in comparePlays');
		}
	}, 3000);
}
function winRound() {
	console.log('winRound running');

	level++;
	$('h2').text(`level ${level}`);
	simonsTurn();
}
function gameOver() {
	console.log('gaveOver running');

	console.log('gameOver');
}
function buttonSoundAndFlash(id) {
	switch (id) {
		case 'btn1':
			const clip1 = $('#sound1');
			clip1.trigger('play');
			const btn1 = $('#btn1');
			$('#btn1').addClass('flash');
			setTimeout(function() {
				$('#btn1').removeClass('flash');
			}, 50);
			break;
		case 'btn2':
			const clip2 = $('#sound2');
			clip2.trigger('play');
			const btn2 = $('#btn2');
			$('#btn2').addClass('flash');
			setTimeout(function() {
				$('#btn2').removeClass('flash');
			}, 50);
			break;
		case 'btn3':
			const clip3 = $('#sound3');
			clip3.trigger('play');
			const btn3 = $('#btn3');
			$('#btn3').addClass('flash');
			setTimeout(function() {
				$('#btn3').removeClass('flash');
			}, 50);
			break;
		case 'btn4':
			const clip4 = $('#sound4');
			clip4.trigger('play');
			const btn4 = $('#btn4');
			$('#btn4').addClass('flash');
			setTimeout(function() {
				$('#btn4').removeClass('flash');
			}, 50);
			break;
		default:
			console.log(id);
			break;
	}
}
