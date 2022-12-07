const timerTabBtn = document.getElementById("timerTabConatiner")
const timerView = document.getElementById("timerView")
const startBtn = document.getElementById("startBtn")
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

InputView.style.display = 'none'


/**
 * id="hourInput" 
 * id="minsInput"
 * id="secInput" /
 */



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
    console.log("HI");
}
function start() {
    if (startBtn.innerText === "START") {
        var hours = hourInput.value,
            mins = minsInput.value,
            secs = secInput.value;


        const secondUnit = 1000,
            minutsUnit = secondUnit * 60,
            hourUnit = minutsUnit * 60;

        timerHour.innerText = hourInput.value
        timerMin.innerText = minsInput.value
        timerSec.innerText = secInput.value

        const timeDur = (secs * secondUnit) + (mins * minutsUnit) + (hourUnit * hours)
        console.log(timeDur);
        setTimeout(_ => { finish() }, timeDur)



        timerMode()
        checkEmptyInputs()

        startBtn.innerText = "stop"
    } else {
        timerMode()
        checkEmptyInputs()
        startBtn.innerText = "START"
    }
}

function reset() {

    timerHour.innerText = 0
    timerMin.innerText = 5
    timerSec.innerText = 0
}


checkEmptyInputs()
clickedBtn(true)

timerTabBtn.onclick = _ => { clickedBtn(true) }
stopwatchTabBtn.onclick = _ => { clickedBtn(false) }


timerView.onclick = _ => { inputMode() }

startBtn.onclick = _ => { start() }
resetBtn.onclick = _ => { reset() }