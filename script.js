const postsContainer = document.getElementById("blog-posts");
function getPosts() {
    //localStorage data
    return JSON.parse(localStorage.getItem("posts")) || [];
}

function renderPosts() {
    const posts = getPosts();
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="post.html?id=${post.id}">Read More</a>
        `;
        postsContainer.appendChild(postElement);
    });
    } 
if (postsContainer) {
    renderPosts();  
} else {
    console.log("Posts container not found, cannot render");
}