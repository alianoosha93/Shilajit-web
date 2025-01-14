import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import NoProduct from '../assets/Images/product-not-found.jpg'


const FilterData = () => {
    const filterproducts = useSelector(state => state.product.filteredData)
  return (
    <div className='mx-auto py-4 flex flex-col items-center'> 
    {filterproducts.length > 0 ? 
    <>
            <h2 className='text-2xl font-bold mb-4 text-center'>Shop</h2>  
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>  
                {filterproducts.map(product => (  
                    <ProductCard key={product.id} product={product} />  
                ))}  
            </div>  
            </> 
            : <div className='flex justify-center'>
               <img src={NoProduct} alt="" />
            </div>}
        </div>  
  )
}

export default FilterData
