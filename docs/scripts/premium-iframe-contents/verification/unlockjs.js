const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redirect = urlParams.get('redirect');

const submitBTN = document.getElementById("submit-btn-1");
const passwordBox = document.getElementById("password-box-1");
const passwordSuccess = document.getElementById("password-success")
const selfIframe = window.parent.document.getElementById("premuim-chromescripts-iframe-1");
const darkModeToggle = window.parent.document.getElementById("docs-settings-darkmode-switch");
const scriptFileBTNs = window.parent.document.getElementsByClassName("script-file-btn-1")
var colorTheme = localStorage.getItem("docs-settings-dark");

selfIframe.style.height = "190px"

function submitBTNPressed() {
  if (btoa(passwordBox.value) === "YWRtaW43NDYy") {
    passwordSuccess.textContent = "Correct Password";
    passwordSuccess.style.color = "#00ff00";
    window.location.href = `/docs/scripts/premium-iframe-contents/${redirect}`;
  } else {
    passwordSuccess.textContent = "Incorrect Password";
    passwordSuccess.style.color = "#ff0000";
  }
}

for (i = 0; i < scriptFileBTNs.length; i++) {
  scriptFileBTNs[i].removeAttribute("href")
  scriptFileBTNs[i].style.display = "none"
}

document.body.style.background = "rgb(255, 238, 217)";

if (colorTheme === "true") {
  passwordBox.style.background = "#202025";
  passwordBox.style.color = "white";
  document.body.style.background = "rgb(21, 24, 26)";
  document.body.style.color = "white";
}

darkModeToggle.addEventListener("click", (e) => {
  window.location.reload()
});

document.addEventListener("keypress", (e) => {
  if (String(e.key) === "Enter") {
    submitBTNPressed()
  }
});

submitBTN.addEventListener("click", (e) => {
  submitBTNPressed()
});


