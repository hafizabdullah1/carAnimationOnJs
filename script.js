var redSignal = document.getElementsByClassName('red')[0];
var yellowSignal = document.getElementsByClassName('yellow')[0];
var greenSignal = document.getElementsByClassName('green')[0];
var check = document.querySelectorAll('.check')
const icon = document.querySelector('i')
const selectDiv = document.querySelector('.select')
let car = document.querySelector('.car');
let tyre = document.querySelectorAll('.tyre')[0];
let tyreRight = document.querySelectorAll('.tyre')[1];



// car and tyre animation control
car.style.animation = "restart infinite linear 6s";
tyre.style.animation = "rotate infinite linear 1s";
tyreRight.style.animation = "rotate infinite linear 1s";


// signal colors
redSignal.style.backgroundColor = "#555";
yellowSignal.style.backgroundColor = "#555";
greenSignal.style.backgroundColor = "#555"





// control signal with manually
// check.forEach((e) => {
//     e.addEventListener('click', () => {
//         // if (e.innerText == "red") {
//         //     redSignal.style.backgroundColor = `${e.innerText}`
//         //     yellowSignal.style.backgroundColor = `#555`
//         //     greenSignal.style.backgroundColor = `#555`
//         //     car.style.animation = "";
//         // }
//         // if (e.innerText == "yellow") {
//         //     yellowSignal.style.backgroundColor = `${e.innerText}`
//         //     redSignal.style.backgroundColor = `#555`
//         //     greenSignal.style.backgroundColor = `#555`

//         // }
//         // if (e.innerText == "green") {
//         //     greenSignal.style.backgroundColor = `${e.innerText}`
//         //     redSignal.style.backgroundColor = `#555`
//         //     yellowSignal.style.backgroundColor = `#555`
//         // }

//         if ((redSignal.style.backgroundColor == `rgb(85, 85, 85)`) || (greenSignal.style.backgroundColor == `green`)) {
//             redSignal.style.backgroundColor = `red`
//             yellowSignal.style.backgroundColor = `#555`
//             greenSignal.style.backgroundColor = `#555`
//             // animation stop
//             car.style.animation = "";
//             tyre.style.animation = "";
//             tyreRight.style.animation = "";

//             console.log(car.style.left);

//             console.log("if part ");
//         }

//         else if (redSignal.style.backgroundColor == `red`) {
//             yellowSignal.style.backgroundColor = `yellow`
//             redSignal.style.backgroundColor = `#555`
//             greenSignal.style.backgroundColor = `#555`
//             console.log("else part ");
//             setInterval(() => {
//                 if (yellowSignal.style.backgroundColor == `yellow`) {
//                     yellowSignal.style.backgroundColor = `#555`
//                     redSignal.style.backgroundColor = `#555`
//                     greenSignal.style.backgroundColor = `green`

//                     // car animation start
//                     car.style.animation = "car infinite linear 8s";
//                     tyre.style.animation = "rotate infinite linear 1s";
//                     tyreRight.style.animation = "rotate infinite linear 1s";

//                     setInterval(()=>{
//                          car.style.animation = "restart infinite linear 8s";
//                          tyre.style.animation = "rotate infinite linear 1s";
//                          tyreRight.style.animation = "rotate infinite linear 1s";
//                          console.log("now scnd interval");
//                     },6000)
//                     console.log("else > if part ");
//                 } 

//             }, 1500)
//         }
//     })









//     })
// })

//<==================================================| control signals on Enter button |===============================>
window.addEventListener('keypress', (e) => {
    // <==========================================| This condition Turns out True When signal Red |========================>

    if (e.keyCode == 13) {
        if ((redSignal.style.backgroundColor == `rgb(85, 85, 85)`) || (greenSignal.style.backgroundColor == `green`)) {
            redSignal.style.backgroundColor = `red`
            yellowSignal.style.backgroundColor = `#555`
            greenSignal.style.backgroundColor = `#555`

            // animation stop when siganl Red
            car.style.animation = "oneTime 1 linear 2s";
            tyre.style.animation = "oneTimerotate 1 linear 2s";
            tyreRight.style.animation = "oneTimerotate 1 linear 2s";
            // change signboard Image when signal red
            lcd.innerHTML = `<img src="./img/stop-img.png">`
            console.log("if part ");
        }

        // <==========================================| This condition Turns out True When signal Yellow |========================>

        else if (redSignal.style.backgroundColor == `red`) {
            yellowSignal.style.backgroundColor = `yellow`
            redSignal.style.backgroundColor = `#555`
            greenSignal.style.backgroundColor = `#555`

            // change signboard Image when siganl yellow
            lcd.innerHTML = `<img src="./img/wait.png">`
            console.log("else part ");
            // <=============| After 1.5sec of Yellow Signal Condition True This condition Run and Change Yellow Signal into green|==============>
            setInterval(() => {
                if (yellowSignal.style.backgroundColor == `yellow`) {
                    yellowSignal.style.backgroundColor = `#555`
                    redSignal.style.backgroundColor = `#555`
                    greenSignal.style.backgroundColor = `green`

                    // change signboard Image when siganl green
                    lcd.innerHTML = `<img src="./img/go-img.png">`

                    // start animation when siganl is green
                    car.style.animation = "car infinite linear 2s";
                    tyre.style.animation = "rotate infinite linear 1s";
                    tyreRight.style.animation = "rotate infinite linear 1s";

                    // setinterval to change animation  
                    let changeAnimation = setInterval(() => {
                        car.style.animation = "restart infinite linear 6s";
                        tyre.style.animation = "rotate infinite linear 1s";
                        tyreRight.style.animation = "rotate infinite linear 1s";
                        console.log("Animation Change");
                    }, 2000)

                    // clearinterval clear AnimationStart Function
                    setTimeout(() => {
                        clearInterval(changeAnimation);
                        console.log("Animation End Now");
                    }, 3000)
                    console.log("else > if part");
                }
            }, 1500)
        }
    }
})

// signal toggle function
icon.addEventListener('click', () => {
    icon.classList.toggle('i-tog');
    selectDiv.classList.toggle('select-tog')
})

const oneTime = "oneTime";
// car div position

let findPosition =()=>{
    let checkPosition = car.getBoundingClientRect().left;
    requestAnimationFrame(findPosition);
    
    const keyframes = `
    @keyframes ${oneTime} {
        0%{
            left:150px;
        }
        100%{
            left: 55%;
        }
    }`
    
const styleElement = document.createElement('style');
document.head.appendChild(styleElement);
    // console.log(`${parseInt(checkPosition)}px`);
styleElement.sheet.insertRule(keyframes, 0);
}



findPosition()