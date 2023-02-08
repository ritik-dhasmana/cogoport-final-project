import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login=()=> {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const history=useNavigate();
  useEffect(()=>{
// if(localStorage.getItem('user-info')){
//   history("/")
// }

  },[])

  async function loginf()
  {
    console.warn(email,password)
    let item={email,password}
    let result=await fetch("http://172.25.24.73:3000/users/login",{
      method:'POST',
      headers:{
         "Content-Type":"application/json",
         "Accept":'application/json',
        //  "Authorization": localStorage.getItem('user-info')
      },
      body:JSON.stringify(item)
    }); 
    // console.log(res)
    result=await result.json();
    console.log(result)
    localStorage.setItem('user-info', JSON.stringify(result.token))
    history("/")
  }
    return (
      <div className="">
        <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a> */}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-100">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              SIGN IN
              </h1>
  
              <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-inter text-gray-900 dark:text-black">Email</label>
                      <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} class="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="••••••••" class="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-800 dark:text-gray-800">Remember for 30 Days</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-[#7F56D9] hover:underline dark:text-[#7F56D9]">Forgot password?</a>
                  </div>
                  <button type="submit" onClick={loginf} method="POST" class="w-full text-white bg-[#7F56D9] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#7F56D9] dark:hover:bg-primary-600 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" class="font-medium text-[#7F56D9] hover:underline dark:text-[#7F56D9]">Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
        
      </div>
    );
  }
  
  export default Login;