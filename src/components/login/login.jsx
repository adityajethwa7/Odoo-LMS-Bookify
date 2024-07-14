import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';

function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert("Welcome to Bookify");
        navigate("/");
      } else {
        console.error("Login failed:", response.status, response.statusText);
        alert("Failed to log in. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '10%' }}>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              style={{ width: '100%', padding: '8px', margin: '5px 0', border: '2px solid black', borderRadius: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              style={{
                width: '100%', padding: '8px', margin: '5px 0',
                border: '2px solid black', borderRadius: '10px'
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleForm}
              style={{ width: '100%', padding: '8px', margin: '5px 0', border: '2px solid black', borderRadius: '10px' }}
            >
              <option value="">Select Role</option>
              <option value="Author">Author</option>
              <option value="Librarian">Librarian</option>
              <option value="User">User</option>
            </select>
          </div>
          <button type="submit" style={{ border: '2px solid green', borderRadius: '10px', padding: '10px 20px', color: 'green', cursor: 'pointer' }}>
            Login
          </button>
        </form>
        <div style={{ marginTop: '20px' }}>
        <a href="http://localhost:5000/auth/google">Signup using Google</a> <br />
          <a href='signup'>Signup using email address</a>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
