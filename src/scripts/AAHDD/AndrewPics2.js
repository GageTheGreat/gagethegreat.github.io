const clickDetector = document.getElementsByClassName("andrew-i-2-click-detector")

for  (i = 0; i < clickDetector.length; i++) {
  clickDetector[i].addEventListener("click", (e) => {
  var imageClicked = e.target.parentNode
  var pic = imageClicked.getElementsByTagName("img")[0]
  var btn = imageClicked.getElementsByTagName("span")[0]
  if (imageClicked.getElementsByTagName("span")[0].classList.contains("andrew-pics-btn-invisble")) {
    btn.classList.remove("andrew-pics-btn-invisble")
    pic.classList.remove("andrew-pics-a-visible")
  } else {
    btn.classList.add("andrew-pics-btn-invisble")
    pic.classList.add("andrew-pics-a-visible")
  }
  })
  clickDetector[i].parentNode.classList.remove("preload-andrew-pics")
}