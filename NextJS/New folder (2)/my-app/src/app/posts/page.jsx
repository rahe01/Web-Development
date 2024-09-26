import { getPosts } from '@/services/postapi'
import Link from 'next/link'
import React from 'react'







const PostPage = async() => {

    const postdata = await getPosts()
    console.log(postdata)







  return (
    <div>
      post page
      <h1>All post</h1>
      <div className='grid grid-cols-3 '>
        {postdata.slice(0,10).map(post => (
          <div className='border ' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button><Link href={`/posts/${post.id}`}>Details</Link></button>
          </div>
         
        ))}
      </div>
    </div>
  )
}

export default PostPage;
