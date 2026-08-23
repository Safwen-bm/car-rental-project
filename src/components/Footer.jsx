import { Gauge, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 section-padding !py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="col gap-4 md:col-span-2 md:pe-10">
            <div className="centered-row justify-start gap-2 w-fit">
              <Gauge className="h-7 w-7 text-zinc-100" />
              <p className="text-xl clash-display font-medium text-zinc-100">
                IRent<sup className="text-xs ms-1">TN</sup>
              </p>
            </div>
            <p className="max-w-sm leading-relaxed">
              خدمة تأجير سيارات فاخرة في تونس، تجمع بين الأناقة والراحة
              وسهولة الحجز — لرحلاتك التجارية والعائلية على حد سواء.
            </p>
            <div className="centered-row justify-start gap-3 mt-2">
              <a
                href="#"
                aria-label="فيسبوك"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 center-item transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="إنستغرام"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 center-item transition-colors"
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
                className="hover:text-zinc-100 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="col gap-3">
            <p className="clash-display text-lg text-zinc-100 mb-1">
              خدماتنا
            </p>
            {serviceLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="hover:text-zinc-100 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-zinc-800 pt-8 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="centered-row justify-start gap-2">
            <Phone size={16} className="text-zinc-500 shrink-0" />
            <span dir="ltr">+216 00 000 000</span>
          </div>
          <div className="centered-row justify-start gap-2">
            <Mail size={16} className="text-zinc-500 shrink-0" />
            <span dir="ltr">contact@irent.tn</span>
          </div>
          <div className="centered-row justify-start gap-2">
            <MapPin size={16} className="text-zinc-500 shrink-0" />
            <span>سوسة، تونس</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-300">IRent TN</span> —
          جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
