const searchParams = window.location.search;
const urlParams = new URLSearchParams(searchParams);
const q = urlParams.get("q");
document.getElementById("main-display").innerText=q.toString();
