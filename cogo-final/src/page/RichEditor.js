import React,{useState} from 'react'
import TextEditor from '../components/TextEditor'
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function RichEditor() {

    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("");
    const getValue = (value) => {
      setValue(value);
    };

    const handleSubmit = async() => {
      // store the states in the form data
      const articleData = new FormData();
      articleData.append("article", value)
      let token = localStorage.getItem('user-info');
    
      try {
        // make axios post request
        console.log("REquest sent"+ token.replace(/"|'/g, ''))
        const response = await axios({
          method: "post",
          url: "http://172.25.24.73:3000/articles/",
          data: {title: title, category: category, text: value, image_url: url},
          headers: { "Content-Type": "multipart/form-data", "Authorization": token.replace(/"|'/g, '')},
        });
       
      } catch(error) {
        console.log(error)
      }
    }

  return (
    <>
    <Navbar/>
    <div class="">
<form onSubmit={(event) => event.preventDefault()}>
  <div class="">
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  <div class="mb-6">
    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
    <input type="text" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-6">
    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
    <input type="text" id="url" value={url} onChange={(e)=>setUrl(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center"><TextEditor initialValue="" getValue={getValue} /></div>
    
  </div>
  <button type="" onClick={handleSubmit} method="POST" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
        <br />
        <div>{value}</div>
        <Footer/>
    </>
  )
}

export default RichEditor