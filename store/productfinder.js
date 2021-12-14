const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product'); 
const generalitem = urlParams.get('mp'); 

var productpath = "https://reddstone35.com/files/download/programs/" + product;

var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', productpath, false);
request.send(); // there will be a 'pause' here until the response to come.
// the object request will be actually modified
if (request.status === 404) {
  history.back()
  window.close()
  throw new Error("Product not found")
}


document.write("Thank you for downloading " + generalitem);


window.location.href = productpath;


