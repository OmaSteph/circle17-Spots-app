const postsData = [
    {
        image: './CIRCLE 17 PICTURES/PICTURES/Mask group.png',
        name: 'Val Thorens'
    },
    {
        image: './CIRCLE 17 PICTURES/PICTURES/Restaurant terrace.png',
        name: 'Restaurant Terrace'
    },
    {
        image: './CIRCLE 17 PICTURES/PICTURES/An outdoor cafe.png',
        name: 'An outdoor cafe'
    },
    {
        image: './CIRCLE 17 PICTURES/PICTURES/A very long bridge.png',
        name: 'A very long bridge'
    },
    {
        image: './CIRCLE 17 PICTURES/PICTURES/Tunnel with morning light.png',
        name: 'Tunnel with morning light'
    },
    {
        image: './CIRCLE 17 PICTURES/PICTURES/Mountain house.png',
        name: 'Mountain house'
    }
];


function createPostCard(postData) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const postCardImg = document.createElement('div');
    postCardImg.className = 'post-card-img';

    const img = document.createElement('img');
    img.src = postData.image;
    img.alt = postData.name;
    img.className = 'post-img';

    postCardImg.appendChild(img);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const postName = document.createElement('p');
    postName.className = 'post-name';
    postName.textContent = postData.name;

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    
    likeBtn.appendChild(document.createElement('i')).className = 'far fa-heart';

    titleContainer.append(postName, likeBtn);
    postCard.append(postCardImg, titleContainer);

    return postCard;
}


function displayPosts() {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.innerHTML = '';
    
    postsData.forEach(postData => {
        const postCard = createPostCard(postData);
        postsContainer.appendChild(postCard);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);