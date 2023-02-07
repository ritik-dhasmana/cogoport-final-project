import React from 'react'
import BlogCard from '../components/BlogCard'
import Cta from '../components/Cta'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Pagination from '../components/Pagination'
import Pay from '../components/Pay'

function Blog({Blogs}) {
    const BlogsCard = Blogs.map(blog => {
        return (
          <BlogCard
            title={blog.title}
            img={blog.image_url}
            category={blog.categories}
            author={blog.user.name}
            update={blog.updated_at}
            id={blog.id}
          />
        )
      })


  return (
<>

<Newsletter/>
<Cta/>
{BlogsCard}
<Pagination/>
<Pay/>


</>
  )
}

export default Blog