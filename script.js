<<<<<<< HEAD
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".post-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });
=======
// DOM Elements
const likeButtons = document.querySelectorAll('.like-btn');
const newPostBtn = document.getElementById('newPostBtn');
const newPostForm = document.getElementById('newPostForm');

// Like button functionality
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('fa-regular');
    button.classList.toggle('fa-solid');

    // Red color toggle
    if (button.classList.contains('fa-solid')) {
      button.style.color = 'red';
    } else {
      button.style.color = '';
    }
  });
});

// New post functionality
newPostBtn.addEventListener('click', function() {
    openModal('newPostModal');
});

newPostForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const imageFile = document.getElementById('postImage').files[0];

    if (imageFile) {
        const newPost = {
            image: URL.createObjectURL(imageFile),
            title: title,
            liked: false
        };
        
    posts.unshift(newPost); // Add to beginning
    renderPosts();
    closeModal('newPostModal');
    this.reset();
}
});
>>>>>>> main
