const parentDocument = window.parent.document;
const sidebar = parentDocument.getElementById("sidebar-main-1");
const closeBTN = document.getElementById("nav-sidebar-close-btn");

closeBTN.addEventListener("click", (e) => {
  sidebar.style.left = "-340px"
  parentDocument.body.style.overflow = "overlay"
});