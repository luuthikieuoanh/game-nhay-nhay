const lights = document.querySelectorAll('.light');

const start = document.querySelector('.btn1');
const stop = document.querySelector('.btn2');
let viTri;
let count=0;
start.addEventListener('click', () => {
    viTri = setTimeout(function setViTri() {
        lights.forEach(element => {
            element.style.display='inline-block';
            const horiozontal = getRandomInt(0, 1200);
            const vertical = getRandomInt(0, 800);
            element.style.top = `${vertical}px`;
            element.style.left = `${horiozontal}px`;
        });
        viTri=setTimeout(setViTri, 1000);
        count++;
        auto(count);
        console.log(count);
    }, 1000);
})
let score=0;
const result=document.querySelector('.result');
lights.forEach(e=>{
    e.addEventListener('click',()=>{
        score+=parseInt(e.textContent);
        result.innerHTML=score;
    })
    
})

function auto(count) {
    if (count==20) {
        clearTimeout(viTri);
        count=0;
    } 
}

stop.addEventListener('click', () => {
    clearTimeout(viTri);
})


// const a = ['#fab900', '#eaff00', '#d2ff00', '#fcff00', '#bdff14', '#87ff5c', '#8ef170','#fff','aqua','lightpink','wheat'];

// let b=setTimeout(function doimau() {
//     lights.forEach(e => {
//         const change = getRandomInt(0, a.length);
//         e.style.backgroundColor = a[change];
//     });
//     setTimeout(doimau, 100);
// }, 500);




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
