const sidebarBTN = document.getElementById("sidebar-open-close-btn")
const sidebar = document.getElementById("sidebar")

console.log("a")

sidebarBTN.addEventListener("click", (e) => {
  console.log("b")
  if (sidebar.classList.contains("sidebar-show")) {
    sidebar.classList.replace("sidebar-show", "sidebar-hide")
    document.body.style.overflow = "auto";
  } else {
    sidebar.classList.add("sidebar-show")
    sidebar.classList.remove("sidebar-hide")
    document.body.style.overflow = "hidden";
  }
});

document.addEventListener("mousedown", function(e) {
  // console.log(parentDocument.getElementsByTagName("html")[0].contains(e.target))
  if (!sidebar.contains(e.target) && !sidebarBTN.contains(e.target)) {
    sidebar.classList.replace("sidebar-show", "sidebar-hide")
    document.body.style.overflow = "auto";
  }
});