# Countdown Clock

We build in this example a [Pomodoro Clock][1]

## Notes

The main function takes care of most of the logic of this exercise. Some comments about it:

* We don't implement it through decrementing a variable inside a `setInterval`, because 
we cannot be sure if it's going to work as expected, because sometimes the browser
will shut it down due performance.
	
	```javascript
	let leftSeconds = 15;
	setInterval(() => leftSeconds--, 1000);
	```

* At the beginning we clean the last `setInterval` defined in order to have always 
one referece.
* `setInterval` returns always a value that identifies the timer and allows to clear it
at some point in the future. 
* The `Date.now()` returns a value in miliseconds

```javascript
function timer(seconds) {
	clearInterval(countDown);

	const now = Date.now();		
	const then = now + seconds * 1000;
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
```

The other two functions implemente have the mission to generate the HTML code 
to be inserted into the corresponging HTML elements:

```javascript
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
```

**Note:** When getting values from HTML elements either through `data` attributes or 
`input` values, the return value will be always a string so in this case if we are working with numbers
we have to cast it to Number:

```javascript
const dataAttribute = parseInte(this.dataset.time);
// or
const dataAttribute = +this.dataset.time;
```

**Note:** All HTML elements that have a name attribute can be accessed directly from
the `document` object, without using the `querySelector` method:

```html
<form name="customForm" id="custom">
	<input type="text" name="minutes" placeholder="Enter Minutes">
</form>
```

```javascript
const minuteValue = document.customForm.minutes.value;
```

## Events
* **click**
* **submit**

[1]:https://en.wikipedia.org/wiki/Pomodoro_Technique