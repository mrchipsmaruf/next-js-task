import Link from "next/link";

async function getItem(id) {
  const res = await fetch(`https://next-js-task-3.onrender.com/api/products/${id}`, {
    cache: "no-cache",
  });
  return res.json();
}

export default async function ItemPage({ params }) {
  const item = await getItem(params.id);

  return (
    <div className="p-10 flex justify-center">
      <div
        className="
          bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full 
          transform transition duration-200 
          hover:shadow-2xl
        "
      >
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700 mb-4">{item.fullDesc}</p>

        <p className="text-lg font-semibold mb-2">
          Price: <span className="text-blue-600">${item.price}</span>
        </p>

        <Link href={`/items`}>
          <button className="px-4 py-2 w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
