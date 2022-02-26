
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var teacherpass = urlParams.get('teacherpass');
const discode = urlParams.get('code');
const errorcode = urlParams.get('error');
var path = window.location.pathname;
var page = path.split("/").pop();


if (teacherpass === null && window.location.pathname === "/AJBot/login/teacher.html") {
  window.location.href = "/AJBot/login/"
}


console.log(teacherpass)


console.log(urlParams.get('error'))

teacherpass = hash(teacherpass)

teacherpass = String(teacherpass)

console.log(teacherpass)

function hash(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);           
}

sessionStorage.setItem('key', 48690)

//b3y$pn%hy26dbg?*zkxd^$pn$!n_v-
//console.log(window.location.pathname === "/AJBot/login/giverole.html")

var key = sessionStorage.setItem('key', 48690)

if (window.location.pathname === "/AJBot/login/teacher.html") {
  /*if (sessionStorage.getItem('teacherpass') === sessionStorage.getItem('key')) {
    document.getElementById('everything-container').style.display = "block"
    //window.location.href = "/AJBot/login/giverole.html"
    console.log('you did it')
  } else*/ if (teacherpass === sessionStorage.getItem('key')) {
    document.getElementById('everything-container').style.display = "block"
    //sessionStorage.setItem('teacherpass', teacherpass)
    //window.location.href = "/AJBot/login/giverole.html"
    console.log('you did it')
  } else {
    document.getElementById('everything-container').remove()
    document.write('Invalid Password')
    //window.location.href = "/AJBot/login/giverole.html"
  }
}

var clean_uri = location.protocol + "//" + location.host + location.pathname;
window.history.replaceState({}, document.title, clean_uri);
