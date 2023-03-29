const key = 'AIzaSyBvq4st9BGVbJn3tFG03Ioy1G9K6yqfFzo';
var firstTimeLoaded = false


var _data

var gageSubs
var justiceSubs
var aidenSubs
var renSubs
var zavierSubs

var gageCount = 0
var justiceCount = 0
var renCount = 0
var aidenCount = 0
var zavierCount = 0

var gageSubsDOM = document.getElementById("yt-gage-subs")
var justiceSubsDOM = document.getElementById("yt-justice-subs")
var aidenSubsDOM = document.getElementById("yt-aiden-subs")
var renSubsDOM = document.getElementById("yt-ren-subs")
var zavierSubsDOM = document.getElementById("yt-zavier-subs")

function loadDOM() {
  if (!firstTimeLoaded) {
    setInterval(() => {
      if (gageCount <= Number(gageSubs)) {
        gageSubsDOM.innerText = String(Number(gageCount).toLocaleString("en-US"))
        gageCount += 1
      }
    }, 14);
    setInterval(() => {
      if (justiceCount <= Number(justiceSubs)) {
        justiceSubsDOM.innerText = String(Number(justiceCount).toLocaleString("en-US"))
        justiceCount += 1
      }
    }, 21);
    setInterval(() => {
      if (renCount <= Number(renSubs)) {
        renSubsDOM.innerText = String(Number(renCount).toLocaleString("en-US"))
        renCount += 1
      }
    },  60);
    setInterval(() => {
      if (aidenCount <= Number(aidenSubs)) {
        aidenSubsDOM.innerText = String(Number(aidenCount).toLocaleString("en-US"))
        aidenCount += 1
      }
    }, 13);
    setInterval(() => {
      if (zavierCount <= Number(zavierSubs)) {
        zavierSubsDOM.innerText = String(Number(zavierCount).toLocaleString("en-US"))
        zavierCount += 1
      }
    }, 100);

    firstTimeLoaded = true

    setInterval(() => {
      loadSubs()
      setTimeout(() => {
        loadDOM()
      }, 2000);
    }, 15000);
  } else {
    gageSubsDOM.innerText = String(Number(gageSubs).toLocaleString("en-US"))
    justiceSubsDOM.innerText = String(Number(justiceSubs).toLocaleString("en-US"))
    renSubsDOM.innerText = String(Number(renSubs).toLocaleString("en-US"))
    aidenSubsDOM.innerText = String(Number(aidenSubs).toLocaleString("en-US"))
    zavierSubsDOM.innerText = String(Number(zavierSubs).toLocaleString("en-US"))
  }

}



function loadSubs() {
  getSubscribers("UCD349e-a-kPvixl31RI8-lg")
  getSubscribers("UC0ouJNIXzJEvtOCW7K7WoOw")
  getSubscribers("UCUDhyCHd6uzfDLxTfhT4CLQ")
  getSubscribers("UCn3c2g8wSZFICx5JMx9HOgw")
  getSubscribers("UCHxc8yzwrcWEuGnXSOvDMGg")
}

function getSubscribers(user) {
  if (user) {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${user}&key=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        _data = data['items'][0].statistics.subscriberCount;
        switch(user) {
          case "UCD349e-a-kPvixl31RI8-lg":
            justiceSubs = Number(_data).toLocaleString("en-US")
            break;
          case "UC0ouJNIXzJEvtOCW7K7WoOw":
            gageSubs = Number(_data).toLocaleString("en-US")
            break;
          case "UCUDhyCHd6uzfDLxTfhT4CLQ":
            aidenSubs = Number(_data).toLocaleString("en-US")
            break;
          case "UCn3c2g8wSZFICx5JMx9HOgw":
            renSubs = Number(_data).toLocaleString("en-US")
            break;
          case "UCHxc8yzwrcWEuGnXSOvDMGg":
            zavierSubs = Number(_data).toLocaleString("en-US")
            break;
        }
        loadDOM()
      });
  } 
}

getSubscribers()

loadSubs()

// setTimeout(() => {
//   loadSubs()
// }, 2000);
