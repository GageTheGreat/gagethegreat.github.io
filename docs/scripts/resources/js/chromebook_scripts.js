// ###############################
// #    Chromebook JS scripts    #
// # Made by Super Secret Person #
// ###############################

// dev tools console - unblocked
function CheckForConsoleLog(txt) {
  if (txt.includes('console.log')) {
    var newCode = txt.replace('console.log', 'alert');
    return newCode;
  } else {
    return txt;
  }
}

try {
  code = window.prompt('Enter code to execute:');
  eval(CheckForConsoleLog(code));
} catch (ReferenceError) {
  let code = window.prompt('Enter code to execute:');
  eval(CheckForConsoleLog(code));
}

// calculator - for cheating - doesn't show on history
try {
  try {
    nums = window.prompt('Enter Numbers to calculate');
    alert(eval(nums));
  } catch (error) {
    alert('You must type a valid problem. (ex. 5+5)');
  }
} catch (ReferenceError) {
  try {
    let nums = window.prompt('Enter Numbers to calculate');
    alert(eval(nums));
  } catch (error) {
    alert('You must type a valid problem. (ex. 5+5)');
  }
}

//fake web error - for making teachers think the website is broken.
var errorCode = window.prompt("What error are you planning on triggering. (Enter error code):");
if (errorCode == "400") {
  document.write(`<title>400 | Bad Request</title><h1>400 - Bad Request</h1>The request sent to the host: ${window.location.hostname} was incorrect. You can try visiting this page at a later time.`);
} else if (errorCode == "403") {
  document.write(`<title>403 | Forbidden</title><h1>403 - Forbidden</h1>The web page: ${window.location.hostname + window.location.pathname} is not accessible. You can try visiting this page at a later time.`);
} else if (errorCode == "404") {
  document.write(`<title>404 | Not Found</title><h1>404 - Not Found</h1>The web page: ${window.location.hostname + window.location.pathname} was not found. You can try visiting this page at a later time.`);
} else if (errorCode == "500") {
  document.write(`<title>500 | Internal Server Error</title><h1>500 - Internal Server Error</h1>The server at host ${window.location.hostname} cannot handle this request. You can try visiting this page at a later time.`);
} else if (errorCode == "429") {
  document.write(`<title>429 | Too Many Requests</title><h1>429 - Too Many Requests</h1>You have sent too many requests to the server at host: ${window.location.hostname}. Wait a moment, and try again.`);
} else {
  alert("That code is not supported. Find supported codes at: https://reddstone35.com/redirect?token=DOC_tS-UMKsPfiftRcjYTEFpP5tyF34FhAwiv");
}

//write text to document
try {
  let SCHHSCRIPTtext = window.prompt('what text do you want?');
  let SCHHSCRIPTcolor = window.prompt('what text color do you want?');
  let SCHHSCRIPTsize = window.prompt('what text size do you want?');
  let SCHHSCRIPTborder = window.prompt('what border do you want?');
  let SCHHSCRIPTfont = window.prompt('what font do you want?');
  let SCHHSCRIPTstyle = window.prompt('what text style do you want?');

  try {
    document.write(
      `<p style="color:${SCHHSCRIPTcolor};font-size:${SCHHSCRIPTsize};border:${SCHHSCRIPTborder};font-family:${SCHHSCRIPTfont};text-decoration:${SCHHSCRIPTstyle};">${SCHHSCRIPTtext}<p>`
    );
  } catch (error) {
    alert('An error occurred, check spelling and try again.');
  }
} catch (ReferenceError) {
  SCHHSCRIPTtext = window.prompt('what text do you want?');
  SCHHSCRIPTcolor = window.prompt('what text color do you want?');
  SCHHSCRIPTsize = window.prompt('what text size do you want?');
  SCHHSCRIPTborder = window.prompt('what border do you want?');
  SCHHSCRIPTfont = window.prompt('what font do you want?');
  SCHHSCRIPTstyle = window.prompt('what text style do you want?');

  try {
    document.write(
      `<p style="color:${SCHHSCRIPTcolor};font-size:${SCHHSCRIPTsize};border:${SCHHSCRIPTborder};font-family:${SCHHSCRIPTfont};text-decoration:${SCHHSCRIPTstyle};">${SCHHSCRIPTtext}<p>`
    );
  } catch (error) {
    alert('An error occurred, check spelling and try again.');
  }
}

//edit text
document.designMode='on';
document.body.contentEditable='true';
void 0;

//change tab title
var newTitle = window.prompt("What do you want the title to be?");
document.title = newTitle;
void 0;

//change tab icon
var newIcon = window.prompt("What do you want the icon to be? (ex: https://example.com/newicon.ico)");
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = newIcon;
document.getElementsByTagName('head')[0].appendChild(link);