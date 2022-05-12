let homeBtn = document.getElementById('home-nav')
let discordBtn = document.getElementById('discord-nav')
let hcBtn = document.getElementById('hab1b1-nav')
let storeBtn = document.getElementById('store-nav')
let socialsBtn = document.getElementById('socials-nav')
let docsBtn = document.getElementById('docs-nav')

homeBtn.addEventListener("click", (e) => {
  parent.window.location.href = "/"
}) 

discordBtn.addEventListener("click", (e) => {
  parent.window.location.href = "/discord"
})

hcBtn.addEventListener("click", (e) => {
  parent.window.location.href = "https://hab1b1clan.github.io"
})

storeBtn.addEventListener("click", (e) => {
  parent.window.location.href = "/store"
})

socialsBtn.addEventListener("click", (e) => {
  parent.window.location.href = "/socials"
})

docsBtn.addEventListener("click", (e) => {
  parent.window.location.href = "/docs"
})

