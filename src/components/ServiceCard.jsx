import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const ServiceCard = ({ title, description, icon, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[430px] relative overflow-hidden cursor-pointer rounded-xl border border-white/5 hover:border-[#c9a567]/40 transition-all duration-500"
    >
      {/* Text */}
      <div className="bg-gradient-to-b from-zinc-950 py-7 px-7 to-transparent">
        <h2 className="clash-display text-5xl">{title}</h2>
      </div>

      {/* Overlay text */}
      {isHovered && (
        <div className="absolute flex-col w-full min-h-full bg-gradient-to-b from-zinc-950 to-transparent flex-1 px-8 top-0 center-item">
          <div className="mb-2 text-[#c9a567]">{icon}</div>
          <p className="text-center text-zinc-200">{description}</p>
        </div>
      )}

      {/* Button */}
      <div className="bg-gradient-to-t absolute bottom-0 from-zinc-950 py-7 px-7 to-transparent flex min-w-full justify-end">
        <div className="h-16 w-16 bg-zinc-100 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-[#e8d3a0] hover:to-[#8f7748] transition-all duration-300 ease-out hover:-translate-y-1 center-item">
          <ArrowRight className="text-zinc-800 font-semibold -rotate-45 rtl:rotate-[135deg] hover:-translate-y-1 transition" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;