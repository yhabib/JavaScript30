# JavaScript Drum Kit
The index page displays a collection of div elements, each containing a letter that corresponds with a key on your keyboard. These are bound to local saved sounds, that will be played when the user clicks the corresponding key, it will also add a temporary class to give a 'highlight' effect around the element.
## Notes
* **HTML**
    - HTML data-* attribute: The data-* attributes (where * can be anything you want) allow us to store custom data on any HTML element. Each div.key and audio element in the provided HTML file has a data-key attribute which corresponds with a keyboard button.
    - Audio tag: An HTML5 tag that makes easier to work with sounds

* **JS**
    - Using the data-atribute, the audio and the key are bound.
    - Ex:
    - ```javascript 
      // 'e' is the event object
      const audio = document.querySelector(`audio[data-key="${e.charCode}"]`),
		    key = document.querySelector(`div[data-key="${e.charCode}"]`);

            key.classList.add("playing");
		    audio.currentTime = 0;
			audio.play();
      ```

* **CSS**
    - The playing class uses a scale transformation to give the effect of poping

## Events
* transitioned
* keypress
