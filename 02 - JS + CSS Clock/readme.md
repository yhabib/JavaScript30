# JS + CSS Clock

In this second project we are building an *analog* watch using js and css.


# Notes

The most important thing about the JS code is how we map from time units to degrees:

```javascript
function getTime() {
    const date = new Date(),
        secs = 6 * date.getSeconds() + 90,      // seconds(60) * 6 = degrees(360°) + lag
        mins = 6 * date.getMinutes() + 90,      // minutes(60) * 6 = degrees(360°) + lag
        hours = 30 * date.getHours() + 90;      // hours(12) * 30 = degrees(360°) + lag
    secondHand.style.transform = 'rotate(' + secs + 'deg)';
    minuteHand.style.transform = 'rotate(' + mins + 'deg)';
    hourHand.style.transform = `translateX(5rem) rotate(${hours}deg)`;
}
```
The *lag* variable is related to the css code, where we have to define an intial rotation of 90° due the
default horizontal position of elements in html
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

**ES6** browser compatibility for major browsers' last version:
* Safari 100%
* Chrome, Opera 97%
* Edge 93%
* Firefox 92%
