// import React from 'react'

// const Login = ({openSignUp}) => {
//   return (
//     <div>
//       <h2 className='text-2xl font-bold mb-4'>Login</h2>
//       <form>
//         <div className='mb-4'>
//             <label className='block text-gray-700'>Email</label>
//             <input type="email" className='w-full px-3 py-2 border' placeholder='Enter Email'/>
//         </div>

//         <div className='mb-4'>
//             <label className='block text-gray-700'>Password</label>
//             <input type="password" className='w-full px-3 py-2 border' placeholder='Enter Email' />
//         </div>
//         <div className='mb-4 flex item-center justify-between'>
//             <label className='inline-flex items-center'>
//                 <input type="checkbox"  className='form-checkbox'/>
//                 <span className='ml-2 text-gray-700'>Remember Me</span>
//             </label>
//             <a href="#" className='text-red-800'>Forgot password?</a>
//         </div>
//         <div className='mb-4'>
//             <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
//         </div>
//       </form>
//       <div className='text-center'>
//         <span className='text-gray-700'>Don't Have an Account?</span>
//         <button className='text-red-800' onClick={openSignUp}> Sign Up</button>
//       </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';

const Login = ({ openSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful login logic here
      console.log('Logged in:', { email, password });
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border'
            placeholder='Enter Email'
          />
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 py-2 border'
            placeholder='Enter Password'
          />
          {errors.password && <span className='text-red-500'>{errors.password}</span>}
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember Me</span>
          </label>
          <a href="#" className='text-red-800'>Forgot password?</a>
        </div>

        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>
      </form>

      <div className='text-center'>
        <span className='text-gray-700'>Don't Have an Account?</span>
        <button className='text-red-800' onClick={openSignUp}> Sign Up</button>
      </div>
    </div>
  );
};

export default Login;

