const key = 'AIzaSyBvq4st9BGVbJn3tFG03Ioy1G9K6yqfFzo';

var _data

var gageSubs
var justiceSubs
var aidenSubs
var renSubs
var zavierSubs

var gageSubsDOM = document.getElementById("yt-gage-subs")
var justiceSubsDOM = document.getElementById("yt-justice-subs")
var aidenSubsDOM = document.getElementById("yt-aiden-subs")
var renSubsDOM = document.getElementById("yt-ren-subs")
var zavierSubsDOM = document.getElementById("yt-zavier-subs")

function loadDOM() {
  gageSubsDOM.innerText = gageSubs;
  justiceSubsDOM.innerText = justiceSubs;
  renSubsDOM.innerText = renSubs;
  aidenSubsDOM.innerText = aidenSubs;
  zavierSubsDOM.innerText = zavierSubs;
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
        console.log(data)
        _data = data['items'][0].statistics.subscriberCount;
        console.log(user + " " + _data)
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
