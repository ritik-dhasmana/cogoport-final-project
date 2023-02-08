import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp=()=> {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    async function createAccount(){
        let item = {name, email, password};

        let result = await fetch("http://172.25.24.73:3000/users/",{
            method:'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-type":'application/json',
                "Accept":'application/json',
            }
        })

        result = await result.json();
        // localStorage.setItem("user-info", JSON.stringify(result));
         navigate('/login')
    }

    return (
      <div className="">
        <section class="bg-gray-50 dark:bg-gray-100">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
      <svg
                class='mr-4'
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_7237_147928)">
                    <rect width="32" height="32" rx="8" fill="white" />
                    <rect
                      width="32"
                      height="32"
                      rx="8"
                      fill="url(#paint0_linear_7237_147928)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9998 2.03861C8.28923 2.03861 2.03861 8.28923 2.03861 15.9998C2.03861 23.7103 8.28923 29.9609 15.9998 29.9609C23.7103 29.9609 29.9609 23.7103 29.9609 15.9998C29.9609 8.28923 23.7103 2.03861 15.9998 2.03861ZM1.96094 15.9998C1.96094 8.24634 8.24634 1.96094 15.9998 1.96094C23.7532 1.96094 30.0386 8.24634 30.0386 15.9998C30.0386 23.7532 23.7532 30.0386 15.9998 30.0386C8.24634 30.0386 1.96094 23.7532 1.96094 15.9998Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 12.0777C13.8338 12.0777 12.0777 13.8338 12.0777 16C12.0777 18.1662 13.8338 19.9223 16 19.9223C18.1662 19.9223 19.9223 18.1662 19.9223 16C19.9223 13.8338 18.1662 12.0777 16 12.0777ZM12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16Z"
                      fill="#D0D5DD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.0004 13.3199C14.5205 13.3199 13.3208 14.5196 13.3208 15.9995C13.3208 17.4794 14.5205 18.6791 16.0004 18.6791C17.4804 18.6791 18.6801 17.4794 18.6801 15.9995C18.6801 14.5196 17.4804 13.3199 16.0004 13.3199ZM13.2432 15.9995C13.2432 14.4767 14.4776 13.2422 16.0004 13.2422C17.5233 13.2422 18.7577 14.4767 18.7577 15.9995C18.7577 17.5223 17.5233 18.7568 16.0004 18.7568C14.4776 18.7568 13.2432 17.5223 13.2432 15.9995Z"
                      fill="#D0D5DD"
                    />
                    <path d="M15.9609 0H16.0386V32H15.9609V0Z" fill="#D0D5DD" />
                    <path
                      d="M32 15.9609L32 16.0386L-3.39506e-09 16.0386L0 15.9609L32 15.9609Z"
                      fill="#D0D5DD"
                    />
                    <path d="M26.6016 0H26.6792V32H26.6016V0Z" fill="#D0D5DD" />
                    <path d="M10.6406 0H10.7183V32H10.6406V0Z" fill="#D0D5DD" />
                    <path d="M21.2812 0H21.3589V32H21.2812V0Z" fill="#D0D5DD" />
                    <path d="M5.32031 0H5.39798V32H5.32031V0Z" fill="#D0D5DD" />
                    <path
                      d="M32 26.6016L32 26.6792L-3.39506e-09 26.6792L0 26.6016L32 26.6016Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M32 10.6406L32 10.7183L-3.39506e-09 10.7183L0 10.6406L32 10.6406Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M32 21.2812L32 21.3589L-3.39506e-09 21.3589L0 21.2812L32 21.2812Z"
                      fill="#D0D5DD"
                    />
                    <path
                      d="M32 5.32031L32 5.39798L-3.39506e-09 5.39798L0 5.32031L32 5.32031Z"
                      fill="#D0D5DD"
                    />
                    <g filter="url(#filter0_dd_7237_147928)">
                      <circle
                        cx="16"
                        cy="16"
                        r="8"
                        fill="url(#paint1_linear_7237_147928)"
                      />
                    </g>
                    <g filter="url(#filter1_b_7237_147928)">
                      <path
                        d="M0 16H32V19.2C32 23.6804 32 25.9206 31.1281 27.6319C30.3611 29.1372 29.1372 30.3611 27.6319 31.1281C25.9206 32 23.6804 32 19.2 32H12.8C8.31958 32 6.07937 32 4.36808 31.1281C2.86278 30.3611 1.63893 29.1372 0.871948 27.6319C0 25.9206 0 23.6804 0 19.2V16Z"
                        fill="white"
                        fill-opacity="0.2"
                      />
                    </g>
                  </g>
                  <rect
                    x="0.1"
                    y="0.1"
                    width="31.8"
                    height="31.8"
                    rx="7.9"
                    stroke="#D0D5DD"
                    stroke-width="0.2"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_7237_147928"
                      x="5"
                      y="6"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_7237_147928"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_7237_147928"
                        result="effect2_dropShadow_7237_147928"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_7237_147928"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_7237_147928"
                      x="-5"
                      y="11"
                      width="42"
                      height="26"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="2.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_7237_147928"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_7237_147928"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_7237_147928"
                      x1="16"
                      y1="0"
                      x2="16"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#D0D5DD" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_7237_147928"
                      x1="12"
                      y1="24"
                      x2="20"
                      y2="8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#53389E" />
                      <stop offset="1" stop-color="#6941C6" />
                    </linearGradient>
                    <clipPath id="clip0_7237_147928">
                      <rect width="32" height="32" rx="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
          Untitled UI  
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-100">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required=""/>                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-Black">Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="••••••••" class="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>                  </div>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter Name</label>
                      <input type="text" name="name" id="name" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}  class="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-900">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" onClick={createAccount} method="POST" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        
      </div>
    );
  }
  
  export default SignUp;


