"use client";
import { useEffect, useState } from "react";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <b>{p.name}</b> — ${p.price}
        </div>
      ))}
    </div>
  );
}
