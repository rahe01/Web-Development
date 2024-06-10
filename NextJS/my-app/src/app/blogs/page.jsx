import Link from 'next/link'
import React from 'react'

export default function Blogspage() {
  return (
    <div>
      this is blogs page
      {
        blog.map((blog) => (
          <div key={blog.slug} className='border p-12'>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <button className='bg-green-500 p-5'>
                <Link href={`/blogs/${blog.slug}`}>Read</Link>
            </button>
          </div>
        ))
      }
    </div>
  )
}

const blog = [
      {
        "slug": "introduction-to-json",
        "title": "Introduction to JSON",
        "description": "This blog post provides an introduction to JSON, including its syntax, structure, and common use cases."
      },
      {
        "slug": "advanced-json-techniques",
        "title": "Advanced JSON Techniques",
        "description": "Explore advanced techniques for working with JSON, such as schema validation and transformation."
      },
      {
        "slug": "json-in-practice",
        "title": "JSON in Practice",
        "description": "Learn how JSON is used in real-world applications, from APIs to configuration files."
      }
    ]
  
  
