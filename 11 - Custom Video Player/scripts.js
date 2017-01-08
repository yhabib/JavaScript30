(function () {
    const player = document.querySelector('.player'),
    video = player.querySelector('.viewer'),
    progress = player.querySelector('.progress'),
    progressBar = player.querySelector('.progress__filled'),
    toggle = player.querySelector('.toggle'),
    skipButtons = player.querySelectorAll('[data-skip]'),
    ranges = player.querySelectorAll('.player__slider'),
    max = player.querySelector('.player__max');



video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', handleSkip));

ranges.forEach(range => range.addEventListener('change', handleRange));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown === true);
progress.addEventListener('mouseup', () => mousedown === false);

max.addEventListener('click', handleMax);


function togglePlay() {
    const method = video.paused ? 'play' : 'pause';   
    video[method]();
}
function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}
function handleSkip() {
    video.currentTime += +this.dataset.skip;    
}
function handleRange() {
    video[this.name] = this.value;
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const offset = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = offset;
}

function handleMax(e) {
    player.style.width = '100%';
    console.log(player.style);
    // player.style.maxWidth = player.style.maxWidth === 750
    // Maximize = !Maximize;    
}
})();