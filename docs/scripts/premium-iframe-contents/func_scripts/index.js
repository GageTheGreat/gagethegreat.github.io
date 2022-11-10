const darkModeToggle = window.parent.document.getElementById("docs-settings-darkmode-switch");
const parentDocument = window.parent.document;
const selfIframe = parentDocument.getElementById("premuim-chromescripts-iframe-1");
const scriptFileBTNs = parentDocument.getElementsByClassName("script-file-btn-1")
var colorTheme = localStorage.getItem("docs-settings-dark");

for (i = 0; i < scriptFileBTNs.length; i++) {
  scriptFileBTNs[i].setAttribute("href", "resources/js/premium_chromebook_scripts.js")
  scriptFileBTNs[i].style.display = "unset"
}

selfIframe.style.height = `${document.body.scrollHeight}px`

if (colorTheme === "true") {
  document.body.style.background = "rgb(21, 24, 26)";
  document.body.style.color = "white";
}

darkModeToggle.addEventListener("click", (e) => {
  window.location.reload()
});