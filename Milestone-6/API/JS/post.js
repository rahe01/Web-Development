function loadPosts (){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then (data => displayPosts(data))
}




/*
1. get the element where i want to add the new element
2. create a child  element
3. set inner text or inner html
4. append the child element to the parent element


*/

function displayPosts(posts) {

    const postsContainer = document.getElementById('posts-container');

    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML= `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post description : ${post.body}</p>
        
        
        `;

        postsContainer.appendChild(div);


    }
    
    


}






loadPosts();