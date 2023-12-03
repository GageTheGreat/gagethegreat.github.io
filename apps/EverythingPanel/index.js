const buttons = document.getElementsByClassName("pbutton");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target.dataset.buttonid)
    if (e.target.dataset.buttonid === "1") {
      console.log("hi")
      Ev1()
    } else if (e.target.dataset.buttonid === "2") {
      Ev2()
    }
  })
}

function Ev1() {
  document.querySelector("#eventAudio").setAttribute("src", "/src/sound/Xenogenesis.mp3")
  document.querySelector("#eventAudio").currentTime = 0
  document.querySelector("#eventAudio").play()
}

function Ev2() {
  document.querySelector("#eventAudio").setAttribute("src", "/src/sound/VineBoom.wav")
  document.querySelector("#eventAudio").currentTime = 0
  document.querySelector("#eventAudio").play()
}