"use client";
// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        mail: email,
        motDePasse: password,
        redirect: false,
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
