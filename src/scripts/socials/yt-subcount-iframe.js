const closeBtn = document.getElementById("close-iframe-btn")
const refreshBtn = document.getElementById("refresh-iframe-btn")

// parent.window.addEventListener("resize", (e) => {
//   parent.document.getElementById("socials-youtube-subcount-iframe").style.width = `${parent.window.scrollWidth}px`
//   parent.document.getElementById("socials-youtube-subcount-iframe").style.height = `${parent.window.scrollHeight}px`
// });

closeBtn.addEventListener("click", (e) => {
  parent.document.getElementById("socials-youtube-subcount-iframe").style.display = "none"
  console.log(window.parent.document.getElementsByTagName("body")[0])
  window.parent.document.getElementsByTagName("body")[0].style.overflow = "overlay"

  console.log(parent.document.body.style.overflow) 
});

refreshBtn.addEventListener("click", (e) => {
  window.location.reload()
});