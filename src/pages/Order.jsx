// import React from 'react';  
// import { useNavigate } from 'react-router-dom';

// const Order = ({ order }) => {  
//   const navigate = useNavigate()
//   // Check if order is null or undefined and provide a fallback  
//   if (!order) {  
//     return (  
//       <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>  
//         <h2 className='text-2xl font-semibold mb-4'>No order details available.</h2>  
//         <p>Please check back later or contact support.</p>  
//       </div>  
//     );  
//   }  

//   return (  
//     <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>  
//       <h2 className='text-2xl font-semibold mb-4'>Thank you for your order!</h2>  
//       <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>  
//       <div className='mt-6 p-4 border rounded-lg bg-gray-100'>  
//         <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>  
//         <p>Order Number: {order.orderNumber}</p>  
//         <div className='mt-4'>  
//           <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>  
//           <p>{order.shippinginformation.address}</p>           
//             <p>{order.shippinginformation.city}</p>
//             <p>{order.shippinginformation.zip}</p>  
//         </div>  
//         <div className='mt-4'>  
//           <h4 className='text-md font-semibold mb-3'>Items Ordered</h4>  
//           {order.products && order.products.length > 0 ? (  
//             order.products.map((product, index) => (  
//               <div key={product.id} className='flex justify-between mt-2'>  
//                 <p>{product.name}  x {product.quantity}</p>  
//                 <p>{(product.price * product.quantity).toFixed(2)}</p>  
//               </div>  
//             ))  
//           ) : (  
//             <p>No products ordered.</p>  
//           )}  
//         </div>  
//         <div className='mt-4 flex justify-between'>  
//           <span>Total Price:</span>  
//           <span className='font-semibold'>{order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</span>  
//         </div>  
//         <div className='mt-6' >  
//           <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'> Complete Shopping </button>  
//           <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' onClick={() => navigate('/')}>Continue Shopping</button>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// };  

// export default Order;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const Order = ({ order }) => {
  const navigate = useNavigate();

  // Check if order is null or undefined and provide a fallback
  if (!order) {
    return (
      <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>No order details available.</h2>
        <p>Please check back later or contact support.</p>
      </div>
    );
  }

  // Function to show toast on Complete Shopping button click
  const handleCompleteShopping = () => {
    toast.success("Your order has been placed successfully. You will receive an email confirmation shortly!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank you for your order!</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className='mt-4'>
          <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
          <p>{order.shippinginformation.address}</p>
          <p>{order.shippinginformation.city}</p>
          <p>{order.shippinginformation.zip}</p>
        </div>
        <div className='mt-4'>
          <h4 className='text-md font-semibold mb-3'>Items Ordered</h4>
          {order.products && order.products.length > 0 ? (
            order.products.map((product) => (
              <div key={product.id} className='flex justify-between mt-2'>
                <p>{product.name} x {product.quantity}</p>
                <p>{(product.price * product.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No products ordered.</p>
          )}
        </div>
        <div className='mt-4 flex justify-between'>
          <span>Total Price:</span>
          <span className='font-semibold'>{order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</span>
        </div>
        <div className='mt-6'>
          <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600' onClick={handleCompleteShopping}> Complete Shopping </button>
          <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
      {/* Include the ToastContainer component */}
      <ToastContainer />
    </div>
  );
};

export default Order;
