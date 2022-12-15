function playbuttonclicked() {
    const sb = document.querySelector('#chose');
    if (sb.selcetedIndex == 1) {
        window.location.href('native/index.html');
    } else {
        window.location.href('pc/index.html');
    }
}

