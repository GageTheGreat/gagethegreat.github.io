// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// document.getElementById("reddstone35com-btn").addEventListener("onclick", function(e) {
//   console.log("")
//   shell.openExternal('https://reddstone35.com')
// });

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const participantQuery = urlParams.get('participants');



console.log("Oh, hello there!")
let participants = []
let p = document.createElement("p")
let count = 0
let br = document.createElement("br")
let rollBTN = document.getElementById("giveaway-roll-btn")
let addParticipantsInput = document.getElementById("add-participants")
let participantBox = document.getElementById("participants-list")
var winner



window.onload = () => {
  //localStorage.setItem("par_s", "")
  if (localStorage.getItem("par_s") !== null) {
    participants = JSON.parse(localStorage.getItem("par_s"))
    for (var i = 0; i < participants.length; i++) {
      count = i + 1
      participantBox.append(document.createElement("parcard")/*.innerHTML = addParticipantsInput.value*/)
      document.getElementsByTagName("parcard")[i].textContent = participants[i]
      document.getElementsByTagName("parcard")[i].classList.add("participant-card")
      document.getElementsByTagName("parcard")[i].id = `parcard${i}`
      participantBox.append(document.createElement("br"))
      participantBox.append(document.createElement("br"))
      participantBox.append(document.createElement("br"))
      //count = participants.length
    } 
  }
  if (participantQuery !== undefined) {
    participants = JSON.parse(participantQuery)
    for (var i = 0; i < participants.length; i++) {
      count = i + 1
      participantBox.append(document.createElement("parcard")/*.innerHTML = addParticipantsInput.value*/)
      document.getElementsByTagName("parcard")[i].textContent = participants[i]
      document.getElementsByTagName("parcard")[i].classList.add("participant-card")
      document.getElementsByTagName("parcard")[i].id = `parcard${i}`
      participantBox.append(document.createElement("br"))
      participantBox.append(document.createElement("br"))
      participantBox.append(document.createElement("br"))
      localStorage.setItem("par_s", JSON.stringify(participants))
      //count = participants.length
    } 
  }
}

document.addEventListener("keypress", (e) => {
  if (String(e.key) === "Enter" && addParticipantsInput.value !== "") {
    participantBox.append(document.createElement("parcard")/*.innerHTML = addParticipantsInput.value*/)
    document.getElementsByTagName("parcard")[count].textContent = addParticipantsInput.value
    document.getElementsByTagName("parcard")[count].classList.add("participant-card")
    document.getElementsByTagName("parcard")[count].id = `parcard${count}`
    participants.push(addParticipantsInput.value)
    participantBox.append(document.createElement("br"))
    participantBox.append(document.createElement("br"))
    participantBox.append(document.createElement("br"))
    addParticipantsInput.value = ""
    count++
  }
})

for (var i = 0; i < document.getElementsByTagName("parcard").length; i++) {
  document.getElementsByTagName("parcard" + i).addEventListener("click", (e) => {
    console.log("hi")
    e.target.remove()
  })
}

rollBTN.addEventListener("click", (e) => {
  if (participants[0] !== undefined) {
    var maxPeople = participants.length
    var winnerNumber = Math.floor(Math.random() * maxPeople)
    winner = participants[winnerNumber]
    console.log(winner)
    // console.log(participants[winner] + " wins!")
    document.body.style.overflow = "hidden"
    document.getElementById("win-ann-mess").style.display = "block"
    document.getElementById("win-ann-dim").style.display = "block"
    document.getElementById("win-ann-mess").style.animation = "winner-announce-anim 1s forwards"
    document.getElementById("win-ann-dim").style.animation = "winner-announce-anim 1s forwards"
    setTimeout(() => {
      document.getElementById("winner-announcement").textContent = "And the winner is: "
      document.getElementById("winner").style.animation = "glow-rainbow 6s infinite"
      document.getElementById("winner").textContent = winner
      setTimeout(() => {
        document.getElementById("winner-close-btn").style.display = "block"
        document.getElementById("winner-close-btn").style.animation = "winner-announce-anim 1s forwards"
      }, 2000);
    }, 3000);
  }
})

document.getElementById("winner-close-btn").addEventListener("click", (e) => {
  document.getElementById("win-ann-mess").style.display = "none"
  document.getElementById("win-ann-dim").style.display = "none"
  winner = ""
  document.getElementById("winner-announcement").textContent = "And the winner is"
  document.getElementById("winner").textContent = "..."
  document.getElementById("winner").style.animation = ""
  document.body.style.overflow = "overlay"
  document.getElementById("winner-close-btn").style.display = "none"
})
document.getElementById("par-clear-list").addEventListener("click", (e) => {
  participants = []
  localStorage.setItem("par_s", JSON.stringify(participants))
  window.location.reload()
})
document.getElementById("par-save-list").addEventListener("click", (e) => {
  localStorage.setItem("par_s", JSON.stringify(participants))
})
