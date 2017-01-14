# Event Capture, Propagation, Bubbling and Once

## Notes

This exercises uses a set of nested **divs** with a **click** event attached
to each of them.
```html
<div class="one">
	<div class="two">
		<div class="three">
		</div>
	</div>
</div>
```
```javascript
divs.forEach(div => div.addEventListener('click', logText));
```

### **So, how does it work when an event is fired???**

1. The user clicks the `<div class="three">`.
2. Then the browser ripples down, so goes from the most external element to the deepest one and captures 
all off the events binded to them. This process is called **Event Capture**. This process has the aim to 
figure it out what the user has clicked on.
	```javascript
	// The browser stores the events in this order
	// Event attached to <div class="one">
	// Event attached to <div class="two">
	// Event attached to <div class="three">
	```

3. At this moment the events are not fired yet. So starting from the bottom, the browser does something called **bubble up**
and fires each of these events.
	```javascript
	// The browser fires the events in this order
	// Event attached to <div class="three">
	// Event attached to <div class="two">
	// Event attached to <div class="one">
	```
	But we can change the way this works using the `capture` property:

	```javascript
	divs.forEach(div => div.addEventListener('click', logText, {
		capture: true   	// by default is false
	}));
	```
	So now when the browser captures each of the events, it will inmediately fire them. That means that 
	the handler for the event is not going to get run on the *buble up* but rather on the *capture down*.
	```javascript
	// The browser fires the events in this order
	// Event attached to <div class="one">
	// Event attached to <div class="two">
	// Event attached to <div class="three">
	```

4. We can also call **stop propagation** in the event handler, this way it will stop a **buble up** process, 
firing only the deepest event, or viceversa.
	```javascript
	function logText(e) {
		console.log(this.classList.value);
		e.stopPropagation();
	}
	// now the the browser only fires the one event because capture=true
	// Event attached to <div class="one">
	'''

* Last but not least, **Once** is a very new feature in the browser, that allows to listen for an event and then unbinds
itself, so the event will never be triggered again:
	```javascript
		divs.forEach(div => div.addEventListener('click', logText, {
			capture: false,
			once: true
		}));

		// this is like doing 
		divs.forEach(div => div.removeEventListener('click', logText));
	```
