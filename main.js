window.addEventListener("DOMContentLoaded", (event) => {

    let cabbageNum = document.querySelector("#cabbageNum")
    const cabbageBtn = document.querySelector(".cabbageBtn")

    let timer;
    let timerSpeed = 500

    function Increment (){
        cabbageNum.innerText ++
        timer = setTimeout(Increment, timerSpeed)
    }

    function myStopFunction (){
        clearTimeout(timer)
    }

    cabbageBtn.addEventListener("mousedown", Increment)

    cabbageBtn.addEventListener("mouseup", myStopFunction)

    cabbageBtn.addEventListener("mouseleave", myStopFunction)
    
})

