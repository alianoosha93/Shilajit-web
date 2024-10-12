import React, { useEffect } from 'react';
import { categories, mockData } from '../assets/mockData';
import Banner from '../assets/Images/FinallBanner.jpeg';
import InfoSection from '../Components/InfoSection';
import CategorySection from '../Components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []); // Added dispatch to dependency array to avoid eslint warning

  return (
    <div className='bg-gray-50'>
       
      {/* Banner Section */}
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-20'>
        <div className='container mx-auto py-6 flex flex-col md:flex-row space-x-2'>
          {/* Categories List */}
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-3 rounded-t'>
              SHOP BY CATEGORIES
            </div>
            <ul className='space-y-4 bg-gray-100 p-4 border rounded-b'>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className='flex items-center text-sm font-medium hover:bg-red-50 transition-all duration-200 px-2 py-1 rounded'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Banner Image */}
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative overflow-hidden rounded-lg shadow-lg'>
            <img src={Banner} alt='' className='h-full w-full object-cover' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-70'></div>
            <div className='absolute top-16 left-8'>
              <p className='text-white mb-4 text-sm font-semibold animate-pulse'>Best Shilajit Ever</p>
              <h2 className='text-4xl font-bold text-white leading-tight'>
                Welcome to Pure Premium Himalayan Mountain
              </h2>
              <p className='text-xl mt-4 font-medium text-white'>Pure Products, Authentic Quality</p>
              <button className='bg-red-600 px-8 py-2 text-white mt-8 font-bold hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded' onClick={() => navigate('/shop')}>
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <InfoSection />

        {/* Category Section */}
        <CategorySection />

        {/* Top Products Section */}
        <div className='container mx-auto py-12'>
          <h2 className='text-3xl font-bold mb-6 text-center text-gray-700'>
            Top Products
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
            {products.products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Shop Section */}
        <div className='container mx-auto py-12'>
          {/* <h2 className='text-3xl font-bold mb-6 text-center text-gray-700'>
            Shop All Products
          </h2> */}
          <Shop />
        </div>
      </div>
    </div>
  );
};

export default Home;
