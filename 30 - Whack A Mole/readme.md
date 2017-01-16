# Whack a Mole!

Let's finish this amazing serie of tutorials with a game 😀.

## Notes

After a random time a mole will appear in a random hole. For that we defined
two functions. In the first one we generate a random number in between a range defined
as a parameter and in the second one a number between zero and the number of holes. We also
save the last hole to avoid returning the same hole twice:

```javascript
function randTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole)
		return randomHole(holes);
	lastHole = hole;
}		
```
We need to add a CSS class when we want to show a mole. For this we generate a random
amount of time and a random hole, and we add the class to this particular HTML node, that represents
a mole. Making use of `setTimeout` we hide the mole after a random time and recursively we call again 
the function if the user has still time.

```javascript
function peep() {
	const time = randTime(200, 1000);
	const hole = randomHole(holes);

	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}
```

We listen for clicks on the moles:

```javascript
function bonk(e) {
	if(!e.isTrusted) return;

	score++;
	this.classList.remove('up');
	scoreBoard.textContent = score;
}
```

And finally it is attached a method to the *start* button. This will be responsible
of initializing all variables for a new game and setting a timeout that will end the game
after 10 seconds:

```javascript 
function startGame() {
	if (startedGame) return;
	scoreBoard.textContent = 0;
	score = 0;
	timeUp = false;
	startedGame = true;
	peep();
	setTimeout(() => timeUp = true, 10000);
}
```

## Events
* **click**