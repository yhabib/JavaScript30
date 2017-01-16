# CSS Variables

The purpose of this challenge is to learn about the **css variables**. You may think that you have already work with them in **LESS** or **SASS** but what we are going to see here are variables 
that will live after preprocessing our code.

## Notes

In LESS or SASS you can find something like this:

```less
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);
```
But make no mistake once they go through the preprocessor they will have a fixxed value. Instead of that, with **css variables** you can change its value during the lifecycle of your program.


**So how do we work with them?**

1. We have to assign them to a component:
    ```css
    :root {
        --spacing: 10px;
        --blur: 10px;
        --base: white;
    }
    ```

2. Then we use them through our styles:
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
 
3. And we also access them in our JS:
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
 
**NOTE**: Calling `.querySelector()` or `.querySelectorAll()` we recieve a data structure that looks like an `Array` but it is't. 
The `listNode` object that we obtain has a reduced API, so in case that you prefer to work with arrays there are two ways for the conversion:
 
```javascript
const inputs = document.querySelectorAll('.controls input');
const inputsArr1 = Array.from(inputs);
const inputsArr2 = [...inputs];                // ES6 spread operator
```
 
## Events

* **change:** input element's value chages
