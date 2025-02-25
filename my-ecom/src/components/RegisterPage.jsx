
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    address: '',
    phoneNumber:'',
    role: 'Seller',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(formData.role));
    if (storedUser && storedUser.email === formData.email) {
      alert('Email is already in use, please use a different email.');
      return;
    }


    const newUser = {
      firstname: formData.firstname,
      lastname:formData.lastname,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      phone:formData.number,
      role: formData.role,
    };

    localStorage.setItem(formData.role, JSON.stringify(newUser));

    console.log('Registration successful:', newUser);
    navigate('/login'); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">First Name</label>
           
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
           
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <div className='form-group'>
              <label>PhoneNumber</label>
              <input
               type="tel"
               id="phone"
               name="phone" 
               value={formData.phone}    
               onChange={handleChange}
               required
              ></input>

            </div>
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Seller">Seller</option>
              <option value="User">User</option>
            </select>
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="auth-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
