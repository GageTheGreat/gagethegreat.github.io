// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let buttons = document.getElementsByClassName("num-btn")
let textOutput = document.getElementById("num-output")
let Output = ""


for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i]
  let number = button.innerHTML
  button.addEventListener("click", (e) => {
    if (textOutput.innerText.length < 10) { 
      Output = Output + number
      textOutput.textContent = Output
    }
  })
}

document.getElementById("clear-output").addEventListener("click", (e) => {
  Output = ""
  textOutput.textContent = ""
})

document.getElementById("call-num").addEventListener("click", (e) => {
  if (Output !== "")
  window.location.href = `calling?n=${Output}`
})