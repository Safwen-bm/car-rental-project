import { ArrowLeft } from "lucide-react";
import { carUsageCategories } from "../assets/assets";
import CarCard from "../components/CarCard";

const EventTypeSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto mb-24">
        {/* TITLE */}
        <div className="mb-20 flex justify-between items-end">
          {/* Text */}
          <div>
            <h2 className="heading-2 clash-display grad1 from-zinc-50 max-w-2xl">
              السيارة المثالية لكل مناسبة
            </h2>
            <p className="text-zinc-400 max-w-md">
              اعثر على السيارة المناسبة لاحتياجات عملك أو رحلاتك العائلية أو
              لحظاتك الخاصة.
            </p>
          </div>
          {/* Button */}
          <button className="hidden mb:hidden bg-gradient-to-r from-[#e8d3a0] to-[#8f7748] text-zinc-900 py-3 px-5 rounded-full cursor-pointer hover:brightness-110 transition-all duration-200 ease-out clash-display h-fit lg:centered-row gap-2">
            عرض الكل <ArrowLeft className="w-8 text-sm" />
          </button>
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* CarCards */}
          {carUsageCategories.map((event, index) => (
            <CarCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypeSection;
