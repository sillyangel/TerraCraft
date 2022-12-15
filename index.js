function playbuttonclicked() {
    const sb = document.querySelector('#chose');
    if(1 == sb.selectedIndex) {
        window.location.href('native/index.html');
    } else {
        window.location.href('pc/index.html');
    }
}

