"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Browse Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              bg-white rounded-xl overflow-hidden shadow-md 
              transform transition duration-200 
              hover:scale-105 hover:shadow-xl
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 mb-3">{item.shortDesc}</p>

              <p className="font-bold mb-4">Price: ${item.price}</p>

              <Link href={`/items/${item.id}`}>
                <button className="px-4 py-2 w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
