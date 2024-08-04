var generateBtn = document.getElementById("num-generate-btn")
var bestNumber = document.getElementById("best-number-label")
var historyInner = document.getElementById("num-his-inner")
var historyContainer = document.getElementById("num-his")
var attemptsContainer = document.getElementById("attempts-counter")
var bestNumColor
var number

var soundspath = "/src/sound/LowestNumber/"

if (localStorage.getItem("BestNum") === null) {
  localStorage.setItem("BestNum", 100)
}

if (localStorage.getItem("LNAttempts") === null) {
  localStorage.setItem("LNAttempts", 0)
}

attemptsContainer.textContent = "Attempts: " + Number(localStorage.getItem("LNAttempts")).toLocaleString("en-US")

function playSound(sound) {
  var audio = new Audio(soundspath + sound);
  audio.play();
}

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
    playSound("Level1.mp3")
  } else if (number < 0.01 && number > 0.001) {
    historyItem.style.color = "#05fc80"
    playSound("Level2.mp3")
  } else if (number < 0.001 && number > 0.0001) {
    historyItem.style.color = "#05fcd7"
    playSound("Level3.ogg")
  } else if (number < 0.0001 && number > 0.00001) {
    historyItem.style.color = "#ae05fc"
    playSound("Level4.mp3")
  } else if (number < 0.00001 && number > 0.000001) {
    historyItem.style.color = "#fc05e7"
    playSound("Level5.mp3")
  } else if (number < 0.000001 && number > 0.0000001) {
    historyItem.style.color = "#fc0553"
    playSound("Level5.mp3")
  } else if (number < 0.0000001) {
    historyItem.style.color = "#ff0000"
    playSound("Level5.mp3")
  } 

  playSound("PopSound.ogg")

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
  attemptsContainer.textContent = "Attempts: " + Number(localStorage.getItem("LNAttempts")).toLocaleString("en-US")
  historyContainer.scrollTop = historyContainer.scrollHeight
});