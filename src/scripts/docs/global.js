if (localStorage.getItem("docs-settings-dark") === null) {
  localStorage.setItem("docs-settings-dark", "false")
}

var darkModeSwitch = document.getElementById("docs-settings-darkmode-switch")
darkModeSwitch.addEventListener('change', (e) => {
  if (darkModeSwitch.checked) {
    docsDarkMode(true)
  } else if (!darkModeSwitch.checked) {
    docsDarkMode(false)
  }
})

function docsDarkMode(on) {
  if (on) {
    document.getElementsByClassName("docs-section-main")[0].style.background = "#1f2226"
    document.getElementsByClassName("docs-section-main")[0].style.color = "#ffffff"
    document.querySelectorAll("hline")[0].style.borderColor = "#ffffff"
    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
      if (document.getElementsByTagName("a")[i].closest(".docs-section-main") && document.getElementsByTagName("a")[i].classList[0] !== "default-btn" && document.getElementsByTagName("a")[i].closest(".docs-section-main") && document.getElementsByTagName("a")[i].classList[0] !== "hidden-link" && document.getElementsByTagName("a")[i].parentElement.parentElement.parentElement.classList[0] !== 'main-navagation-bar-all') {
        document.getElementsByTagName("a")[i].style.color = "#429bf5"
      }
      
    }
    for (var i = 0; i < document.getElementsByClassName('hidden-link').length; i++) {
      document.getElementsByClassName("hidden-link")[i].style.color = "white"
    }

    if (document.querySelectorAll(".code-aria")[0] !== undefined) {
      for (i = 0; i < document.querySelectorAll(".code-aria").length; i++) {
        document.querySelectorAll(".code-aria")[i].style.backgroundColor = "#15181a"
      }
    }

    localStorage.setItem("docs-settings-dark", "true")
  } else if (!on) {
    document.getElementsByClassName("docs-section-main")[0].style.background = "#ffffff"
    document.getElementsByClassName("docs-section-main")[0].style.color = "#000000"
    document.querySelectorAll("hline")[0].style.borderColor = "#000000"
    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
      if (document.getElementsByTagName("a")[i].closest(".docs-section-main") && document.getElementsByTagName("a")[i].classList[0] !== "default-btn" && document.getElementsByTagName("a")[i].closest(".docs-section-main") && document.getElementsByTagName("a")[i].classList[0] !== "hidden-link" && document.getElementsByTagName("a")[i].parentElement.parentElement.parentElement.classList[0] !== 'main-navagation-bar-all') {
        document.getElementsByTagName("a")[i].style.color = "#0000ee"
      }
      
    }
    for (var i = 0; i < document.getElementsByClassName('hidden-link').length; i++) {
      document.getElementsByClassName("hidden-link")[i].style.color = "black"
    }
    if (document.querySelectorAll(".code-aria")[0] !== undefined) {
      document.querySelectorAll(".code-aria")[0].style.backgroundColor = "rgb(255, 238, 217)"
    }

    localStorage.setItem("docs-settings-dark", "false")
  }
}

if (localStorage.getItem("docs-settings-dark") === "true") {
  docsDarkMode(true)
  darkModeSwitch.checked = true
} else if (localStorage.getItem("docs-settings-dark") === "false") {
  docsDarkMode(false)
  darkModeSwitch.checked = false
}