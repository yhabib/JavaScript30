# Video Speed Controll
In this one, we build hoverable video speed controller, with a rage that goes
from 0.4 to 4.

## Notes
There is not much to commet, except for the calculation of the position of the mouse inside
the *speed-bar* (`const y`).
* The `e.pageY` returns the position of the mouse relative to the top edge of doc.
* The `this.offsetTop` returns the offset of the `.speed-bar` to the top of the doc.

```javascript
function handleMove(e) {
	// this === .speed-bar
	const y = e.pageY - this.offsetTop,
		   percent = y / this.offsetHeight,
		   min = 0.4,
		   max = 4,
		   height = Math.round(percent * 100) + '%',
		   playbackRate = percent * (max - min) + min;

	bar.style.height = height;
	bar.textContent = `${playbackRate.toFixed(2)} X`;
	video.playbackRate = playbackRate;
}
```

## Events
* mousemove