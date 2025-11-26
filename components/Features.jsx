export default function Features() {
  const features = [
    { title: "Fast Delivery", desc: "Get items on time." },
    { title: "Great Quality", desc: "Top-notch products guaranteed." },
    { title: "Secure Payments", desc: "Shop with confidence." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
