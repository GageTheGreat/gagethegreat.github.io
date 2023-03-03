const sidebarBTN = document.getElementById("nav-sidebar-manu-btn");
const parentDocument = window.parent.document;
const sidebar = parentDocument.getElementById("sidebar-main-1");
const navPageTitle = document.getElementById("nav-page-title-1")
sidebar.style.left = "-340px";

sidebarBTN.addEventListener("click", (e) => {
  if (sidebar.style.left === "-340px") {
    sidebar.style.left = "0";
    parentDocument.body.style.overflow = "hidden";
  } else if (sidebar.style.left === "0px") {
    sidebar.style.left = "-340px";
    parentDocument.body.style.overflow = "auto";
  }
});

parentDocument.addEventListener("mousedown", function(e) {
  console.log(parentDocument.getElementsByTagName("html")[0].contains(e.target))
  if (!sidebar.contains(e.target) && !sidebarBTN.contains(e.target) || parentDocument.getElementsByTagName("html")[0].contains(e.target)) {
    
    sidebar.style.left = "-340px";
    parentDocument.body.style.overflow = "auto";
  }
});


document.addEventListener("mousedown", function(e) {
  console.log(parentDocument.getElementsByTagName("html")[0].contains(e.target))
  if (!sidebar.contains(e.target) && !sidebarBTN.contains(e.target) || parentDocument.getElementsByTagName("html")[0].contains(e.target)) {
    
    sidebar.style.left = "-340px";
    parentDocument.body.style.overflow = "auto";
  }
});

function checkPage() {
  var currentPage = window.parent.location.pathname;
  if (currentPage === "/") {
    navPageTitle.textContent = "Home"
  } else if (RegExp("\/discord*").test(currentPage)) {
    navPageTitle.textContent = "Discord"
  } else if (RegExp("\/store*").test(currentPage)) {
    navPageTitle.textContent = "Store"
  } else if (RegExp("\/socials*").test(currentPage)) {
    navPageTitle.textContent = "Socials"
  } else if (RegExp("\/docs*").test(currentPage)) {
    navPageTitle.textContent = "Docs"
  } else if (RegExp("\/school*").test(currentPage)) {
    navPageTitle.textContent = "School"
  } else if (RegExp("\/func*").test(currentPage)) {
    navPageTitle.textContent = "Function"
  } else if (RegExp("\/games*").test(currentPage)) {
    navPageTitle.textContent = "Games"
  } else if (RegExp("\/placeholder*").test(currentPage)) {
    navPageTitle.textContent = "Other"
  } else {
    navPageTitle.textContent = "Other"
  }
}

checkPage()

