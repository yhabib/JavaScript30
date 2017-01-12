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
            alert('Allow me to use the WEBCAAAAAAM!!!');
            console.log('Ohhh No!!!', e);
        });
} 

function paintToCanvas() {
    const height = video.videoHeight;
    const width = video.videoWidth;

    // canvas should have the same size as its input(webcam)
    canvas.height = height;
    canvas.width = width;

    // case I want to stop it sometime
    return setInterval(() => {
        // from top left corner to bottom right corner
        ctx.drawImage(video, 0, 0, width, height);
        
        // take pixels out in a special array for big data
        let pixels = ctx.getImageData(0, 0, width, height);

        // mess with them
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);
        // debugger;

        // put pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // reproduce sound 
    snap.currentTime = 0;
    snap.play();

    // take data out of canvas
    const data = canvas.toDataURL('imgage/jpeg'); 
    // console.log(data);
    
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML =`<img src="${data}" alt="Handsome man" />`;
    // like jquery prepend
    strip.insertBefore(link, strip.firstChild);
}

// -- EFFECTS

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
        pixels.data[i - 150] = pixels.data[i + 0];  
        pixels.data[i + 100] = pixels.data[i + 1];  
        pixels.data[i - 150] = pixels.data[i + 2];  
    }
    return pixels;
}

// document it properly
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });
  
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
