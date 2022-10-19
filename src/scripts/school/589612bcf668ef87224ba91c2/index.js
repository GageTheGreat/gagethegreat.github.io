const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const friendcode = urlParams.get('access')

if (friendcode === "9bd6b3f46a45dab6653fb7bc8263ae982f845288cdcfba4494") {
  window.location.href = "/%64%61%74%61%2f%30%39%31%33%32%30%32%32%30%38%32%34%35%31%31%5f%53%43%48%2f%49%4d%47%2f%65%32%31%66%38%34%37%33%35%62%62%61%65%63%33%66%31%33%30%63%62%61%64%34%38%66%39%34%30%34%63%33%31%31%66%34%34%34%34%38%62%37%32%32%33%32%30%37%63%38%31%30%35%38%39%38%36%33%64%63%30%62%37%32%33%38%35%36%64%35%38%30%34%61%33%31%31%39%33%64%38%65%30%34%61%33%39%63%36%63%61%64%39%64%32%32%30%37%34%62%66%36%66%62%31%38%38%31%38%38%63%34%33%38%62%30%63%61%36%63%32%34%64%37%36%37%32%62%2e%6a%70%67"
}

var SBTN1O = document.getElementById("794cac5da00c5a2ac0532bdcd");
var SBTN2A = document.getElementById("826a7a8b322fcc5bc4ada5c7b");
var CCFSBTN1O = 0;
var CCFSBTN2A = 0;
var PWFSCHGHA = undefined

SBTN1O.addEventListener("click", (e) => {
  CCFSBTN1O += 1;
});
SBTN2A.addEventListener("click", (e) => {
  CCFSBTN2A += 1;
});

function passSet(STR) {
  PWFSCHGHA = STR
}

function cmd(CMD) {
  if (CMD === 'reset') {
    CCFSBTN1O = 0
    CCFSBTN2A = 0 
  } else if (CMD === "chkcreds") {
    checkCredentials()
  }
}

function checkCredentials() {
  if (CCFSBTN1O === 14 && CCFSBTN2A === 8 && PWFSCHGHA === "ZUVF72") { 
    window.location.href = "/%64%61%74%61%2f%30%39%31%33%32%30%32%32%30%38%32%34%35%31%31%5f%53%43%48%2f%49%4d%47%2f%65%32%31%66%38%34%37%33%35%62%62%61%65%63%33%66%31%33%30%63%62%61%64%34%38%66%39%34%30%34%63%33%31%31%66%34%34%34%34%38%62%37%32%32%33%32%30%37%63%38%31%30%35%38%39%38%36%33%64%63%30%62%37%32%33%38%35%36%64%35%38%30%34%61%33%31%31%39%33%64%38%65%30%34%61%33%39%63%36%63%61%64%39%64%32%32%30%37%34%62%66%36%66%62%31%38%38%31%38%38%63%34%33%38%62%30%63%61%36%63%32%34%64%37%36%37%32%62%2e%6a%70%67"
  }
}