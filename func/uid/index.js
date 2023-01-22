const urlparams = new URLSearchParams(window.location.search);
const mode = urlparams.get("m");
var length = urlparams.get("l");
const customChars = urlparams.get("c");
var validChars = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var returnedCode = "";
var charIndex = Number

console.log(`%cHow to use:\n?m - mode, can be ['hex', 'hex.u', 'bin', 'num', 'str', 'str.l', 'str.u', 'nol', 'all', 'def', 'cus']\n?l - length, length of id\n?c - custom, specify custom character set when using custom mode`, 'font-size: 16px;font-family: verdana')

switch (mode) {
  case "hex":
    validChars = "abcdef1234567890";
    break;
  case "hex.u":
    validChars = "ABCDEF1234567890";
    break;
  case "bin":
    validChars = "001"
    break;
  case "num":
    validChars = "1234567890";
    break;
  case "str":
    validChars = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    break;
  case "str.l":
    validChars = "abcdefghijklmonpqrstuvwxyz";
    break;
  case "str.u":
    validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    break;
  case "nol":
    validChars = "abcdefghjkmonpqrstuvwxyzABCDEFGHJKMNOPQRSTUVWXYZ234567890";
    break;
  case "all":
    validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(!@)%^:"{};\'<>,`.>?|\\_+-=abcdefghijklmonpqrstuvwxyz';
    break;
  case "def":
    validChars = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    break;
  case "cus":
    validChars = customChars
    break;
  default:
    validChars = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";   
}

if (length === null || length === undefined || Number(length) === NaN) {
  length = 32
}

if (validChars === null || validChars === undefined || validChars === "" || validChars === " " || validChars === " ".repeat(validChars.length)) {
  returnedCode = "Custom character set cannot be empty while on custom mode";
} else {
  for (var i = 0; i < length; i++) {
    charIndex = Math.round(Math.random() * validChars.length)
    if (charIndex >= validChars.length) {
      charIndex = validChars.length - 1
    }
    returnedCode += validChars.charAt(charIndex);
  }
}

document.getElementsByTagName("pre")[0].innerText = returnedCode;
console.log(returnedCode)
setTimeout(() => {
  document.getElementsByTagName('script')[0].remove()
}, 10);

