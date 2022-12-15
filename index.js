// const selectElem = document.getElementById('choose');
// // When a new <option> is selected
// selectElem.addEventListener('change', () => {
//   const index = selectElem.selectedIndex;
// })
// 
// function pbc() {
//     const selectElem = document.getElementById('choose');
//     if(index == 1) {
//         alert(index);
//     }
// }

var button = document.getElementById('PlayButton');
button.onclick = function() {
  var select = document.getElementById('choose').value;
  if (select == 1) {
    window.location.href = 'http://www.google.com';
  } else {
    window.location.href = 'http://www.bing.com';
  }
};