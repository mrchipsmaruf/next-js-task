import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-sky-400 py-24 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Discover Amazing Products
      </h1>
      <p className="text-lg text-gray-100 mb-6">
        The best place to buy and manage items effortlessly.
      </p>
      <Link
        href="/items"
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700"
      >
        Explore Now
      </Link>
    </section>
  );
}
