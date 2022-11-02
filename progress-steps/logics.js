let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let progress = document.querySelector(".progress");
let circle = document.querySelectorAll(".circle")
let one = document.querySelector("#one")
let i = 0;

let currentActive = 1;


nextBtn.addEventListener("click", () => {
    progress.style.width = `${(i+1) * 3}0%`
    setTimeout(() => {
        i = i + 1
        circle[i].classList.add("active")
        prevBtn.removeAttribute("disabled")
        console.log(i,"n");
    }, 300);

    if (i === 3) {
        nextBtn.setAttribute("disabled", "button")
    }
})

prevBtn.addEventListener("click", () => {
    progress.style.width = `${(i * 30) - 30}%`;

    circle[i].classList.remove("active")
    i = i - 1
    console.log(i,"p")

    if (i == 0) {
        prevBtn.setAttribute("disabled", "button")
    }
})












// nextBtn.addEventListener("click",()=>{
//     currentActive++;

//     if(currentActive > circle.length){
//         currentActive = currentActive.length;
//     }

//     update();
// })


// prevBtn.addEventListener("click",()=>{
//     currentActive--;

//     if(currentActive < 1){
//         currentActive = 1;
//     }

//     update()
// })


// let update = ()=>{

//     circle.forEach((circle , idx)=>{
//         if(idx < currentActive){
//             circle.classList.add("active");
//         }
//         else{
//             circle.classList.remove("active")
//         }
//     });

//     let active = document.querySelectorAll(".active");
    
//     progress.style.width = (active.length - 1) / (circle.length - 1) * 100 +"%"

//     if(currentActive == 1){
//         prevBtn.disabled = true;
//     }
//     else if(currentActive == circle.length){
//         nextBtn.disabled = true;
//     }
//     else{
//         prevBtn.disabled = false;
//         nextBtn.disabled = false;
//     }
// }