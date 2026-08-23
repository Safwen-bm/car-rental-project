import { ChevronLeft, Gauge, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BookNowButton from "./BookNowButton";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الأسطول", path: "/fleet" },
    { name: "من نحن", path: "/about" },
  ];

  const mobileNavPaths = ["/", "/fleet", "/about", "/rent"];
  const mobileNavLabels = ["الرئيسية", "الأسطول", "من نحن", "احجز الآن"];

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-zinc-900 bg-[#e8d3a0]/90 p-5 transition"
      : "text-zinc-100 border-b border-b-white/10 p-5 hover:bg-white/5 transition";

  return (
    <header
      className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-90 transition-all duration-300 rounded-full h-14 ${
        isScrolled
          ? "bg-zinc-900/60 backdrop-blur-xl border border-[#c9a567]/20 scale-95 w-[90%] max-w-3xl"
          : "bg-zinc-200 w-[95%] max-w-4xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">
          {/* Logo — plate-chip mark */}
          <NavLink to="/" className="flex items-center">
            <div className="h-auto relative centered-row gap-2">
              <Gauge
                className={`h-7 w-7 ${
                  isScrolled ? "text-[#c9a567]" : "text-zinc-700/70"
                }`}
              />
              <p
                className={`tracking-tighter cursor-pointer text-xl clash-display font-medium ${
                  isScrolled ? "text-zinc-100" : "text-zinc-700"
                }`}
              >
                IRent
                <sup className="text-xs ml-1 text-[#c9a567]">TN</sup>
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:centered-row gap-6">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`text-sm md:text-base hover:-translate-y-0.5 ease-out transition-all duration-300 ${
                  isScrolled
                    ? "text-zinc-200 hover:text-[#e8d3a0]"
                    : "text-zinc-800 hover:text-zinc-950"
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA + user */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/rent">
              <BookNowButton type={2} />
            </Link>
            <div className="w-10 h-10 bg-zinc-800 rounded-full center-item cursor-pointer border border-[#c9a567]/20">
              <User className="h-4 w-4 text-zinc-300" />
            </div>
          </div>

          {/* Mobile Nav Icon */}
          <div className="md:hidden p-1 rounded-md">
            <button
              className="md:hidden hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={34} className="text-zinc-100" />
              ) : (
                <Menu
                  size={40}
                  className={`${isScrolled ? "text-zinc-200" : "text-zinc-800"} mt-2`}
                />
              )}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <div
            className={`absolute md:hidden -top-5 w-full h-screen bg-zinc-950/98 backdrop-blur-lg transition-transform duration-300 ease-in-out z-[999] flex flex-col justify-between ${
              isOpen ? "-translate-x-6" : "translate-x-[1500px]"
            }`}
          >
            <div className="flex items-center h-20 border-b border-b-white/10">
              <button
                onClick={() => setIsOpen(false)}
                className="centered-row p-4 gap-2"
              >
                <ChevronLeft className="text-zinc-100 rtl:rotate-180" />
                <p className="text-lg clash-display text-zinc-100">رجوع</p>
              </button>
            </div>

            <div className="col flex-1 pb-4">
              {mobileNavPaths.map((path, i) => (
                <NavLink key={i} to={path} className={getMobileLinkClass}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xl w-full clash-display text-right"
                  >
                    {mobileNavLabels[i]}
                  </button>
                </NavLink>
              ))}
            </div>

            <div className="text-center text-sm pt-8 pb-8 text-zinc-500">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#c9a567]">IRent</span>{" "}
              جميع الحقوق محفوظة.
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;