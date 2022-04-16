var input = document.querySelector('input'); // get the input element
input.focus()
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    input.value = ""
    input.style.width = "0ch"
  }
})

document.addEventListener("click", (e) => {
if (e.target !== input)
  input.focus()
})

function resizeInput() {
  this.style.width = `100%`;
}