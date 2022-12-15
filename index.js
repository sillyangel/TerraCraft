function playbuttonclicked() {
    const sb = document.querySelector('#chose');
    if(client == sb.selectedIndex) {
        window.location.href('native/index.html');
    } else {
        window.location.href('pc/index.html');
    }
}

