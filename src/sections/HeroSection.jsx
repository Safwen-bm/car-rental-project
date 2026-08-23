import { useState } from "react";
import { MapPin, CalendarDays, Car, Search } from "lucide-react";

const fleetTicker = [
  "مرسيدس S-Class",
  "بورش كايين",
  "تسلا موديل S",
  "بي إم دبليو الفئة الثالثة",
  "لاند روفر ديفندر",
  "فورد موستنج",
];

const HeroSection = () => {
  const [pickup, setPickup] = useState("تونس العاصمة");
  const [carType, setCarType] = useState("الكل");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0b] pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/luxury-sedan.jpg"
          alt="سيارة فاخرة للإيجار"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/75 to-[#0a0a0b]/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0b]/85 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-6 pb-8 pt-16 md:px-12 lg:px-24">
        {/* Top: eyebrow + headline */}
        <div className="max-w-3xl">
          {/* License-plate eyebrow */}
          <div className="plate-chip mb-6">
            <span className="plate-chip__body">آي رنت · تونس</span>
            <span className="plate-chip__strip">
              TN
              <span className="mt-0.5">★</span>
            </span>
          </div>

          <h1 className="clash-display mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="grad-gold">سيارات فاخرة</span>
            <br />
            للإيجار
          </h1>

          <p className="max-w-md text-lg text-zinc-300">
            استمتع بحرية لا محدودة مع خدمة تأجير السيارات الفاخرة لدينا.
            تجربة تجمع بين الفخامة والراحة وسهولة الحجز.
          </p>
        </div>

        {/* Bottom: glass booking widget */}
        <div className="glassmorphism mt-16 w-full rounded-2xl p-4 md:p-6">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            {/* Pickup location */}
            <label className="block">
              <span className="mb-1.5 flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-[#c9a567]" /> مكان الاستلام
              </span>
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-[#c9a567]/60"
              >
                <option>تونس العاصمة</option>
                <option>سوسة</option>
                <option>صفاقس</option>
                <option>مطار تونس قرطاج</option>
              </select>
            </label>

            {/* Date */}
            <label className="block">
              <span className="mb-1.5 flex items-center gap-1.5 text-xs text-zinc-400">
                <CalendarDays className="h-3.5 w-3.5 text-[#c9a567]" /> تاريخ
                الاستلام
              </span>
              <input
                type="date"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-[#c9a567]/60"
              />
            </label>

            {/* Car type */}
            <label className="block">
              <span className="mb-1.5 flex items-center gap-1.5 text-xs text-zinc-400">
                <Car className="h-3.5 w-3.5 text-[#c9a567]" /> نوع السيارة
              </span>
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-[#c9a567]/60"
              >
                <option>الكل</option>
                <option>صالون</option>
                <option>SUV</option>
                <option>رياضية</option>
                <option>كهربائية</option>
              </select>
            </label>

            {/* Search */}
            <button className="clash-display flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#e8d3a0] to-[#8f7748] px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-200 hover:brightness-110">
              <Search className="h-4 w-4" /> ابحث عن سيارة
            </button>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="absolute bottom-0 z-10 w-full overflow-hidden border-t border-white/10 bg-black/50 py-3 backdrop-blur-sm">
        <div className="animate-marquee clash-display flex w-max gap-16 whitespace-nowrap text-sm text-zinc-400">
          {[...fleetTicker, ...fleetTicker].map((name, i) => (
            <span key={i} className="flex items-center gap-3">
              {name} <span className="text-[#c9a567]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;