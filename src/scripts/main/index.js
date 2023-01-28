var _modem_modem = document.getElementById("modem")
var _dim_modem = document.getElementById("modem-dim")
var _text_modem = document.getElementById("modem-text")
var _button_modem = document.getElementById("modem-button")
var _close_modem = document.getElementById("modem-close")

_close_modem.addEventListener("click", () => {
  modemClose()
})

function modemShow(text, buttonText, close_btn, continue_func) {
  _text_modem.textContent = text;
  _button_modem.innerText = buttonText;
  _modem_modem.style.display = "unset";
  _dim_modem.style.display = "unset";
  if (close_btn === true) {
    _close_modem.style.display = "unset"
  }
  _button_modem.addEventListener("click", (e) => {
    eval(continue_func)
  })
  document.body.style.overflow = "hidden"
}

function modemClose() {
  _modem_modem.style.display = "none";
  _dim_modem.style.display = "none";
  _text_modem.textContent = "";
  _button_modem.innerText = "";
  document.body.style.overflow = "overlay"
}