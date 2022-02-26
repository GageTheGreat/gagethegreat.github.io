function validateTeacher() {
  var teacherform = document.forms["selectteach"]["whoareyou"].value;
  if (teacherform === "null") {
    document.getElementById('teacher-select-submit').disabled = true;
    document.getElementById('teacher-select-submit').className = "submit-b-aj-login-disabled"
  } else {
    document.getElementById('teacher-select-submit').disabled = false
    document.getElementById('teacher-select-submit').className = "submit-b-aj-login"
  }
}