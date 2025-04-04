
const writing = document.getElementById('blog');

writing.addEventListener("click",function(event){
    let show = document.getElementById("blogcontent");
    show.style.display = "block";
});


const publish = document.getElementById("publish");

publish.addEventListener("click",function(event){
    let titletext = document.getElementById("title").value;
    let contenttext = document.getElementById("content").value;

    let blogvalue = document.createElement("p");
        blogvalue.classList.add("blog-post");
        blogvalue.innerHTML = `
            <h2>${titletext}</h2>
            <br>
            <p>${contenttext}</p>
            <br>
            <hr>
        `;

        // Append blog post to the blog list section
        document.getElementById("blogpost").appendChild(blogvalue);
});

