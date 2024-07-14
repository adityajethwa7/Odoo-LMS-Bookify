
import { Link } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <div className="links">
        <Link to="#">Signup using Google</Link>
        <Link to="/signup">Signup using email address</Link>
      </div>
    </div>
  )
}

export default Login
