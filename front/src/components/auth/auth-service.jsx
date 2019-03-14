// auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    const service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup(username, password, email) {
    return this.service.post('/signup', { username, password, email })
      .then(response => response.data);
  }

  loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data);
  }

  login(username, password) {
    return this.service.post('/login', { username, password })
      .then(response => response.data);
  }

  logout() {
    return this.service.get('/logout', {})
      .then(response => response.data);
  }
}

export default AuthService;
