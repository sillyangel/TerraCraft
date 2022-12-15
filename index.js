const selectElem = document.getElementById('choose');
// When a new <option> is selected
selectElem.addEventListener('change', () => {
  const index = selectElem.selectedIndex;
})

function pbc() {
    const selectElem = document.getElementById('choose');
    if(index == 1) {
        alert(index);
    }
}

function divied(x, y) {
    return x/y;
}

alert(divied(2, 1))