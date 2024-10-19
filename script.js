document.getElementById('playMusic').addEventListener('click', function() {
    var music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
