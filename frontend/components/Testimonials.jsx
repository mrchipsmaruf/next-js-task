export default function Testimonials() {
  const reviews = [
    { name: "John Doe", text: "Amazing platform!" },
    { name: "Sarah Smith", text: "Super easy to use." },
    { name: "David Lee", text: "Highly recommend!" },
  ];

  return (
    <section className="bg-gray-600 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 mb-4">"{r.text}"</p>
            <h4 className="font-semibold text-blue-600">– {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
