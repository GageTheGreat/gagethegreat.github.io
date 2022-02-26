const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teacher_name = urlParams.get('whoareyou');


if (teacher_name === null) {
  window.location.href = "/AJBot/login/"
}

if (teacher_name === "selectyou") {
  history.back()
  window.close()
  throw new Error('invalid teacher')
} else if (teacher_name === "notonlist") {
  document.write('You are not on the list. You can contact reddstone35#9851 on discord if you think this is an error. You could also try waiting until you are added to the list, if you join the discord server and you haven\'t been added to the list for 2 days from joining contact reddstone35#9851 on discord')
} else {
  document.write('Hello, ' + teacher_name + ". One more step, Press complete to get the teacher role.<br>")
  document.write("<a class=\"finalcontinuebutton-a-aj-login\" href=\"/\">Complete</a>")
}

var clean_uri = location.protocol + "//" + location.host + location.pathname;
window.history.replaceState({}, document.title, clean_uri); 



