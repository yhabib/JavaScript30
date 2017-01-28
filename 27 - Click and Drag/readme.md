# Click and Drag to Scroll
In this exercise we build a replica of a **grab and scroll** effect found in **[Hover States](http://hoverstat.es/)**.

## Notes

The logic to get this effect is based on getting the position of the mouse relative to the left edge(`startX`) as well the value of the amount of scroll of 
the scrollable container(`scrollLeft`) when a *clickdown* event is fired. We also set a flag letting know that the
mouse is down.

The more challenging handler is the one that takes care of the *mousemove* effect. Here we have to calculate
the *walk* or amount of scroll, when the users moves the mouse:

```javascript
slider.addEventListener('mousemove', e => {
	if(!isDown) return;
			
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3;

	slider.scrollLeft = scrollLeft - walk;
});
```

**Worth to look:** In the CSS file there are some nice effects, like perspectives and zooms. 

**Note:** In the CSS file it is used the **[will-change][1]** property whose mission is to
let know the browser that a transformation will be performed so this way the browser can 
set up appropriate optimizations ahead of time.

## Events

* **mouseup**
* **mouseleave**
* **mousemove**
* **mousedown**

[1]:https://developer.mozilla.org/en/docs/Web/CSS/will-change