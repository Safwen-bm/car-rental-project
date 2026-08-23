import {
  Gauge,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الأسطول", path: "/fleet" },
    { name: "من نحن", path: "/about" },
    { name: "احجز الآن", path: "/rent" },
  ];

  const serviceLinks = [
    { name: "سيارات صالون فاخرة", path: "/fleet#luxury" },
    { name: "سيارات الدفع الرباعي", path: "/fleet#suv" },
    { name: "السيارات الكهربائية", path: "/fleet#ev" },
    { name: "تأمين شامل", path: "/services#insurance" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 section-padding !py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="col gap-4 md:col-span-2 md:pe-10">
            <div className="centered-row justify-start gap-2 w-fit">
              <Gauge className="h-7 w-7 text-[#c9a567]" />
              <p className="text-xl clash-display font-medium text-zinc-100">
                IRent<sup className="text-xs ms-1 text-[#c9a567]">TN</sup>
              </p>
            </div>
            <p className="max-w-sm leading-relaxed">
              خدمة تأجير سيارات فاخرة في تونس، تجمع بين الأناقة والراحة وسهولة
              الحجز — لرحلاتك التجارية والعائلية على حد سواء.
            </p>
            <div className="centered-row justify-start gap-3 mt-2">
              <a
                href="#"
                aria-label="فيسبوك"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#c9a567]/10 border border-white/10 hover:border-[#c9a567]/40 center-item transition-colors"
              >
                <Facebook size={18} className="hover:text-[#e8d3a0]" />
              </a>
              <a
                href="#"
                aria-label="إنستغرام"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#c9a567]/10 border border-white/10 hover:border-[#c9a567]/40 center-item transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col gap-3">
            <p className="clash-display text-lg text-zinc-100 mb-1">
              روابط سريعة
            </p>
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="hover:text-[#e8d3a0] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="col gap-3">
            <p className="clash-display text-lg text-zinc-100 mb-1">خدماتنا</p>
            {serviceLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="hover:text-[#e8d3a0] transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="centered-row justify-start gap-2">
            <Phone size={16} className="text-[#c9a567] shrink-0" />
            <span dir="ltr">+216 58 221 658</span>
          </div>
          <div className="centered-row justify-start gap-2">
            <Mail size={16} className="text-[#c9a567] shrink-0" />
            <span dir="ltr">safwenbenmabrouk@gmail.com</span>
          </div>
          <div className="centered-row justify-start gap-2">
            <MapPin size={16} className="text-[#c9a567] shrink-0" />
            <span>سوسة، تونس</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-zinc-300">IRent TN</span> — جميع
            الحقوق محفوظة.
          </p>

          {/* Developer credit */}
          <div className="centered-row gap-3 text-zinc-500">
            <span dir="ltr">Built by Safwen Ben Mabrouk</span>
            <a
              href="https://github.com/Safwen-bm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#e8d3a0] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/safwen-ben-mabrouk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#e8d3a0] transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
