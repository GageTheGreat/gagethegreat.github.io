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

console.log("Oh, hello there!")
let participants = []
let p = document.createElement("p")
let count = 0
let br = document.createElement("br")
let rollBTN = document.getElementById("giveaway-roll-btn")
let addParticipantsInput = document.getElementById("add-participants")
let participantBox = document.getElementById("participants-list")


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

// for (var i = 0; i < document.getElementsByTagName("parcard").length; i++) {
//   document.getElementById(`parcard${i}`).addEventListener("click", (e) => {
//     console.log("hi")
//     e.remove()
//   })
// }

rollBTN.addEventListener("click", (e) => {
  if (participants[0] !== undefined) {
    var maxPeople = participants.length
    var winnerNumber = Math.floor(Math.random() * maxPeople)
    var winner = participants[winnerNumber]
    console.log(winner)
    // console.log(participants[winner] + " wins!")
    document.getElementById("win-ann-mess").style.display = "block"
    document.getElementById("win-ann-dim").style.display = "block"
    document.getElementById("win-ann-mess").style.animation = "winner-announce-anim 1s forwards"
    document.getElementById("win-ann-dim").style.animation = "winner-announce-anim 1s forwards"
    setTimeout(() => {
      document.getElementById("winner-announcement").textContent = "And the winner is: "
      document.getElementById("winner").style.animation = "glow-rainbow 6s infinite"
      document.getElementById("winner").textContent = winner
    }, 3000);
  }
})
