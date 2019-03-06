function hello() {
    console.log("hello!")
}

function runTitleAnimation() {
    console.log('hey')
    document.querySelector(".name-career p").style.animation = "1.5s rubberBand paused"
    document.querySelector(".name-career p").style.animation = "1.5s rubberBand running"
}

// window.addEventListener("resize", function () {
//     if(window.innerWidth < 700){
//         document.querySelector(".name-career h1").style.fontSize = "148px"
//     }
// })