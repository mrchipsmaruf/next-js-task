import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">MyShop</h3>
          <p className="text-gray-400">© 2025 All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/items" className="hover:text-blue-400">Items</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <p className="text-gray-400">Facebook • Instagram • Twitter</p>
        </div>
      </div>
    </footer>
  );
}
