// #########################
// # Chromebook JS scripts #
// #     Made by Gage      #
// #########################

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