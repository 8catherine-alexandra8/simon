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

//startGame via keypress, ititiate first button played
//by Simon
$(document).keydown(function() {
	startGame();
});
function startGame() {
	$('h2').text(`level ${level}`);
	$(document).off('keydown');
	let randomIndex = Math.floor(Math.random() * 4);
	startButton = buttons[randomIndex][0];
	startButton.classList.add('flash');
	simonPlayed.push(startButton.id);
	buttonSounds[randomIndex].trigger('play');
	setTimeout(function() {
		startButton.classList.remove('flash');
	}, 100);
}
//User clicks button(s) to play turn,
//button sound and animation on click, passing click target
//info on to userTurn fn
$(document).click('col', function(event) {
	buttonSoundAndFlash(event.target.id);
	userTurn(event.target);
});

//userPlayed array updated with click target ids, then
//updated array length passed on to comparePlays fn
function userTurn(target) {
	userPlayed.push(event.target.id);
	comparePlays(userPlayed.length - 1);
}
//userPlayed array length -1, used to determine current game level
//User array and Simon's array compared.  If equal, then simon's turn
//is initiated. If no match, then game over is initiated
function comparePlays(currentLevel) {
	if (simonPlayed[currentLevel] === userPlayed[currentLevel]) {
		if (userPlayed.length === simonPlayed.length) {
			setTimeout(function() {
				simonsTurn();
			}, 2000);
		}
	} else {
		gameOver();
	}
}
//simon's turn is initiated if previous round had matching user and simon
//arrays. user array is cleared and level is incremented by one. Random
//button chosen for simon's turn and this button id added to simonPlayed
//array. Button sound and animation also triggered.
function simonsTurn() {
	userPlayed = [];
	level++;
	$('h2').text(`level ${level}`);
	let index = Math.floor(Math.random() * 4);
	let nextPlay = buttons[index][0];
	nextPlay.classList.add('flash');
	simonPlayed.push(nextPlay.id);
	buttonSounds[index].trigger('play');
	setTimeout(function() {
		nextPlay.classList.remove('flash');
	}, 100);
}
//gameOver initiated when userPlayed and simonPlayed arrays don't match
//on a given round. Game over screen and sound followed by
//page reload after 3 seconds
function gameOver() {
	const clipGameOver = $('#soundOver');
	clipGameOver.trigger('play');
	$('h1').text('GAME OVER');
	$('h2').text('');
	$('.game-over').removeClass('hide');
	setTimeout(function() {
		$('.game-over').addClass('hide');
		$('.row').addClass('hide');
	}, 300);

	setTimeout(function() {
		location.reload();
	}, 2000);
}
//switch statement used for triggering animation and sound responding
//to clicks on corresponding event target ids
function buttonSoundAndFlash(id) {
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
