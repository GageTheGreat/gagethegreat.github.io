window.onload = function(e) {
  if (sessionStorage.getItem("sidebarIsVisisble") === "false") {
    document.getElementById("sidebar").style.transitionDuration = "0ms"
    document.getElementById("sidebar").style.left  = "-260px";
    document.getElementById("body").style.overflow = "overlay"
    setTimeout(() => {
      document.getElementById("sidebar").style.transitionDuration = "0.3s"
    }, 300);
  } else {
    document.getElementById("sidebar").style.transitionDuration = "0ms"
    document.getElementById("sidebar").style.left  = "0px";
    document.getElementById("body").style.overflow = "hidden"
    setTimeout(() => {
      document.getElementById("sidebar").style.transitionDuration = "0.3s"
    }, 300);
  } 
};

document.getElementById("navlist-button").addEventListener("click", function(e) {
  if (sessionStorage.getItem("sidebarIsVisisble") === "false") {
    document.getElementById("sidebar").style.left  = "0px";
    sessionStorage.setItem("sidebarIsVisisble", true)
    document.getElementById("body").style.overflow = "hidden"
  } else if (sessionStorage.getItem("sidebarIsVisisble") === "true") {
    document.getElementById("sidebar").style.left  = "-260px";
    sessionStorage.setItem("sidebarIsVisisble", false)
    document.getElementById("body").style.overflow = "overlay"
  } else {
    document.getElementById("sidebar").style.left  = "0px";
    sessionStorage.setItem("sidebarIsVisisble", true)
    document.getElementById("body").style.overflow = "hidden"
  }
});

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById('sidebar');
  let button = document.getElementById("navlist-button")
  if (!container.contains(e.target) && !button.contains(e.target)) {
    document.getElementById("sidebar").style.left  = "-260px";
    sessionStorage.setItem("sidebarIsVisisble", false)
    document.getElementById("body").style.overflow = "overlay"
  }
});

document.getElementById("sidebutton-not-availible").addEventListener("click", function(e) {
  alert("That feature is unavailible.")
});