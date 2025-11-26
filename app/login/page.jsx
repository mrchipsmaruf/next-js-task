"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  // ✅ GOOGLE LOGIN FUNCTION
  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Google login failed.");
    }
  };

  return (
    <div className="py-8 flex items-center justify-center bg-[#1c1b29] px-4">
      <div className="w-full max-w-md bg-[#262538] p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-semibold text-white mb-2">Welcome back</h1>

        <p className="text-sm text-gray-300 mb-6">
          Don't have an account?{" "}
          <a href="/register" className="text-purple-400 hover:underline">
            Create one
          </a>
        </p>

        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#2f2e41] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#2f2e41] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 transition text-white py-3 rounded-lg mt-2 font-medium"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-600 w-full"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-600 w-full"></div>
        </div>

        {/* 🔥 GOOGLE LOGIN BUTTON WORKING NOW */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-600 py-3 rounded-lg text-white hover:bg-[#333247] transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="h-5 w-5"
          />
          Sign in with Google
        </button>

      </div>
    </div>
  );
}
