"use client";

import { useAuth } from "@/app/AuthProvider";


export default function CallToAction() {
  const { user } = useAuth(); // get logged-in user

  return (
    <section className="py-20 bg-blue-600 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="opacity-80 mb-6">
        Create an account and start managing your products today.
      </p>

      <a
        href={user ? "/add-product" : "/register"}
        className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
      >
        {user ? "Add Product" : "Join Now"}
      </a>
    </section>
  );
}
