//colocar o coódigo aqui...
const hoursElement = document.getElementById('hours') 
const minutesElement = document.getElementById('minutes')
const secondsElement = dcument.getElementById('seconds')

const date = new date();

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

hoursElement.textContent = fixTime (hours)
minutesElement.textContent = fixTime (minutes)
secondsElement.textContent = fixTime (seconds)

function fixTime{
    return time <10 ? '0' <+ time : time
}