if (window.location.href == "https://open.spotify.com/collection/albums") {
    var albumElement = document.querySelectorAll('.container-fluid--noSpaceAround')[0].children[0];
    var albumArray = Array.from(albumElement.children);
    var sortedArray = albumArray.sort(function (a, b) {
        aArtist = a.querySelector('.ellipsis-one-line span') == null ? a.querySelector('.ellipsis-one-line a').innerHTML.toLowerCase() : a.querySelector('.ellipsis-one-line span').innerText.toLowerCase();
        bArtist = b.querySelector('.ellipsis-one-line span') == null ? b.querySelector('.ellipsis-one-line a').innerHTML.toLowerCase() : b.querySelector('.ellipsis-one-line span').innerText.toLowerCase();

        if (aArtist < bArtist) return -1;
        if (aArtist > bArtist) return 1;
        return 0;
    })

    for (i = 0; i < sortedArray.length; i++) {
        albumElement.appendChild(sortedArray[i])
    }
}