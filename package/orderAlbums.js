if (window.location.href == "https://open.spotify.com/collection/albums") {
    var albumElement = document.querySelectorAll('.contentSpacing')[0].children[1].children[0].children[0];
    var albumArray = Array.from(albumElement.children);
    var sortedArray = albumArray.sort(function (a, b) {
        aArtist = a.querySelector('.react-contextmenu-wrapper').getElementsByTagName('a')[1].innerText.toLowerCase();
        bArtist = b.querySelector('.react-contextmenu-wrapper').getElementsByTagName('a')[1].innerText.toLowerCase();

        if (aArtist < bArtist) return -1;
        if (aArtist > bArtist) return 1;
        return 0;
    });

    for (i = 0; i < sortedArray.length; i++) {
        albumElement.appendChild(sortedArray[i])
    };
}