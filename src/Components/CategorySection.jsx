import React from 'react'
import cancer from "../assets/Images/pateint.jpg"
import Bone from "../assets/Images/Bones.jpg"
import SkinCare from "../assets/Images/SkinCare2.jpg"

const CategorySection = () => {
    const category =[
        {
            title: "Cancer Disease",
            imageUrl:cancer,
        },
        {
            title:"Strong Bones",
            imageUrl:Bone,
        },
        {
            title:"Beautiful Skin ", 
            imageUrl:SkinCare,
        }
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
  {category.map((category, index)=>(
    <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <img src={category.imageUrl} alt=""  className='w-full h-full object-cover rounded-lg shadow-md '/>
        <div className='absolute top-20 left-8'>
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='font-semibold'>View All</p>
        </div>
    </div>
  ))}
    </div>
  )
}

export default CategorySection
