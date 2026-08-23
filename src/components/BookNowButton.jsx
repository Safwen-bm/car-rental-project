const BookNowButton = ({ type }) => {
  const isPrimary = type === 2;

  return (
    <button
      className={`clash-display rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out cursor-pointer ${
        isPrimary
          ? "bg-gradient-to-r from-[#e8d3a0] to-[#8f7748] text-zinc-900 hover:brightness-110"
          : "border border-[#c9a567]/40 bg-white/5 text-zinc-100 backdrop-blur-sm hover:bg-[#c9a567]/10 hover:border-[#c9a567]"
      }`}
    >
      احجز الآن
    </button>
  );
};

export default BookNowButton;