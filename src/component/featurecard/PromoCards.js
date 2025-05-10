function PromoCard({ image, title, description }) {
  return (
    <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mt-auto">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition">
            ROOM OFFER
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PromoCards() {
  const promotions = [
    {
      image: "/city_night.svg",
      title: "Ramadhan SALE 50%",
      description:
        "laoodjiawin kewheih jubjsdh ubajja fjab jb ahbj wdjab jaxnbja djuabaw siualQ FJEW DSJ MAQBD ABBNSJbudghujd u udbbasnnxu",
    },
    {
      image: "/city_night.svg",
      title: "New Year Offer 25%",
      description:
        "laoodjiawin kewheih jubjsdh ubajja fjab jb ahbj wdjab jaxnbja djuabaw siualQ FJEW DSJ MAQBD ABBNSJbudghujd u udbbasnnxu",
    },
    {
      image: "/city_night.svg",
      title: "Ramadhan SALE 50%",
      description:
        "laoodjiawin kewheih jubjsdh ubajja fjab jb ahbj wdjab jaxnbja djuabaw siualQ FJEW DSJ MAQBD ABBNSJbudghujd u udbbasnnxu",
    },
  ];

  return (
    <div className="bg-beige px-4 sm:px-6 lg:px-20 py-10 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {promotions.map((promo, index) => (
          <PromoCard
            key={index}
            image={promo.image}
            title={promo.title}
            description={promo.description}
          />
        ))}
      </div>
    </div>
  );
}
