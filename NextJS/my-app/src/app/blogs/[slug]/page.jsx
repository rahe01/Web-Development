

export default function page({params}) {
    console.log(params)
    const singleBlog = blog.find((blog) => blog.slug === params.slug)

  return (
    <div>
      details
      {
        singleBlog.title
        
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

