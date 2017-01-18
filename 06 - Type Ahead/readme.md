# Type Ahead

In this new exercise making use of a new method added to the browsers, **[fetch][]**,
we build a autocompletition dropdown.

## Notes

First of all, at initialization we call `fetch` to grab all the data that we are going
to use in the dropdown. 
We have to perform a mapping from the data raw data that we receive from the BackEnd, because
it is sent to us as Blob:

```javascript
fetch(endpoint)
  .then(response => response.json())
  .then(myObject => cities.push(...myObject))
  .catch(err => console.error(err));
```

Then we define an auxiliar function that will help us to find a match inside our array of data
`cities`. Making use or a *regular expression* we filter by cities or states that match our condition:

```javascript
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex); 
  });
}
```
Finally we attach a handler for our *keyup* event. When creating the HTML code
to be inserted into the `suggestion`element, we make use again of *regular expressions* 
to replace the values of  ???????

```javascript
function displayMatches() {
  const matches = findMatches(this.value, cities),
        html = matches.map(place => {
          const regex = new RegExp(this.value, 'gi'),
                cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`),
                stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
          return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>
          `;
        }).join('');
  suggestions.innerHTML = html;
}
```

We also define another auxiliar function to add commas to big numbers:

```javascript
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

**NOTE:** How the effects are defined on the css

## Events
* **keyup:** we make use of it instead of **change** because it is called after the user
presses a key in the input field. Otherwise it will be fired only after the user submits the 
form.

6. Fetch, spreading an array so push inside another, pure functions, copy arrays.