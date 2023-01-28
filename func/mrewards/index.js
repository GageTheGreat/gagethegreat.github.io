var openTabsBtn = document.getElementById("openTabsBtn")
var openWin = undefined
// var randStringChars = "abcdefghijklmonpqrstuvwxyz"
var randStringChars = "abcdef1234567890"
var randString = ""

function createRandString() {
  randString = ""
  for (var i = 0; i < 32; i++) {
    randString += randStringChars.charAt(Math.floor(Math.random() * randStringChars.length));
  }

  return randString
}

function createTabs() {
  modemClose()
  for (var i = 0; i < 40; i++) {
    openWin = window.open("https://www.bing.com/search?q=RewardsAuto_" + createRandString())
    if(openWin === null && i === 1 || !openWin && i === 1 || openWin.closed && i === 1 || typeof openWin.closed=='undefine+d' && i === 1) 
    { 
      alert("You need to enable popups to continue.")
    }
  }
}

console.log(openWin)
openTabsBtn.addEventListener("click", (e) => {
  modemShow("Flash and lag warning. Do not continue if your pc is slow. Click the x to abort.", "Continue", true, "createTabs()")
})

