# JS + CSS Clock

In this second project we are building an *analog* watch using JS and CSS.


# Notes

The most important thing about the JS code is how we do the mapping from time units to degrees:

```javascript
function getTime() {
    const date = new Date(),
        lag = 90,
        secs = 6 * date.getSeconds() + lag,
        mins = 6 * date.getMinutes() + lag,
        hours = 30 * date.getHours() + lag;
    secondHand.style.transform = 'rotate(' + secs + 'deg)';
    minuteHand.style.transform = 'rotate(' + mins + 'deg)';
    hourHand.style.transform = `translateX(5rem) rotate(${hours}deg)`;
}
```
The `lag` variable is related to the css code, where we have to define an intial rotation of 90° due the
default horizontal position of elements in html:
```css
.hand {
      width:15rem;
      height:6px;
      background:black;
      position: absolute;
      top:50%;
      transform-origin: 100%;
      transform: rotate(90deg);
    }
```

**NOTE:** ES6 browser compatibility by default for major browsers' last version:
* Safari: 100%
* Chrome, Opera: 97%
* Edge: 93%
* Firefox: 92%
