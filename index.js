const timerTabBtn = document.getElementById("timerTabConatiner")
const timerView = document.getElementById("timerView")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn")

const speaker = document.getElementById("speaker")
const stopwatchTabBtn = document.getElementById("stopwatchTabConatiner")
const stopwatchView = document.getElementById("stopwatchView")


const timerHour = document.getElementById("timerHour")
const timerHourIcon = document.getElementById("timerHourIcon")

const timerMin = document.getElementById("timerMin")
const timerMinIcon = document.getElementById("timerMinIcon")


const timerSec = document.getElementById("timerSec")


const InputView = document.getElementById("Input")

const hourInput = document.getElementById("hourInput")
const minsInput = document.getElementById("minsInput")
const secInput = document.getElementById("secInput")

var loopFlag = 0


InputView.style.display = 'none'



function reset() {
    loopFlag = false;
    secInput.value = 0
    minsInput.value = 5
    hourInput.value = 0

}
reset()
function checkEmptyInputs() {
    if ((0 == timerHour.innerText || "" == timerHour.innerText)) {
        timerHour.style.display = "none";
        timerHourIcon.style.display = "none";
        0 == timerHour.innerText

        if (0 == timerMin.innerText || "" == timerMin.innerText) {
            timerMin.style.display = "none";
            timerMinIcon.style.display = "none";
            0 == timerMin.innerText

            if (0 == timerSec.innerText || "" == timerSec.innerText) {
                timerMin.innerText = 5
                0 == timerSec.innerText
            }
        }
    }

}



function inputMode() {
    timerView.style.display = 'none'
    InputView.style.display = 'inline'
}

function timerMode() {
    timerView.style.display = 'inline'
    InputView.style.display = 'none'
}

function clickedBtn(i) {

    InputView.style.display = 'none'
    startBtn.style.display = 'inline'
    stopBtn.style.display = 'none'
    loopFlag = false;
    reset()
    if (i) {
        timerTabBtn.style.borderBottomColor = '#89b4f8'
        timerTabBtn.style.color = '#89b4f8'
        timerView.style.display = 'inline'
        speaker.style.display = 'inline'


        stopwatchView.style.display = 'none'
        stopwatchTabBtn.style.borderBottomColor = '#00000000'
        stopwatchTabBtn.style.color = '#979aa1'
    } else {
        stopwatchTabBtn.style.borderBottomColor = '#89b4f8'
        stopwatchTabBtn.style.color = '#89b4f8'
        stopwatchView.style.display = 'inline'

        speaker.style.display = 'none'
        timerView.style.display = 'none'
        timerTabBtn.style.borderBottomColor = '#00000000'
        timerTabBtn.style.color = '#979aa1'

    }
}

function finish() {
    clearTimeout(timerLoop)
}
function start() {
    loopFlag = true;

    stopBtn.style.display = 'inline'
    startBtn.style.display = 'none'


    const secondUnit = 1000,
        minutsUnit = secondUnit * 60,
        hourUnit = minutsUnit * 60;

    // var hours = hourInput.value,
    //     mins = minsInput.value,
    //     secs = secInput.value;

    let timeBySec = (secInput.value)
    let timeByMin = (minsInput.value)
    let timeByHour = (hourInput.value)


    function changeHours() {
        (timeByHour != 0) ? (timeByHour = --timeByHour, timeByMin += 59) : (reset());
        timerHour.innerText = (timeByHour)
    }

    function changeMins() {
        (timeByMin != 0) ? (timeByMin = --timeByMin, timeBySec += 59) : (changeHours());
        timerMin.innerText = (timeByMin)
    }


    function changeSecs() {
        if (loopFlag) {
            (timeBySec != 0) ? (timeBySec = --timeBySec) : (changeMins());
            timerSec.innerText = (timeBySec)
            timerMin.innerText = (timeByMin)
            timerHour.innerText = (timeByHour)

        }
    }
    changeSecs()

    var timerLoop = setInterval(() => changeSecs(), secondUnit)
    timerLoop

    timerMode()
    checkEmptyInputs()


}
function stop() {
    startBtn.style.display = 'inline'
    stopBtn.style.display = 'none'

    loopFlag = false;
}


checkEmptyInputs()
clickedBtn(true)

timerTabBtn.onclick = _ => { clickedBtn(true) }
stopwatchTabBtn.onclick = _ => { clickedBtn(false) }


timerView.onclick = _ => { inputMode() }

startBtn.onclick = _ => { start() }
stopBtn.onclick = _ => { stop() }
resetBtn.onclick = _ => { reset() }