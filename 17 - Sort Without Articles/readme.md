# Sort Without Articles

This one was a short one, the idea was to sort an array of Bands without taking care of the article.

## Notes
* How to strip a word with **regular expressions**:

    ```javascript
        function strip(bandName) {
            return bandName.replace(/^(a |the |an )/i, '').trim();
        }
    ```
* Sorting and coupling to the html element:
    
    ```javascript
        const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
        document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
    ```
