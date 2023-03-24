const createButton = document.getElementById("create-button");
const link = document.getElementById("link-input");
const title = document.getElementById("title-input");
const bookmark = document.getElementById("bookmark");
const bookmarkLink = document.getElementById("bookmark-link");

createButton.addEventListener("click", (e) => {
  var _link = link.value
  var _title = title.value

  bookmark.href = _link
  bookmark.innerText = _title
  bookmarkLink.innerText = _link.slice("0", "50")
  if (_link.length > 50) {
    bookmarkLink.innerText += "..."
  }
});