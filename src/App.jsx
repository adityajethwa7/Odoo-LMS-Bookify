
// import './App.css'
import Home from  './components/homepage/homepage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/login/login'
import Signup from './components/login/signup'
import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>

    // <Event />
  );
}


export default App;