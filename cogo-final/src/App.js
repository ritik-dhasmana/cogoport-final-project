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
import Login from "./page/Login";
import Profile from "./page/Profile";
import Header from "./components/Header";
import AllBlog from "./page/AllPost";


function App() {
  
  return (
    <>

      
        <Routes>
          <Route path="/" element={<Blog   />} />
          <Route path="/articles/:id" element={<BlogPost/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<RichEditor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allBlog" element={<AllBlog />} />
          <Route path="*" element={<Error />} />
       </Routes>


    </>
  );
}

export default App;