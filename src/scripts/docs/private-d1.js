document.getElementById("condition-highlighter-rules").addEventListener("click", (e) => {
  document.getElementById("member-conditions").style.transition = "0.3s ease-in-out"
  document.getElementById("member-conditions").style.backgroundColor = "#f88d"
  setTimeout(() => {
    document.getElementById("member-conditions").style.backgroundColor = "#f881"
    setTimeout(() => {
      document.getElementById("member-conditions").style.backgroundColor = "#f88d"
      setTimeout(() => {
        document.getElementById("member-conditions").style.backgroundColor = "transparent"
      }, 250);
    }, 250);
  }, 250);
})