let countDown ;

const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



buttons.forEach(button => button.addEventListener('click', setTimer));
// works with the 'name' attribute
document.customForm.addEventListener('submit', setTimerFromForm);


function setTimer() {
	timer(+this.dataset.time);
}

function setTimerFromForm(e) {
	e.preventDefault();
	timer(+this.minutes.value * 60);
	this.reset();
}

function timer(seconds) {
	// clears any existing times
	clearInterval(countDown);

	// setInterval(fn, 1000); Where fn makes seconds-- Could not work as expected, the browser can shut it down for performance
	const now = Date.now();		// new to the browser => ms
	const then = now + seconds * 1000;	// convert seconds to ms
	displayTimeLeft(seconds);
	displayEndTime(then);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}


function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainerSeconds = seconds % 60;
	const display = `${minutes}:${remainerSeconds < 10 ? '0' : ''}${remainerSeconds}`;
	
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestampt) {
	const end = new Date(timestampt);
	const hours = end.getHours();
	const minutes = end.getMinutes();
	
	endTimeDisplay.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
