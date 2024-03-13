
const playButton = document.getElementById('player');
const audio = document.getElementById('sound');

playButton.addEventListener("click", async function () {
    try{
        await audio.play();
    } catch (error) {
        console.error(error);
    }
});