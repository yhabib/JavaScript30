# Flex Panel Gallery

In this exercise we are building a nice effect panel effect that will work great
on a gallery. We make use of **flexboxes**.

## Notes

The logic behind this exercise is very simple. We listen for two events:

* When there is a *click* in a panel, we toggle the `.open` class from the flex panel.
* And when the panel's transition ends(*transitioned*) we toggle the `.open-active` class from 
all the childs of the panel. It's worth mentioning how we filter the event, to get only the one
that interests us:

	```javascript
	function toggleActive(e) {
      if(e.propertyName.includes('flex'))
         this.classList.toggle('open-active');
   }
	```

Now the magic happens in the HTML and CSS code. So the templates structure is:

```html
<div class="panels">
  <div class="panel panel1">
    <p>Hey</p>
    <p>Let's</p>
    <p>Dance</p>
  </div>
  <div class="panel panel2">
	...
</div>
```

And in the CSS:

* `panels` is used to define the flex-container. *It is nice how he uses **vh***.
* `panel` here are defined the common properties as a flex box for all the flex-pannels as 
well as the background properties. It also contains the transition for which we listen in
the JS:
	
	```css
	transition:
      font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      background 0.2s;
	```
	
	Also we define that all children of the panel are going to have a transition effect, 
	but later only the first and last will have this `.open-active` class:
	
	```css
	.panel > * {
      transition:transform 0.5s;
   }
   .panel > *:first-child { transform: translateY(-100%); }
   .panel.open-active > *:first-child { transform: translateY(0); }
   .panel > *:last-child { transform: translateY(100%); }
   .panel.open-active > *:last-child { transform: translateY(0); }
	```
	And last but not least the effect to make bigger a panel comes from the flex properties:
	
	```css
   .panel.open {
      flex: 5;
      font-size:40px;
   }
	```
* `panelsX` where x is between [1, 5] is how we define a particular background
that each panel will have.


## Events
* **click**
* **transitioned:** when a CSS transition ends