if (window.location.href == "https://open.spotify.com/collection/albums") {
    var albumElement = document.querySelectorAll('.container-fluid--noSpaceAround')[0].children[0];
    var albumArray = Array.from(albumElement.children);
    var sortedArray = albumArray.sort(function (a, b) {
        aArtist = a.querySelector('.ellipsis-one-line').innerHTML == "Various artists" ? a.querySelector('.ellipsis-one-line').innerHTML.toLowerCase() : a.querySelector('.ellipsis-one-line').getElementsByTagName('a')[0].innerText.toLowerCase();
        bArtist = b.querySelector('.ellipsis-one-line').innerHTML == "Various artists" ? b.querySelector('.ellipsis-one-line').innerHTML.toLowerCase() : b.querySelector('.ellipsis-one-line').getElementsByTagName('a')[0].innerText.toLowerCase();

        if(aArtist < bArtist) return -1;
        if(aArtist > bArtist) return 1;
        return 0;
    })

    for (i = 0; i < sortedArray.length; i++) {
        albumElement.parentNode.appendChild(sortedArray[i])
    }
}