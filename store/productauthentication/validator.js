const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('product'); 
const generalitem = urlParams.get('mp'); 
const productversion = urlParams.get('pv');
const tytext = urlParams.get('ty_t');

var productpath = `https://reddstone35.com/files/download/programs/${generalitem}/${product}`

var validmps = ["MoneySystem"]
var validty_t = ["Money System"]
var invalidpvchars = ['/','<','>','$','^','&','%','@','!']

var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', productpath, false);
request.send();
if (request.status === 404) {
  history.back();
  window.close();
  throw new Error("Product not found");
}
if (!validmps.includes(generalitem) || !validty_t.includes(tytext)) {
  history.back();
  window.close();
  throw new Error("Product not found");
}
for (var i = 0; i < productversion.length; i++) {
  productverchar = productversion[i];
  if(invalidpvchars.includes(productverchar)){
    history.back();
    window.close();
    throw new Error("Invalid char in productversion");
  }
}


document.write(`<p class=\"ty-mainthankstext\">Thank you for downloading ${tytext} ${productversion} </p>`);

document.write("<a href=\"javascript:history.back()\" class=\"ty-returntostore\">Return To Store</a>");

window.location.href = productpath;
