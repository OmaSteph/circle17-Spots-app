
const imageData = [
    {   
        title: `Val Thorens`,
        src: `CIRCLE 17 PICTURES\PICTURES\A very long bridge.png`
    },
   
    {
        title: `Restaurant Terrace`,
        src: `CIRCLE 17 PICTURES\PICTURES\Restaurant terrace.png`
    },

    {
        title: `An Outdoor Cafe`,
        src: `CIRCLE 17 PICTURES\PICTURES\An outdoor cafe.png`
    },

    {
        title: `A very long bridge`,
        src: `CIRCLE 17 PICTURES\PICTURES\A very long bridge.png`
    }
];

const postsContainer = document.getElementById("posts-container");

imageData.forEach (data => {
    const postCard = document.createElement("div");
    postCard.className = "postCard"

    const img = document.createElement("postImg");
    img.src = data.src;
    
    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const postName = document.createElement("p");
    postName.textContent = data.title;
    postName.className = "postName"

    const likeButton = document.createElement("span");
    likeButton.className = "likeButton";
    likeButton.innerHTML = "$#10084;";

    titleContainer.appendChild(postName);
    titleContainer.appendChild(likeButton);

    postCard.appendChild(img);
    postCard.appendChild(titleContainer);
});