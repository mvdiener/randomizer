if (window.location.href == "https://open.spotify.com/collection/albums") {
    var currentHeight = document.body.scrollHeight;
    var scrollAttempts = 0;

    var scroll = setInterval(function () {
        if (scrollAttempts < 5) {
            window.scrollTo(0, currentHeight);
            if (currentHeight === document.body.scrollHeight) {
                scrollAttempts++;
            }
            else {
                currentHeight = document.body.scrollHeight;
                scrollAttempts = 0;
            }
        }
        else {
            clearInterval(scroll);
            orderAlbums();
        }
    }, 1000);

    scroll;
}

function orderAlbums() {
    console.log('why am i here');
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
        albumElement.parentNode.appendChild(sortedArray[i])
    }
}