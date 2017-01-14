# CSS Variables

The purpose of this challenge is to learn about the **css variables**. You may think that you have already use them in **LESS** or **SASS** but what we are going to see here are variables that will live after the preprocessor xD

## Notes

In LESS or SASS you can find something like this:

```less
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);
```
Make no mistake once they go through the preprocessor they will have a fix value. Instead of that, with **css variables** you can change its value during the lifecycle of your program.


So how do we work with them?

1. We have to assign them into a component:
    ```css
    :root {
        --spacing: 10px;
        --blur: 10px;
        --base: white;
    }
    ```

2. Applying to a style:
    ```css
    img {
        width: 95%;
        max-width: 900px;
        height: auto;
        background-color: var(--base);
        padding: var(--spacing);
        filter: blur(var(--blur));
      }
    ```
 
3. Use them in JS:
    ```javascript
    const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
        const data = this.value,
              suffix = this.dataset.sizing || '',
              type = this.name;
        document.documentElement.style.setProperty(`--${type}`, data + suffix);
    }
    
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    ```
 
**NOTE**: Running `.querySelector()` or `.querySelectorAll()` we recieve a data structure that looks like an `Array` but it is't. The `listNode` object that we obtain have a reduced API. If you prefer working with arrays there are two options:
 
```javascript
const inputs = document.querySelectorAll('.controls input');
const inputsArr1 = Array.from(inputs);
const inputsArr2 = [...inputs];                // ES6 spread operator
```
 
## Events

* **change:** input element's value chages
