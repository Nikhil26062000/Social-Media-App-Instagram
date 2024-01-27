// Register.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign Up clicked');
    console.log('Email:', email);
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Password:', password);
    
    signup();
  }

  const signup = async() => {
    try {
     const response = await fetch('http://localhost:3000/api/auth/signup',{
       method: 'POST',
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify({
         email,
         username,
         fullName,
         password
       })
     })
     const responseData = await response.json();
     console.log(responseData);
     console.log(responseData.token);
     if(response.ok){
       toast.success('Sign Up Successfully');
       setEmail("");
       setFullName("");
       setUsername("");
       setPassword("");
       navigate("/");

     }else{
      toast.error(responseData);
     }
    } catch (error) {
       console.log(error);
       toast.error(error);
    }
 }

   

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="Instagram Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={fullName} //!this variable name should match exactly what we defines in userSchema. if here it is fullName then there it should also be fullName . if here i pass fullname as body as a post method then there in userSchema there should also be fullname .
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
