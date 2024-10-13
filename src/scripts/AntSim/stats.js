let antsimInfo
let loaded = false
const visitsCount = document.querySelector("#visits-num")
const PlayersCount = document.querySelector("#active-num")
const favsCount = document.querySelector("#favs-num")

fetch('https://games.roproxy.com/v1/games?universeIds=3810546353', {
  headers: {
    'accept': 'application/json',
  }
}).then(response=>response.json()).then(data=>{
  antsimInfo = data.data[0];
  
  console.log(antsimInfo)

  visitsCount.textContent = antsimInfo.visits
  PlayersCount.textContent = antsimInfo.playing
  favsCount.textContent = antsimInfo.favoritedCount
})