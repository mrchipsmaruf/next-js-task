"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";  // keep this correct path
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email / Password Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // ✅ redirect to items OR customize:
      router.push("/"); 
      // router.push("/")  ← if you want home instead
      // router.push("/dashboard") ← your custom route
    } catch (err) {
      setError("Failed to create account");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      // ✅ redirect after Google Login
      router.push("/");
    } catch (err) {
      setError("Google login failed.");
    }
  };

  return (
    <div className="py-8 flex items-center justify-center bg-[#1c1b29] px-4 min-h-screen">
      <div className="w-full max-w-md bg-[#262538] p-8 rounded-2xl shadow-xl">
        
        <h1 className="text-3xl font-semibold text-white mb-2">
          Create an account
        </h1>

        <p className="text-sm text-gray-300 mb-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log in
          </a>
        </p>

        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#2f2e41] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#2f2e41] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

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
            Create account
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-600 w-full"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-600 w-full"></div>
        </div>

        {/* GOOGLE LOGIN BUTTON */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-600 py-3 rounded-lg text-white hover:bg-[#333247] transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>

      </div>
    </div>
  );
}
