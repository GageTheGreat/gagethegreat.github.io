const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fileCode = urlParams.get('q');

function redirect(_href) {
  window.location = _href
}

function getFile(_fileCode) {
  if (_fileCode === "ibrahim") {
    document.write("Redirecting..<a href=\"\">.</a><br>");
    document.write("stop trying to get Ibrahim");
  } else if (_fileCode === "test") {
    document.write(" to nowhere!")
  } else if (_fileCode === null){
    redirect("/?error=FILE_ID_NOT_FOUND")
  } else {
    redirect("/?error=FILE_UNKNOWN_ID")
  }
}

document.write("Redirecting...")

getFile(fileCode)