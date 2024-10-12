import React, { useState } from 'react';

const Register = ({ openLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validate = () => {
    const newErrors = { name: '', email: '', password: '' };
    let isValid = true;

    // Name validation
    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

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
      // Save data to local storage
      const userData = { name, email, password };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Handle successful registration logic here
      console.log('Registered:', userData);
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border'
            placeholder='Enter name'
          />
          {errors.name && <span className='text-red-500'>{errors.name}</span>}
        </div>
        
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
        
        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already Have an Account?</span>
        <button className='text-red-800' onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;
