
const imageData = [
    {   
        title: `Val Thorens`,
        src: `CIRCLE 17 PICTURES/PICTURES/A very long bridge.png`
    },
   
    {
        title: `Restaurant Terrace`,
        src: `CIRCLE 17 PICTURES/PICTURES/Restaurant terrace.png`
    },

    {
        title: `An Outdoor Cafe`,
        src: `CIRCLE 17 PICTURES/PICTURES/An outdoor cafe.png`
    },

    {
        title: `A very long bridge`,
        src: `CIRCLE 17 PICTURES/PICTURES/A very long bridge.png`
    },

    {
        title: `Tunnel with morning light`,
        src: `CIRCLE 17 PICTURES/PICTURES/Tunnel with morning light.png`
    },

    {
        title: `Mountain house`,
        src: `CIRCLE 17 PICTURES/PICTURES/Mountain house.png`
    }
];

const postsContainer = document.getElementById("postContainer");
const modal = document.getElementById('myModal');

imageData.forEach (data => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const postCardImg = document.createElement('div');
    postCardImg.className = 'post-card-img'

    const img = document.createElement('img');
    img.src = data.src;
    img.className = 'post-img';
    
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const postName = document.createElement('p');
    postName.textContent = data.title;
    postName.className = 'post-name';

    const likeButton = document.createElement('button');
    likeButton.className = 'like-btn';
    
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';

    likeButton.appendChild(likeIcon);

    titleContainer.appendChild(postName);
    titleContainer.appendChild(likeButton);

    postCardImg.appendChild(img);
    postCard.appendChild(postCardImg);
    postCard.appendChild(titleContainer);

    postsContainer.appendChild(postCard);

    // const isLiked = localStorage.getItem('liked') === 'true';

    likeButton.addEventListener ("click", () => {
        console.log('i clicked the button')
        likeButton.classList.toggle('liked');
        // likeButton.textContent = currentlyLiked;

        // localStorage.setItem('liked', currentlyLiked);

        if (likeButton.classList.contains('liked')) {
            console.log('liked button')
            likeIcon.classList.remove('far', 'fa-heart');
            likeIcon.classList.add('fas', 'fa-heart');
        } else {
            likeIcon.classList.remove('fas', 'fa-heart');
            likeIcon.classList.add('far', 'fa-heart');
        }
    });

    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    

    postCardImg.addEventListener ('click', () => {
        console.log('i clicked the postcard');
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.textContent = postName.textContent;
        console.log(modal);
        console.log(captionText);
    });

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none';
        }
      });
});