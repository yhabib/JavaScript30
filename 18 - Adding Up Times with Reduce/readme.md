# Adding Up Times With Reduce
An *ul* representing a playlist where each *li* represents a video and it has a *data-time* attribute with its duration(string). Calculate the total time in *hours:minutes:seconds*

## Notes:
* Two implementations, one is self-describing the other is serious stuf :p
    ```javascript
        const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));
  
        const totalSeconds = timeAttributes
            .map(node => node.dataset.time)
            .map(timeCode => {
            const [mins, secs] = timeCode.split(':').map(parseFloat);
            return mins * 60 + secs;
            })
            .reduce((a, b) => a + b);
    ```
    ```javascript
        const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));
  
        const totalSeconds = timeAttributes
            .reduce((a, b) => {
                b = b.dataset.time.split(':').map(parseFloat);
                return a + b[0]*60 + b[1];
            }, 0);
    ```
* Also a function that converts from seconds to a hours:minutes:seconds format.
