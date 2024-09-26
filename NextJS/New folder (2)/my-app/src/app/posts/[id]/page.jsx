import React from 'react';

const getPostbyId = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // await fetch
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

const PostDetailPage = async ({ params }) => {
    console.log(params.id);
    const data = await getPostbyId(params.id); // pass params.id to getPostbyId
    return (
        <div>
            Post details: {params.id}
            <div>Post ID: {data?.id}</div> {/* added optional chaining to handle possible undefined data */}
            <div>Title: {data?.title}</div>
            <div>Body: {data?.body}</div>
        </div>
    );
};

export default PostDetailPage;
