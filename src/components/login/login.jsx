import  { useState } from 'react';
import Navbar from '../Navbar/navbar';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
  };

  return (
    <>
    <Navbar/>
    <div style={{ maxWidth: '400px', margin: '0 auto',marginTop:'10%' }}>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0', border:'2px solid black', borderRadius:'10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0',
                border:'2px solid black', borderRadius:'10px'
             }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0',border:'2px solid black', borderRadius:'10px' }}
          >
            <option value="">Select Role</option>
            <option value="Author">Author</option>
            <option value="Librarian">Librarian</option>
            <option value="User">User</option>
          </select>
        </div>
        <button type="submit" style={{border:'2px solid green', borderRadius:'10px', padding: '10px 20px', color: 'green',  cursor: 'pointer', }}>
          Login
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <a >Signup using Google</a> <br />
        <a href='signup'>Signup using email address</a>
      </div>
    </div>
    </>
  );
}

export default LoginForm;