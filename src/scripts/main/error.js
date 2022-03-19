const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const errorCode = urlParams.get('error');

if(errorCode !== null && errorCode !== undefined && !errorCode.includes("<")) {
  path = location.protocol + "//" + location.host + location.pathname

  alert(`An error occurred. Error code: ${errorCode}`)
  window.location = path
}


