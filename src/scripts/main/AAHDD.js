const AndrewP1 = document.getElementById("andrew-pic-1")
const AndrewP2 = document.getElementById("andrew-pic-2")
const AndrewP3 = document.getElementById("andrew-pic-3")

const AllAndrewPics = [AndrewP1,AndrewP2,AndrewP3]

AndrewP1.addEventListener("click", () => {
  if (AndrewP1.classList.contains("andrew-images-visible")) {
    AndrewP1.classList.remove("andrew-images-visible")
  } else {
    AndrewP1.classList.add("andrew-images-visible")
  }
});

AndrewP2.addEventListener("click", () => {
  if (AndrewP2.classList.contains("andrew-images-visible")) {
    AndrewP2.classList.remove("andrew-images-visible")
  } else {
    AndrewP2.classList.add("andrew-images-visible")
  }
});

AndrewP3.addEventListener("click", () => {
  if (AndrewP3.classList.contains("andrew-images-visible")) {
    AndrewP3.classList.remove("andrew-images-visible")
  } else {
    AndrewP3.classList.add("andrew-images-visible")
  }
});