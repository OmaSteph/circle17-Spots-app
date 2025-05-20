const likeIcon = document.getElementById("like-icon");

let liked = false;

likeIcon.addEventListener("click", () => {
  liked = !liked;

  if (liked) {
    likeIcon.style.filter = "invert(17%) sepia(95%) saturate(7492%) hue-rotate(357deg) brightness(91%) contrast(104%)"; //red
  } else {
    likeIcon.style.filter = "none"; 
  }
});
