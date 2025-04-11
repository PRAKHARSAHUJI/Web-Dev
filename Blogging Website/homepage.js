
// const writing = document.getElementById('blog');

// writing.addEventListener("click",function(event){
//     let show = document.getElementById("blogcontent");
//     show.style.display = "block";
// });


// const publish = document.getElementById("publish");

// publish.addEventListener("click",function(event){
//     let titletext = document.getElementById("title").value;
//     let contenttext = document.getElementById("content").value;

//     let blogvalue = document.createElement("p");
//         blogvalue.classList.add("blog-post");
//         blogvalue.innerHTML = `
//             <h2>${titletext}</h2>
//             <br>
//             <p>${contenttext}</p>
//             <br>
//             <hr>
//         `;

//         // Append blog post to the blog list section
//         document.getElementById("blogpost").appendChild(blogvalue);
// });







window.onload = function () {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blogpost = document.getElementById("blogpost");

    savedBlogs.forEach(blog => {
      const blogDiv = document.createElement("div");
      blogDiv.classList.add("blog-post");
      blogDiv.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
      `;
      blogpost.appendChild(blogDiv);
    });
  };


  document.getElementById("blog").addEventListener("click", () => {
    document.getElementById("blogcontent").style.display = "block";
  });


  document.getElementById("publish").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    blogDiv.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
    `;
    document.getElementById("blogpost").appendChild(blogDiv);


    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push({ title, content });
    localStorage.setItem("blogs", JSON.stringify(blogs));


    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  });