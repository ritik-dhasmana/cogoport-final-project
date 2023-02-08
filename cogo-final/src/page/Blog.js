import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Cta from '../components/Cta'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Pagination from '../components/Pagination'
import Carousel from '../components/Carousel'
import Pay from '../components/Pay'
import axios from 'axios';
import Library from '../components/Library'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Follow from '../components/Follow'

function Blog() {

  const [isLoading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get('http://172.25.24.73:3000/articles').then((response) => {
      setBlogs(...blogs,response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    <>
      <Navbar/>
      <Header/>
      <Carousel/>



<div className='flex flex-wrap justify-center'>
      {blogs.map((r,i) => {

        console.log(r)
        if(i<6) {
          return ( <div class="mx-8 my-4 ">
          <BlogCard info={r} k={r.id}/>
          </div>)
        }
        
       else return 
        
      })}
      </div>

      {/* <div className='flex flex-row flex-wrap justify-center items-center'>{BlogsCard}</div> */}

      <Pagination />
      <Cta />
      <Pay />
   
      <Footer/>


    </>
  )
}

export default Blog