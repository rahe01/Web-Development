const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error loading comments", error));
};

const loadComments2 =  async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);


}