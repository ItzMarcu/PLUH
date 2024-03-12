
const playButton = document.getElementById('player');
const audio = document.getElementById('sound');

playButton.addEventListener('click', function () {
    audio.play();
});