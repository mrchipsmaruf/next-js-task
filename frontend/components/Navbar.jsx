"use client";

import Link from "next/link";
import { useAuth } from "@/app/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 bg-white shadow p-4 flex justify-between items-center z-50">
      <Link href="/" className="font-bold text-xl">My Store</Link>

      <div className="flex gap-6 items-center ">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact-with-us">Contact With Us</Link>

        {user ? (
          <div className="relative group">
            <button className="px-3 py-1 bg-gray-100 rounded">
              {user.email}
            </button>

            <div className="absolute hidden group-hover:block bg-white border shadow p-3 right-0 w-40">
              <Link href="/add-product" className="block py-1">Add Product</Link>
              <Link href="/manage-products" className="block py-1">Manage</Link>
              <button
                onClick={() => signOut(auth)}
                className="text-red-600 mt-2"
              >
                LogOut
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
