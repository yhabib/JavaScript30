# Hold Shift and Check Checkboxes

In this exercise we try to imitate a common layout that can be found in many email clients.
When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, 
all the checkboxes inbetween those two checkboxes will be checked.

## Notes

We start selecting all the inputs that are checkboxes, and binding them to the
click event.

```javascript
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    let flag = false;
    checkboxes.forEach(box => {
      if (box === lastCheck || box === this) flag = !flag;
      if (flag) box.checked = true;
    })
  }
  lastCheck = this;
}  
```


## Events

* **click**