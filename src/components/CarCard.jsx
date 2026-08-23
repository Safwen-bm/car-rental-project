import BookNowButton from "./BookNowButton";

const CarCard = ({ image, name, price }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="group h-[400px] lg:h-[380px] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/5 hover:border-[#c9a567]/50 hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {/* Text */}
      <div className="bg-gradient-to-b w-full from-zinc-950 to-transparent p-7">
        <h2 className="clash-display text-3xl group-hover:text-[#e8d3a0] transition-colors duration-300">
          {name}
        </h2>
      </div>

      {/* BTNS — only render price/booking if this card actually has a price */}
      {price && (
        <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent centered-row justify-between p-7">
          {/* Price Per Day */}
          <p className="clash-display text-lg">
            <span className="grad-gold font-semibold">{price} د.ت</span>{" "}
            <span className="text-zinc-400 text-sm">/ اليوم</span>
          </p>
          {/* Book Button */}
          <BookNowButton />
        </div>
      )}
    </div>
  );
};

export default CarCard;