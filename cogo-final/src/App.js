import { Route, Routes } from "react-router-dom"
import React,{useState,useEffect} from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogPost from "./page/BlogPost";
import Blog from "./page/Blog";
import Error from "./page/Error";
import SignUp from "./page/Signup";
import RichEditor from "./page/RichEditor";
import axios from 'axios';


function App() {

  const[blogs,setBlogs]=useState([]);

  // const getblogs=async()=>
  //   {
  //   const blogRequest=await axios.get('http://172.25.24.73:3000/articles');
    
  //   setBlogs([blogRequest.data]);

  
  //   console.log(blogRequest.data);
  //   }

    useEffect(async ()=>{
      const blogRequest=await axios.get('http://172.25.24.73:3000/articles');
    
    setBlogs([blogRequest.data]);
    console.log(blogs);

    },[])
    // useEffect(()=>{getblogs();},[]);

  return (
    <>

      <Navbar/>
        <Routes>
          <Route path="/" element={<Blog Blogs={blogs}  />} />
          <Route path="/blogs/:id" element={<BlogPost Blogs={blogs} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editor" element={<RichEditor />} />
          <Route path="*" element={<Error />} />
       </Routes>
      <Footer />


    </>
  );
}

export default App;