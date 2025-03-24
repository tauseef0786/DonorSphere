// import React, { useState } from 'react'
// import axios from 'axios'
// import { apiClient } from '../apiClient';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState(
//         {
//           email: "",
//           password: ""
//         });

//         const handleChange = (e) => {   
//             const {name, value} = e.target;

//             setFormData((prev) => ({
//                 ...prev, [name]: value
//             }))
//         }
//     const handleSubmit =  async(e) => {
//         e.preventDefault();
//         if (!formData.email || !formData.password) {
//             console.error("Error: All fields are required");
//             return;
//           }
        
//         try {
//             const response = await apiClient.post('/auth/login', formData);
//             localStorage.setItem('token', response.data.token);
//             navigate('/');
//         } catch (error) {
//             console.error(error)
//         }
        
//     }
//   return (
//     <div>
//       <h3>Welcome Back!</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Email :&nbsp;</label>
//         <input type="email" name='email' value={formData.email} onChange={handleChange}/>
//         <br />
//         <label>Password :&nbsp;</label>
//         <input type="password" name='password' value={formData.password} onChange={handleChange} />
//         <br />
//         <button type='submit'>Log In</button>
//       </form>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import { apiClient } from '../apiClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.error('Error: All fields are required');
      return;
    }

    try {
      const response = await apiClient.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-6">
          Welcome Back!
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <span
            className="text-green-600 cursor-pointer hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
