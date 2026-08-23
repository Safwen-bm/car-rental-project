import { fleetCatalog } from "../assets/assets";
import CarCard from "../components/CarCard";

const FleetPage = () => {
  return (
    <section className="section-padding bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="heading-2 clash-display grad1 from-zinc-50">
            أسطولنا الكامل
          </h1>
          <p className="text-zinc-400 max-w-lg">
            تصفّح جميع سياراتنا المتاحة واختر ما يناسب رحلتك القادمة.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fleetCatalog.map((car) => (
            <div key={car.id}>
              <CarCard
                image={car.image}
                name={car.name}
                price={car.pricePerHour}
              />
              {/* Quick specs under the card */}
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-400">
                <span className="bg-zinc-900 px-3 py-1 rounded-full">
                  {car.type}
                </span>
                <span className="bg-zinc-900 px-3 py-1 rounded-full">
                  {car.capacity} مقاعد
                </span>
                <span className="bg-zinc-900 px-3 py-1 rounded-full">
                  {car.transmission}
                </span>
                <span className="bg-zinc-900 px-3 py-1 rounded-full">
                  {car.fuelType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetPage;