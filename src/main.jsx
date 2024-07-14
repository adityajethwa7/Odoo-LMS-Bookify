// main.js

import './style.css'
import { LoginForm } from './components/LoginForm';

const app = document.getElementById('app');

function handleSubmit(e) {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  console.log('Logging in with:', username, password);
  // Add your login logic here
}

function handleGoogleSignup() {
  console.log('Signup using Google');
  // Add Google signup logic
}

function handleEmailSignup() {
  console.log('Signup using email address');
  // Add email signup logic
}

function renderLoginForm() {
  app.innerHTML = '';
  app.appendChild(LoginForm({
    onSubmit: handleSubmit,
    onGoogleSignup: handleGoogleSignup,
    onEmailSignup: handleEmailSignup
  }));
}

renderLoginForm();