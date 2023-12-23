import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <nav className='flex justify-between p-5 items-center border-b bg-[#a02424] nav'>
      <h1 className='text-4xl logo'>Sicunet. Inc</h1>
      <ul className='hidden  md:flex gap-6'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/features'><li>Features</li></Link>
        <Link to='/products'><li>Products</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/locations'><li>Locations</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/'><li className='hover:text-teal-700'>Home</li></Link>
        <Link to='/features'><li className='hover:text-teal-700'>Features</li></Link>
        <Link to='/products'><li className='hover:text-teal-700'>Products</li></Link>
        <Link to='/about'><li className='hover:text-teal-700'>About</li></Link>
        <Link to='/locations'><li className='hover:text-teal-700'>Locations</li></Link>
        <Link to='/contact'><li className='hover:text-teal-700'>Contact Us</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar

