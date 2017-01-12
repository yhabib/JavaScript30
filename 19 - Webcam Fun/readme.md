# Unreal Webcam Fun
In this exercise we will first use the **[Navigator][2]** and then the **[mediaDevices][2]** to access the Webcam.
The first one is a representation of the application that is running our code, in our case, the browser. And the second
provides an interface to access the unser's connected media devices(webcam, microphone, ...).
Then we will allow the user to make a picture of the input from the webcam and download it. As a bonus
some effects will be also implemented.

## Notes
**This exercise needs to be run in a server in order to be able to have access to the media devices!!**

The first step is to get the stream from the webcam as an input to our *video* element. Worth to note:
in parameter. This new object represents a **File** or **Blob** object.

* The **[createObjectURL][2]** method sreates a DOMString containing an URL that represent the object given
* The HTML5 *video* tag expects in the src attribute a Bob file 😉
* The *catch* triggers if the user doesn't allow to access the webcam.

```javascript
function getVideo() {
    // way to access the media devices
    navigator.mediaDevices.getUserMedia( {video: true, audio: false } )
        .then(stream => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        })
        .catch(e => console.log('Ohhh No!!!', e));
} 
```

Then we want to paint in the *canvas* element the output of the webcam. In order to achieve it
we have to:

1. Listen for the **canplay** event that will trigger when the video element starts to play.
2. Set the size of our *canvas* element to be equal to the *video* element.
3. Apply the desired effects.
4. Draw the image into the canvas.

```javascript
function paintToCanvas() {
    const height = video.videoHeight;
    const width = video.videoWidth;

    canvas.height = height;
    canvas.width = width;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);  // from top left corner to bottom right
        
        // take pixels out in a special array for big data
        let pixels = ctx.getImageData(0, 0, width, height);

        // mess with them
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);

        // put pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}    
```

Finally when the user takes a photo:

1. Audio element plays a sound
2. Gets a data URI containing a representation of the image in the specified format through **[toDataUrl][3]**.
3. We create a new *a* element we insert the picture as an image.

```javascript
function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('imgage/jpeg'); 
    
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML =`<img src="${data}" alt="Handsome man" />`;
    strip.insertBefore(link, strip.firstChild);
}
```

**Why do I need a server for this exercise?** Because of security restrictions of getting the user's webcam, it 
must be tied to a security origin like https or localhost.

## Events
* canplay

## ToDo's
* [ ] Use of *debugger*
* [ ] Interface for the effects.
* [ ] Use return value from *setInterval* to be able to stop it at some point.
* [ ] Document properly the effects.

[1]:https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
[2]:https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
[3]:https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL