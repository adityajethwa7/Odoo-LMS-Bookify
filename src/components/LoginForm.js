// components/LoginForm.js

import { createElement } from '../utils/createElement.js';

export function LoginForm({ onSubmit, onGoogleSignup, onEmailSignup }) {
  const form = createElement('form', { onSubmit },
    createElement('label', {}, 'Username'),
    createElement('input', { type: 'text', id: 'username', required: true }),
    createElement('label', {}, 'Password'),
    createElement('input', { type: 'password', id: 'password', required: true }),
    createElement('button', { type: 'submit', className: 'login-btn' }, 'Login'),
    createElement('p', { onClick: onGoogleSignup }, 'Signup using Google'),
    createElement('p', { onClick: onEmailSignup }, 'Signup using email address')
  );

  return form;
}