if (window.location.href == "https://open.spotify.com/collection/albums") {
    var albumArray = document.querySelectorAll('.cover-art-playback');
    if (albumArray.length > 0) {
        var albumIndex = Math.floor(Math.random() * (albumArray.length))
        albumArray[albumIndex].click();
    }
}
