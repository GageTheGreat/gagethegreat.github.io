var generateBtn = document.getElementById("num-generate-btn")
var bestNumber = document.getElementById("best-number-label")
var historyInner = document.getElementById("num-his-inner")
var historyContainer = document.getElementById("num-his")
var attemptsContainer = document.getElementById("attempts-counter")
var bestNumColor
var number

if (localStorage.getItem("BestNum") === null) {
  localStorage.setItem("BestNum", 100)
}

if (localStorage.getItem("LNAttempts") === null) {
  localStorage.setItem("LNAttempts", 0)
}

attemptsContainer.textContent = "Attempts: " + localStorage.getItem("LNAttempts")

function updateBestNumColor() {
  if (localStorage.getItem("BestNum") < 0.1 && localStorage.getItem("BestNum") > 0.01) {
    bestNumColor = "#05fc32"
    console.log("1")
  } else if (localStorage.getItem("BestNum") < 0.01 && localStorage.getItem("BestNum") > 0.001) {
    console.log("1")
    bestNumColor = "#05fc80"
  } else if (localStorage.getItem("BestNum") < 0.001 && localStorage.getItem("BestNum") > 0.0001) {
    console.log("1")
    bestNumColor = "#05fcd7"
  } else if (localStorage.getItem("BestNum") < 0.0001 && localStorage.getItem("BestNum") > 0.00001) {
    console.log("1")
    bestNumColor = "#ae05fc"
  } else if (localStorage.getItem("BestNum") < 0.00001 && localStorage.getItem("BestNum") > 0.000001) {
    console.log("1")
    bestNumColor = "#fc05e7"
  } else if (localStorage.getItem("BestNum") < 0.000001 && localStorage.getItem("BestNum") > 0.0000001) {
    console.log("1")
    bestNumColor = "#fc0553"
  } else if (localStorage.getItem("BestNum") < 0.0000001) {
    console.log("1")
    bestNumColor = "#ff0000"
  } else if (localStorage.getItem("BestNum") > 0.1) {
    console.log("2")
    bestNumColor = "white"
  }
}

updateBestNumColor()

bestNumber.innerHTML = "Best Number: " + "<span id='bn-color' style='color:" + bestNumColor + ";' >" + localStorage.getItem("BestNum") + "</span>"

generateBtn.addEventListener("click", () => {
  var historyItem = document.createElement("div")
  number = Math.random() * 100
  historyItem.textContent = number
  if (number < 0.1 && number > 0.01) {
    historyItem.style.color = "#05fc32"
  } else if (number < 0.01 && number > 0.001) {
    historyItem.style.color = "#05fc80"
  } else if (number < 0.001 && number > 0.0001) {
    historyItem.style.color = "#05fcd7"
  } else if (number < 0.0001 && number > 0.00001) {
    historyItem.style.color = "#ae05fc"
  } else if (number < 0.00001 && number > 0.000001) {
    historyItem.style.color = "#fc05e7"
  } else if (number < 0.000001 && number > 0.0000001) {
    historyItem.style.color = "#fc0553"
  } else if (number < 0.0000001) {
    historyItem.style.color = "#ff0000"
  } 
  if (number < localStorage.getItem("BestNum")) {
    localStorage.setItem("BestNum", number)
    console.log(number + " NEW BEST")
    historyItem.textContent += " - NEW BEST"
    historyInner.appendChild(historyItem)
    document.getElementById("bn-color").style.color = historyItem.style.color
    updateBestNumColor()
    bestNumber.innerHTML = "Best Number: " + "<span id='bn-color' style='color:" + bestNumColor + ";' >" + localStorage.getItem("BestNum") + "</span>"
  } else {
    historyInner.appendChild(historyItem)
  }
  localStorage.setItem("LNAttempts", Number(localStorage.getItem("LNAttempts")) + 1)
  attemptsContainer.textContent = "Attempts: " + localStorage.getItem("LNAttempts")
  historyContainer.scrollTop = historyContainer.scrollHeight
});