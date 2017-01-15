# Speech Synthesis

In this cool mini-project we build a speech-synthesis app making use of an API that 
comes in most of the browsers, the **[SpeechSynthesis][1]**.

## Notes

So we start listening for the *voiceschanged* event that will be fired once the browser,
knows all the available voices. When it's fired we populate the voices dropdown:

```javascript
function populateVoices() {
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
}
```

Then we listen for the *change* event in any of the *input* elements when they are fired
we update the **[SpeechSynthesisUtterance][2]** options:

```javascript
function setVoice() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
}

function setOption() {			
	msg[this.name] =this.value;
	toggle();
}
```

**NOTE:** To pass a value to a function inside an event with **[bind][3]**:
```javascript
stopButton.addEventListener('click', toggle.bind(null, false));
```

## Events
* **click**
* **change:** *input* element's value chages
* **voiceschanged:** list of SpeechSynthesisVoice objects that would be returned by the 
`SpeechSynthesis.getVoices()` method has changed. After the browsers initializes this 
event is fired

[1]:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
[2]:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
[3]:https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind