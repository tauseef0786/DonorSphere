// import React, { useState } from 'react'
// import axios from 'axios'
// import { apiClient } from '../apiClient';

// const Signup = () => {

//     const [formData, setFormData] = useState(
//         {
//           username: "",
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
//         if (!formData.username || !formData.email || !formData.password) {
//             console.error("Error: All fields are required");
//             return;
//           }
        
//         try {
//             const response = await apiClient.post('/auth/register', formData);
//             localStorage.setItem('token', response.data.token)
//         } catch (error) {
//             console.error(error.response.data);
//         }
        
//     }
//   return (
//     <div>
//       <h3>Register</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Username :&nbsp;</label>
//         <input type="text" value={formData.username} name='username' onChange={handleChange} />
//         <br />
//         <label>Email :&nbsp;</label>
//         <input type="email" name='email' value={formData.email} onChange={handleChange}/>
//         <br />
//         <label>Password :&nbsp;</label>
//         <input type="password" name='password' value={formData.password} onChange={handleChange} />
//         <br />
//         <button type='submit'>Sign Up</button>
//       </form>
//     </div>
//   )
// }

// export default Signup
import React, { useState } from 'react';
import { apiClient } from '../apiClient';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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
    if (!formData.username || !formData.email || !formData.password) {
      console.error('Error: All fields are required');
      return;
    }

    try {
      const response = await apiClient.post('/auth/register', formData);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-6">
          Register
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <span
            className="text-green-600 cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
