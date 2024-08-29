// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input
  const router = useRouter(); // Router to navigate after login

  // Hardcoded user credentials for demonstration
  const hardcodedUser = {
    username: 'rupin',
    password: 'rupin123'
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    // Check if the entered credentials match
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      // If match, set a simple session (could use cookies or localStorage)
      localStorage.setItem('authenticated', 'true');
      router.push('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials'); // Show error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          required
        />
        <h6>Username:rupin, password:rupin123</h6>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;