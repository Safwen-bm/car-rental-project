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
      className="h-[400px] lg:h-[380px] rounded cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {/* Text */}
      <div className="bg-gradient-to-b w-full from-zinc-950 to-transparent p-7">
        <h2 className="text-3xl clash-display">{name}</h2>
      </div>

      {/* BTNS — only render price/booking if this card actually has a price */}
      {price && (
        <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent centered-row justify-between p-7">
          {/* Price Per Day */}
          <p className="text-lg clash-display">{price} د.ت / اليوم</p>
          {/* Book Button */}
          <BookNowButton />
        </div>
      )}
    </div>
  );
};

export default CarCard;