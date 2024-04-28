const progress = 52

const barInner = document.querySelector("#bar-inner")
const barOuter = document.querySelector("#bar-outer")
const percentageView = document.querySelector("#percentage-done")

console.log(barInner)

barInner.style.width = `${progress}%`

if (progress >= 100) {
  percentageView.textContent = `${progress}% COMPLETE!`
} else {
  percentageView.textContent = `${progress}% Complete`
}