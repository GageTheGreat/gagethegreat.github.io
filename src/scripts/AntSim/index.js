const progress = 64

const barInner = document.querySelector("#bar-inner")
const barOuter = document.querySelector("#bar-outer")
const percentageView = document.querySelector("#percentage-done")

console.log(barInner)

barInner.style.width = `${progress}%`

percentageView.textContent = `${progress}% Complete`