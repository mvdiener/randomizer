if (window.location.href == "https://open.spotify.com/collection/albums") {
    var albumElement = document.querySelectorAll('.contentSpacing')[0].children[1].children[0].children[0];
    var albumArray = Array.from(albumElement.children);
    if (albumArray.length > 0) {
        var albumIndex = Math.floor(Math.random() * (albumArray.length))
        albumArray[albumIndex].getElementsByTagName('button')[0].click();
    }
}
