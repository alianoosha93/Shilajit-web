


import React from 'react';  
import { useSelector } from 'react-redux';  
import ProductCard from '../Components/ProductCard';  


const Shop = () => {  
    const products = useSelector(state => state.product);  
    
    return (  
      
        <div className='container mx-auto py-2'> 
       
         <header className="bg-red-500 py-10
          text-center">
        <h1 className="text-4xl font-bold text-white">Shop All Products</h1>
        <p className="text-lg text-white mt-2 text-center">
  Explore our wide range of premium Shilajit products and feel free to reach out for any inquiries!
</p>

      </header>
          <div className='grid grid-cols-1 sm:grid-cols2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer py-4'>
                {products.products.map(product => (  
                    <ProductCard key={product.id} product={product} />  
                ))}  
            </div>  
        </div>  
    );  
}  

export default Shop;




