# Local Storage and Event Delegation

Allows the user to insert new dishes to be prepared. This dishes are going to be persistent. For that we are using the LocalStorage.
We also work here with **event delegation**, that happends when we want to attach a listener to an element that is going to be created in the future, in this case the checkboxes related to each dish.

## Notes
**In this exercise I did't wrap all the js code inside a IIFE becauese doing that doesn't allow to inspect the variables inside the web browser's console!!**

* Working with **localStorage** to make data persistent when refreshing the browser. API:
    - localStorage.get(key);
    - localStorage.set(key, value); // It expects plain strings so if the value is an Object -> JSON.stringify(value)
    - localStorage.delete(key);
* When working with **submit** events one has to consider that the browser is going to make a redirection to the same url plus the value of the form(GET). So in order to inspect the inhalt:
    - In the developer tools -> Preserve log
    - e.preventDefault(); // Inside the event handler. No redirection at all
* Event Delegation: When listening for an event in something higher and then inside we check if it is the actually thing that we want:
    * A parent element is *responsible* but its children *aren't*.
    * He takes the responsability and then inside the event handler checks if it's correct
    ```javascript
        itemsList.addEventListener('click', toggleDone);    // itemsList is an - first
        function toggleDone(e) {
            if (!e.target.matches('input')) return;         // checks if its the desired child
            ...                                             // delegates the handler
        }
    ```
* Using **data-index** to bind the position of the item in the array with an html component!
* How to create custom checkboxes using CSS:
```css
    // hide original boxes
    .plates input {
      display: none;
    }

    .plates input + label:before {
      content: '⬜️';
      margin-right: 10px;
    }

    .plates input:checked + label:before {
      content: '🌮';
    }
```

**Note:** *If one wants to do it smarter so calling populateList will only update a new elements instead of recreating again the whole innerHtml -> AngularJs, React, ... two way bindings ...*

## Events
* **submit:** in the callback the **this** object is the form
* **click**

## To Do's
1. [ ] Clear button: Clears all the checkboxes
