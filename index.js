let buttons = [ $('#btn1'), $('#btn2'), $('#btn3'), $('#btn4') ];
let buttonSounds = [
	$('#sound1'),
	$('#sound2'),
	$('#sound3'),
	$('#sound4')
];
let simonPlayed = [];
let userPlayed = [];
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
	simonPlayed.push(startButton.id);
	console.log(`in startGame, simonPlayed = ${simonPlayed}`);
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		startButton.classList.remove('flash');
	}, 50);
	console.log(simonPlayed);
}
function simonsTurn() {
	userPlayed = [];
	level++;
	$('h2').text(`level ${level}`);
	console.log('simonsTurn running');
	let index = Math.floor(Math.random() * 4);
	let nextPlay = buttons[index][0];
	nextPlay.classList.add('flash');
	simonPlayed.push(nextPlay.id);
	console.log(`after simonsTurn, simonPlayed  = ${simonPlayed}`);
	buttonSounds[index].trigger('play');
	setTimeout(function() {
		nextPlay.classList.remove('flash');
	}, 50);
}

$(document).click('col', function(event) {
	buttonSoundAndFlash(event.target.id);
	userTurn(event.target);
});

function userTurn(target) {
	console.log('userTurn running');
	userPlayed.push(event.target.id);
	console.log(userPlayed);
	comparePlays(userPlayed.length - 1);
}

function comparePlays(currentLevel) {
	console.log('comparePlays running');
	if (simonPlayed[currentLevel] === userPlayed[currentLevel]) {
		if (userPlayed.length === simonPlayed.length) {
			setTimeout(function() {
				simonsTurn();
			}, 1000);
		}
	} else {
		gameOver();
	}
}
function gameOver() {
	console.log('gaveOver running');

	console.log('gameOver');
	setTimeout(function() {
		location.reload();
	}, 3000);
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
