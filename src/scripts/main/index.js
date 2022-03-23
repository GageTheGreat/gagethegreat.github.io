_fontSize = 17.6445
document.getElementById('docs-script-make-font-bigger-1').addEventListener("click", function(e) {
  _fontSize++
  document.getElementById("docs-script-aria-1").style.fontSize = `${_fontSize}px`
});
document.getElementById('docs-script-make-font-smaller-1').addEventListener("click", function(e) {
  _fontSize--
  document.getElementById("docs-script-aria-1").style.fontSize = `${_fontSize}px`
});