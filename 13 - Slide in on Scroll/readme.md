# Slide in on Scroll
When scrolling through the page, the images will slide in as soon as the user reaches half the height of the imgage. These will slide out when the user keeps scrolling.

## Notes
* There are some calculations to know where exactly the user is reference to an image.
    - ```javascript
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // is the user offset position along the image's heigh?
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // did not he already pass the image's heigh??
      const isNotScrolledPast = window.scrollY < imageBottom;
      ```
* Debounce function limits the rate at which a function can fire.  Ensures that a given task doesn't fire so often that it bricks browser performance. [More info](https://davidwalsh.name/javascript-debounce-function)
    - ```javascript
      function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
          let context = this,
            args = arguments,
            later = () => {
              timeout = null;
              if (!immediate) func.apply(context, args);
            },
            callNow = immediate && !timeout;

          clearTimeout(timeout);
          timeout = setTimeout(later, wait);

          if (callNow) func.apply(context, args);
        };
      }
      ```

## Events
* scroll