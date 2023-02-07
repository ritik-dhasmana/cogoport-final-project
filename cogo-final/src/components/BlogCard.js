import React from 'react'

function BlogCard({ title, img, category, id,author}) {
  return (
    <div>
        <>
        
<div class="flex flex-wrap place-items-center h-screen">
    <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" class="w-full block h-full">
            <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
            <div class="bg-white w-full p-4">
                <p class="text-indigo-500 text-2xl font-medium">
                    {title}
                </p>
                <p class="text-gray-800 text-sm font-medium mb-2">
                   
                </p>
                <p class="text-gray-600 font-light text-md">
                    Click to read content
                    <a class="inline-flex text-indigo-500" href="#">Read More</a>
                </p>
                <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                        {category}
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                        #internet
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                        #education
                    </span>
                </div>
                <div class="flex items-center mt-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'/>
        
                    <div class="pl-3">
                        <div class="font-medium">
                            {author}
                        </div>
                        <div class="text-gray-600 text-sm">
                            CTO of Supercars
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    
</div>

{/* <!-- Does this resource worth a follow? --> */}
<div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
        </a>
    </div>
</div>
        </>
    </div>
  )
}

export default BlogCard