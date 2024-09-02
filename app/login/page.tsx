"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (data.success) {
      Cookies.set('loggedIn', 'true'); 
      router.push("/");
    } else {
      alert("Incorrect password");
    }
  };

  const handleCapsLock = (e :any) => {
    setCapsLockOn(e.getModifierState('CapsLock'));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={handleCapsLock}
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {capsLockOn && (
          <p className="text-red-500 text-sm mb-4">Caps Lock is on!</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>

  );
}
