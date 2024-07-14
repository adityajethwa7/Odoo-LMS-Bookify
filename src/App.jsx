import React from 'react';
// import './App.css'
import Home from  './components/homepage/homepage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginForm from './components/login/login';
import SignupForm from './components/login/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </Router>
    </div>

    // <Event />
  );
}


export default App;