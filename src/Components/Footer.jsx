import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='conatiner mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
          <h3 className='text-xl font-semibold'>Himalayan & Shilajit</h3>
          <p className='mt-4'>Your one-step for all your needs. Shop with us and experience the best online shopping experience</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Link</h4>
          <ul className='mt:-4 space-y-2  py-2 '>
            <li>
            <Link to="/" className='hover:underline'>Home</Link>
            </li>

            <li>
            <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>

            <li>
            <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>

            <li>
            <Link to="/about" className='hover:underline'>About</Link>
            </li>
          </ul>

          
        </div>
        <div >
          <h4 className='text-lg font-semibold '>Follow us</h4>
          <div className='flex space-x-4 mt-4 '>
            <a href="" className='hover:text-gray-400 py-2'><FaFacebook/></a>
            <a href="" className='hover:text-gray-400 py-2'><FaTwitter/></a>
            <a href="" className='hover:text-gray-400 py-2'><FaWhatsapp/></a>
            <a href="" className='hover:text-gray-400 py-2'><FaLinkedin/></a>
          </div>
          <form className='flex item-center justify-center mt:8 py-2'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600 py-2' />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg '>Subscribe</button>
          </form>
        </div>
        </div>
      
      <div className='mt-8 border-t border-gray-700 pt-4'>
      {/* <div className="bg-red-500 w-screen h-auto min-h-screen py-6 mt-8 border-t pt-6"> */}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 Himalayn Shilajit All right reserved</p>
          <div className='flex space-x-6 mt-4 md:mt-8'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* <footer className="bg-red-500 py-6">
        <div className="container mx-auto text-center text-white">
          <p className="text-lg">&copy; 2024 Shilajit Medicine. All Rights Reserved.</p>
          <p className="text-sm mt-2">Contact Us: info@shilajitmedicine.com</p>
        </div>
      </footer> */}
    </footer>
  )
}


export default Footer
