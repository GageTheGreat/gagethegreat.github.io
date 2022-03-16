var sidebarIsVisisble = false

document.getElementById("navlist-button").addEventListener("click", function(e) {
  if (sidebarIsVisisble === false) {
    document.getElementById("sidebar").style.left  = "0px";
    sidebarIsVisisble = true
  } else {
    document.getElementById("sidebar").style.left  = "-260px";
    sidebarIsVisisble = false
  }
});