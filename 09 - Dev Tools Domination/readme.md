# Dev Tools Domination

Some nice `console.` tips to improve the way we debug our JS code.

## Notes
* **console.log()**
	
	```javascript
    // Interpolated
    console.log("Hi there, a %s", 'shit');
    
    // Styled
    console.log('%c I am some edited text', 'font-size: 20px; background-color: red; text-shadow: 10px 10px 0 blue');
	```
* To filter the *logs* in the browser's developer tools:
	* **console.info()**
	* **console.warn()**
	* **console.error()**
* **console.assert()** for testing.
* **console.clear()**
* **console.dir()** shows the content of a node from the HTML tag.
* **console.table()** for JSON objects.
* **console.count()** to count the number of times of a value.
* Timers:

	```javascript
	console.time('fetching data');
   fetch('https://api.github.com/users/yhabib')
      .then(data => data.json())
      .then(data => {
         console.timeEnd('fetching data');
         console.log(data);
      });
	```