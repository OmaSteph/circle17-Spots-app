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





// Profile Editing Functionality

function openEditForm() {
  document.getElementById('nameInput').value = document.getElementById('profileName').textContent;
  document.getElementById('descInput').value = document.getElementById('profileDesc').textContent;
  document.getElementById('imgInput').value = document.getElementById('profileImg').src;

  document.getElementById('modal').style.display = 'flex';
}

// Function to close the form
function closeEditForm() {
  document.getElementById('modal').style.display = 'none';
}

// Function to save the updated info
function saveProfile() {
  // Get new values from input boxes
  const name = document.getElementById('nameInput').value;
  const desc = document.getElementById('descInput').value;
  const img = document.getElementById('imgInput').value;

  // Update the profile info on the page
  document.getElementById('profileName').textContent = name;
  document.getElementById('profileDesc').textContent = desc;
  document.getElementById('profileImg').src = img;

  // Show the new info in the console
  console.log({ name, description: desc, image: img });

  // Close the form
  closeEditForm();
}