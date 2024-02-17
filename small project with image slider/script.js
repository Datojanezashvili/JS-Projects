// გზა 1

// let imgArr = ['images/HTML.png','images/CSS.jpg','images/JS.jpg']

// let num = 0

// function next() {
//     let slider = document.getElementById('image1')
//     num++

//     if(num >= imgArr.length) {
//         num = 0
//     }

//     slider.src = imgArr[num]
// }


// function back() {
//     let slider = document.getElementById('image1')
//     num--

//     if(num < 0) {
//         num = imgArr.length-1
//     }

//     slider.src = imgArr[num]
// }



// გზა 2


let nextBtn = document.getElementById('next')
let backBtn = document.getElementById('back')

let imgArr = ['images/HTML.png','images/CSS.jpg','images/JS.jpg']

let num = 0

nextBtn.addEventListener('click', function() {
    let currentImg = document.getElementById('image1')
    num ++ 
    if(num >= imgArr.length) {
        num = 0
    }

    currentImg.src = imgArr[num]
})

backBtn.addEventListener('click', function() {
    let currentImg = document.getElementById('image1')
    num -- 
    if(num < 0){
        num = imgArr.length - 1
    }

    currentImg.src = imgArr[num]
})


