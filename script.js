// DOM Elements
const likeButtons = document.querySelectorAll('.like-btn');
const newPostBtn = document.getElementById('newPostBtn');
const newPostForm = document.getElementById('newPostForm');
const newPostModal = document.getElementById('newPostModal');

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

// Modal Open
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Modal Close
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add Event Listener to New Post Button
newPostBtn.addEventListener('click', () => {
    openModal('newPostModal');
});

// Add Event Listener to Submit Button
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
        
        console.log('New Post:', newPost);

        closeModal('newPostModal');
        this.reset();
    }
}
);