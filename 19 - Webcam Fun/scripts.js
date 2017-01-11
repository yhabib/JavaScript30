const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// secure web: hhtps or localhost

video.addEventListener('canplay', paintToCanvas);

getVideo();

// We need to run it in a server in order to access the getUserMediaProperties
function getVideo() {
    // way to access the media devices
    navigator.mediaDevices.getUserMedia( {video: true, audio: false } )
        .then(stream => {
            // video.src spects this type of obj rather than a normal obj
            video.src = window.URL.createObjectURL(stream);
            video.play();
            // video.src is a BLOB!!
        })
        .catch(e => {
            // In case that the user doesn't allow to use the media devices
            console.log('Ohhh No!!!', e);
        });
} 

function paintToCanvas() {
    const height = video.videoHeight;
    const width = video.videoWidth;

    // Canvas should have the same size as its input(webcam)
    canvas.height = height;
    canvas.width = width;

    // Case I want to stop it sometime
    return setInterval(() => {
        // From top left corner to bottom right corner
        ctx.drawImage(video, 0, 0, width, height);
        // an special type of array for big data
        
        let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        // debugger;
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // Reproduce sound 
    snap.currentTime = 0;
    snap.play();

    // take data out of canvas
    const data = canvas.toDataURL('imgage/jpeg'); 
    // console.log(data);
    
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML =`<img src="${data}" alt="Handsome man" />`;
    // jquery prepend
    strip.insertBefore(link, strip.firstChild);
}

// Effects
function redEffect(pixels) {
    for(let i=0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 150;  // r
        pixels.data[i + 1] = pixels.data[i + 1] - 50;   // g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;  // b
    }
    return pixels;
}

function rgbSplit(pixels) {
    for(let i=0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0];  // r
        pixels.data[i + 100] = pixels.data[i + 1];   // g
        pixels.data[i - 150] = pixels.data[i + 2];  // b
    }
    return pixels;
}