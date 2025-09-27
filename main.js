// Puedes modificar aquí para agregar/quitar posts
const posts = [
    {
        title: "Blog en construcción",
        date: "2025-09-27",
        content: "El blog estará dirigido a entusiastas del software libre y la informática."
    },
    
];

function showPosts() {
    const postsSection = document.getElementById('posts');
    postsSection.innerHTML = "";
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = "post";
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <span class="date">${post.date}</span>
            <p>${post.content}</p>
        `;
        postsSection.appendChild(postDiv);
    });
}

document.addEventListener('DOMContentLoaded', showPosts);