const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const number = urlParams.get('n');

document.getElementById("call-text").innerHTML = `Calling: <strong>${number}</strong>`
document.getElementById("hangup-btn").addEventListener("click", (e) => {
  window.location.href = "/apps/RealPhone"
})

var clean_uri = location.protocol +"//"+ location.host + location.pathname;
window.history.replaceState({}, document.title, clean_uri);