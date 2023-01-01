import React from 'react';
import { Link,Outlet } from 'react-router-dom'
import Contact from './Contact';
const Header = () => {
  return (
    <>
        <header class="text-gray-600 body-font bg-purple-600">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src="	https://www.svgrepo.com/show/327388/logo-react.svg" alt=""  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full" viewBox="0 0 24 24"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        
      <span class="ml-3 text-xl">React</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
     <Link to='/about'> <a class="mr-5 hover:text-gray-900">about</a></Link>
    <Link to='/home'>  <a class="mr-5 hover:text-gray-900" >home</a></Link>
      <a class="mr-5 hover:text-gray-900" >Contact</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
    </button>
  </div>
</header>
<br /> <br />
   <Outlet />
   <Contact/>
   </>
  )
}

export default Header
