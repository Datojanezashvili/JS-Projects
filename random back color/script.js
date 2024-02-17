let btn = document.getElementById('btn');
let separateText = document.getElementById('separate-text');
let body = document.getElementById('body');

let hexSymbol = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

btn.addEventListener('click', () => {
    let hex = '#';
    for(let i = 0; i < 6; i++) {
        hex += hexSymbol[Math.trunc(Math.random() * hexSymbol.length)];
    }
    body.style.background = hex;
    separateText.textContent = hex;
});





// another way to do somethin without random math


// let arr = [];
// let currentIndex = 0;

// for(let i = 0; i < 3; i++) {
//     let userColor = prompt('enter 3 color: ')
//     arr.push(userColor)
// }

// btn.addEventListener('click', () => {
//     if(currentIndex < arr.length) {
//         body.style.backgroundColor = arr[currentIndex];
//         currentIndex++;
//     } else {
//         alert('no more color to display')
//     }
// })