import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import NotificationModal from './NotificationModal';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    setIsModalOpen(true); // Open modal on successful addition to cart
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-gradient-to-b from-white to-gray-50 p-6 shadow-lg rounded-xl relative border transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
      {/* Product Image */}
      <div className='flex justify-center items-center mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden'>
        <img src={product.image} alt={product.name} className='max-w-full max-h-full object-contain' />
      </div>

      {/* Product Details */}
      <h3 className='text-xl font-bold text-gray-800 mb-1'>{product.name}</h3>
      <h4 className='text-sm text-gray-500 mb-2'>{product.weight}</h4>

      {/* Price Tag */}
      <p className='text-red-600 text-lg font-semibold bg-red-100 p-2 rounded-full w-fit shadow-md'>
        PKR {product.price}
      </p>

      {/* Star Ratings */}
      <div className='flex items-center mt-3'>
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className='text-yellow-400 mr-1' />
        ))}
        <FaStar className='text-gray-300' /> {/* For 5th star */}
      </div>

      {/* Add to Cart Button */}
      <div
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full transition-all cursor-pointer group transform hover:-translate-y-1 hover:scale-110 hover:w-32 hover:bg-red-700'
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className='group-hover:hidden text-xl'>+</span>
        <span className='hidden group-hover:block text-sm px-3'>Add to cart</span>
      </div>

      {/* Notification Modal */}
      <NotificationModal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        message="Product added successfully!" 
      />
    </div>
  );
};

export default ProductCard;
