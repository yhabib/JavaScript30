# Native Speech Recognition

The idea is to use the native speech recognition from the browser to build like a SpeechNotebook where each sentence will be in a different paragraph, that means that once 
the user stops talking a new we will append a new **p** element. 


## Notes
The **[Web Speech API][1]** has two components: the **[SpeechRecognition][2]** and the **[SpeechSythesis][3]**. In this first project we are focusing in the first component.

We initialize it like this:
```javascript
// Chrome special prefix
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;  //As you are speaking igves values rather than waiting till you end speaking       
```

Handling the *result* event is the most important part of this exercise. It is in **e.results** were we can find most of the relevant information. This is an array 
where we can find the **transcript**, a value between [0, 1] that shows the **confidence** of the transcription and a **isFinal** boolean which tells you if the user stopped
talking to start in a new paragraph.

```javascript
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});
```

Finally we append a new element to the **div** and rebind the listener to the **result** event.



## Events
* result -> Once we get it, the listener unbinds itself
* end -> We use it to rebind it 😀

## To Do's
* [x] Implemente some basic functionality like Siri: 
    - Siri weather
    - Siri NBA

[1]:https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
[2]:https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
[3]:https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
