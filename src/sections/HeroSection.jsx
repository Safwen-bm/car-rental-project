import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[url(/luxury-sedan.jpg)] bg-no-repeat bg-cover bg-center">
      {/* Container */}
      <div className="container absolute mx-auto px-6 bottom-10 z-10">
        <div className="z-50 gap-4 md:centered-row lg:gap-80">
          {/* Main side */}
          <div className="z-10">
            <div className="col max-w-3xl mx-auto">
              {/* Sub Head */}
              <div className="mb-4">
                <div className="bg-zinc-300/20 text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center clash-display">
                  <Sparkles className="h-3.5 w-3.5 me-1" /> رحلتك، بمستوى أرقى
                </div>
              </div>

              {/* Main Head */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold lg:leading-20 mb-6 clash-display text-nowrap tracking-tight">
                <span className="grad1 clash-display">سيارات فاخرة</span>{" "}
                <br /> للإيجار
              </h1>
            </div>
          </div>

          {/* Secondary side */}
          <div>
            <p className="text-lg z-10 text-gray-200 mb-8 max-w-md">
              استمتع بحرية لا محدودة مع خدمة تأجير السيارات الفاخرة لدينا.{" "}
              <br className="hidden md:block" /> تجربة تجمع بين الفخامة
              والراحة وسهولة الحجز.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
