import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import "./Login.css"; // ✅ Keep the dark neon theme

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Failed " + error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setMessage(" Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("📩 Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage("Failed " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="reset-btn" onClick={handleResetPassword}>Forgot Password?</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Login;
