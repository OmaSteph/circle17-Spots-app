
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

// const likeButton = new likeIcon();
// likeIcon.src = `circle17icons/like icon`;


const postsContainer = document.getElementById("postContainer");

imageData.forEach (data => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

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

    likeButton.addEventListener ("click", () => {
        console.log('i clicked the button')
        likeButton.classList.toggle('liked');

        if (likeButton.classList.contains('liked')) {
            console.log('liked button')
            // likeIcon.classList.remove('far fa-heart');
            // likeIcon.classList.add('fa fa-heart');
        }
    });
});

