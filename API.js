const URL = "https://jsonplaceholder.typicode.com/posts";

const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");

loadBtn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL);
  
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let posts = [];
      try {
        posts = JSON.parse(xhr.responseText);
      } catch {
        console.error("Failed to parse JSON");
      }
      
      postsContainer.innerHTML = ""; 
      
      posts.slice(0, 10).forEach((post) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text text-muted">${post.body}</p>
            </div>
          </div>
        `;
        postsContainer.appendChild(col);
      });
    } else { 
        console.error("Request failed with status:", xhr.status);
      postsContainer.innerHTML = '<div class="alert alert-danger">Failed to load posts.</div>';
    }
  });

  xhr.addEventListener("error", () => {
    postsContainer.innerHTML = '<div class="alert alert-danger">Network error occurred.</div>';
  });

  xhr.send();
});

const postForm = document.getElementById("postForm");
const resultContainer = document.getElementById("resultContainer");

postForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value.trim();

  if (!title || !body) {
    alert("Please fill in both fields");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const newPost = JSON.parse(xhr.responseText);
      
      resultContainer.innerHTML = `
        <div class="alert alert-success">Post added successfully!</div>
        <div class="card shadow-sm border-success">
          <div class="card-body">
            <h5 class="card-title">${newPost.title}</h5>
            <p class="card-text">${newPost.body}</p>
            <span class="badge bg-success">New Post ID: ${newPost.id}</span>
          </div>
        </div>
      `;
    } else {
      resultContainer.innerHTML = '<div class="alert alert-danger">Failed to add post.</div>';
    }
  });

  xhr.addEventListener("error", () => {
    resultContainer.innerHTML = '<div class="alert alert-danger">Network error.</div>';
  });

  const payload = { title, body, userId: 1 };
  xhr.send(JSON.stringify(payload));
});

const updateForm = document.getElementById("updateForm");
const updateResultContainer = document.getElementById("updateResultContainer"); 

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("updateIdInput").value.trim(); 
  const title = document.getElementById("updateTitleInput").value.trim();
  const body = document.getElementById("updateBodyInput").value.trim();

  if (!id || !title || !body) {
    alert("Please fill in ID, Title, and Body");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${URL}/${id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const updatedPost = JSON.parse(xhr.responseText);
      
      updateResultContainer.innerHTML = `
        <div class="alert alert-info">Post updated successfully!</div>
        <div class="card shadow-sm border-info">
          <div class="card-body">
            <h5 class="card-title">${updatedPost.title}</h5>
            <p class="card-text">${updatedPost.body}</p>
            <span class="badge bg-info">Updated ID: ${updatedPost.id}</span>
          </div>
        </div>
      `;
    } else {
      updateResultContainer.innerHTML = '<div class="alert alert-danger">Failed to update post.</div>';
    }
  });

  xhr.addEventListener("error", () => {
    updateResultContainer.innerHTML = '<div class="alert alert-danger">Network error.</div>';
  });

  const payload = { id, title, body, userId: 1 };
  xhr.send(JSON.stringify(payload));
});

const deleteForm = document.getElementById("deleteForm");
const deleteResultContainer = document.getElementById("deleteResultContainer");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("deleteIdInput").value.trim();

  if (!id) {
    alert("Please enter a Post ID");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${URL}/${id}`, true);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      deleteResultContainer.innerHTML = `
        <div class="alert alert-success">
          Post <strong>${id}</strong> deleted successfully!
        </div>
      `;
    } else {
      deleteResultContainer.innerHTML = '<div class="alert alert-danger">Failed to delete post.</div>';
    }
  });

  xhr.addEventListener("error", () => {
    deleteResultContainer.innerHTML = '<div class="alert alert-danger">Network error.</div>';
  });

  xhr.send();
});