"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      shortDesc,
      fullDesc,
      price: Number(price),
      date: new Date().toISOString().split("T")[0],
      image: image || "https://via.placeholder.com/300?text=New+Product",
    };

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    router.push("/items");
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full border border-gray-200">
        <h2 className="text-3xl font-bold mb-5 text-gray-800">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Short Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />

          <textarea
            placeholder="Full Description"
            className="w-full p-3 border border-gray-300 rounded-lg h-28 focus:ring focus:ring-blue-300"
            value={fullDesc}
            onChange={(e) => setFullDesc(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
