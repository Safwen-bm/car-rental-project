import weekendGetawayCar from "./images/weekend-getaway.jpg";
import luxurySedan from "./images/luxury-sedan.jpg";
import compactEv from "./images/compact-ev.jpg";
import premiumSedan from "./images/premium-sedan.jpg";
import flexibleHandoverCar from "./images/flexible-handover.avif";
import familySuv from "./images/family-suv.jpg";
import luxurySuv from "./images/luxury-suv.jpg";
import electricSportster from "./images/electric-sportster.jpg";
import roadsideSupportCar from "./images/roadside-support.jpg";
import insuranceCoverageCar from "./images/insurance-coverage.jpg";
import compactHatchback from "./images/compact-hatchback.jpg";
import sportsCoupe from "./images/sports-coupe.jpg";
import pickupTruck from "./images/pickup-truck.jpg"; // MISSING - add this file (Ford Ranger)

// Feature Icons
import { FaBluetooth, FaChargingStation } from "react-icons/fa";
import { BiChild, BiSpeaker } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { AirVent } from "lucide-react";

import {
  Car,
  Fuel,
  LifeBuoy,
  MapPin,
  BatteryCharging,
  ShieldCheck,
  BatteryChargingIcon,
  Clock10,
  Newspaper,
  Sparkles,
} from "lucide-react";

const vehicleImages = {
  weekendGetawayCar,
  luxurySedan,
  compactEv,
  premiumSedan,
  flexibleHandoverCar,
  familySuv,
  luxurySuv,
  electricSportster,
  roadsideSupportCar,
  insuranceCoverageCar,
  compactHatchback,
  sportsCoupe,
  pickupTruck,
};

const featuredServices = [
  {
    title: "سيارات صالون فاخرة",
    description:
      "استمتع بالأناقة والراحة مع أرقى سيارات الصالون الفاخرة، مثالية للأعمال أو الترفيه.",
    icon: <Car size={24} />,
    imageSrc: vehicleImages.luxurySedan,
    link: "/fleet#luxury",
  },
  {
    title: "سيارات الدفع الرباعي",
    description:
      "سيارات واسعة ومتعددة الاستخدامات لرحلات العائلة والمغامرات الجماعية أو التضاريس الصعبة.",
    icon: <Fuel size={24} />,
    imageSrc: vehicleImages.familySuv,
    link: "/fleet#suv",
  },
  {
    title: "السيارات الكهربائية",
    description:
      "قُد بأسلوب صديق للبيئة مع تشكيلتنا من السيارات الكهربائية الحديثة، الجامعة بين الاستدامة والأداء.",
    icon: <BatteryCharging size={24} />,
    imageSrc: vehicleImages.compactEv,
    link: "/fleet#ev",
  },
  {
    title: "مساعدة على الطريق ٢٤/٧",
    description:
      "راحة بال تامة بفضل دعم متواصل على مدار الساعة لأي موقف غير متوقع خلال رحلتك.",
    icon: <LifeBuoy size={24} />,
    imageSrc: vehicleImages.roadsideSupportCar,
    link: "/services#support",
  },
  {
    title: "استلام وتسليم مرن",
    description:
      "اختر المكان الأنسب لاستلام السيارة وإعادتها، حسب جدولك الخاص.",
    icon: <MapPin size={24} />,
    imageSrc: vehicleImages.flexibleHandoverCar,
    link: "/services#pickup",
  },
  {
    title: "تأمين شامل",
    description: "خيارات تغطية متكاملة لتجربة إيجار خالية من القلق.",
    icon: <ShieldCheck size={24} />,
    imageSrc: vehicleImages.insuranceCoverageCar,
    link: "/services#insurance",
  },
];

// None of these 4 images overlap with featuredServices
// (featuredServices uses: luxurySedan, familySuv, compactEv, roadsideSupportCar,
// flexibleHandoverCar, insuranceCoverageCar — all avoided below)
const carUsageCategories = [
  {
    name: "رحلات العمل",
    image: vehicleImages.premiumSedan,
  },
  { name: "عطلات عائلية", image: vehicleImages.luxurySuv },
  { name: "رحلات نهاية الأسبوع", image: vehicleImages.weekendGetawayCar },
  {
    name: "مناسبات خاصة",
    image: vehicleImages.sportsCoupe,
  },
];

const featureIcons = [
  {
    name: "Bluetooth",
    icon: FaBluetooth,
    label: "بلوتوث",
    colorClass: "text-sky-500/90",
  },
  {
    name: "AC",
    icon: AirVent,
    label: "تكييف",
    colorClass: "text-zinc-400",
  },
  {
    name: "GPS",
    icon: FaLocationDot,
    label: "تتبع GPS",
    colorClass: "text-zinc-400",
  },
  {
    name: "FastCharging",
    icon: FaChargingStation,
    label: "شحن سريع",
    colorClass: "text-zinc-400",
  },
  {
    name: "PremiumAudio",
    icon: BiSpeaker,
    label: "نظام صوتي فاخر",
    colorClass: "text-zinc-400",
  },
  {
    name: "ChildSeats",
    icon: BiChild,
    label: "مقاعد أطفال",
    colorClass: "text-zinc-400",
  },
];

// Preview pool used by the fleet listing page.
// Now 9 entries (one per car in fleetCatalog below, including the new Ford Ranger),
// all unique.
const fleetPreviewImages = [
  vehicleImages.luxurySedan,       // 0 -> CAR001 Mercedes S-Class
  vehicleImages.familySuv,         // 1 -> CAR002 Land Rover Defender
  vehicleImages.sportsCoupe,       // 2 -> CAR003 Ford Mustang
  vehicleImages.compactEv,         // 3 -> CAR004 VW ID.3
  vehicleImages.premiumSedan,      // 4 -> CAR005 BMW 3 Series
  vehicleImages.compactHatchback,  // 5 -> CAR006 VW Golf MK8
  vehicleImages.luxurySuv,         // 6 -> CAR007 Porsche Cayenne
  vehicleImages.electricSportster, // 7 -> CAR008 Tesla Model S
  vehicleImages.pickupTruck,       // 8 -> CAR009 Ford Ranger
];

// Fleet catalog — real models, real specs.
const fleetCatalog = [
  {
    id: "CAR001",
    name: "مرسيدس S-Class",
    type: "صالون",
    capacity: 5,
    pricePerHour: 250.0,
    color: "أسود",
    transmission: "أوتوماتيك",
    fuelType: "بنزين",
    features: ["GPS", "Bluetooth", "AC"],
    image: fleetPreviewImages[0],
  },
  {
    id: "CAR002",
    name: "لاند روفر ديفندر",
    type: "SUV",
    capacity: 7,
    pricePerHour: 190.0,
    color: "أبيض",
    transmission: "أوتوماتيك",
    fuelType: "بنزين",
    features: ["GPS", "AC", "ChildSeats"],
    image: fleetPreviewImages[1],
  },
  {
    id: "CAR003",
    name: "فورد موستنج",
    type: "رياضية",
    capacity: 2,
    pricePerHour: 160.0,
    color: "أحمر",
    transmission: "يدوي",
    fuelType: "بنزين",
    features: ["GPS", "Bluetooth", "PremiumAudio"],
    image: fleetPreviewImages[2],
  },
  {
    id: "CAR004",
    name: "فولكس فاجن ID.3",
    type: "EV",
    capacity: 5,
    pricePerHour: 80.0,
    color: "أزرق",
    transmission: "أوتوماتيك",
    fuelType: "كهرباء",
    features: ["GPS", "Bluetooth", "FastCharging"],
    image: fleetPreviewImages[3],
  },
  {
    id: "CAR005",
    name: "بي إم دبليو الفئة الثالثة",
    type: "صالون",
    capacity: 5,
    pricePerHour: 135.0,
    color: "أبيض",
    transmission: "أوتوماتيك",
    fuelType: "بنزين",
    features: ["GPS", "Bluetooth", "Sunroof"],
    image: fleetPreviewImages[4],
  },
  {
    id: "CAR006",
    name: "فولكس فاجن جولف MK8",
    type: "مدمجة",
    capacity: 5,
    pricePerHour: 100.0,
    color: "رمادي",
    transmission: "يدوي",
    fuelType: "بنزين",
    features: ["AC", "PremiumAudio"],
    image: fleetPreviewImages[5],
  },
  {
    id: "CAR007",
    name: "بورش كايين",
    type: "SUV",
    capacity: 5,
    pricePerHour: 200.0,
    color: "أسود",
    transmission: "أوتوماتيك",
    fuelType: "ديزل",
    features: ["GPS", "AC", "LeatherSeats"],
    image: fleetPreviewImages[6],
  },
  {
    id: "CAR008",
    name: "تسلا موديل S",
    type: "EV",
    capacity: 5,
    pricePerHour: 130.0,
    color: "فضي",
    transmission: "أوتوماتيك",
    fuelType: "كهرباء",
    features: ["GPS", "PremiumAudio", "HeatedSeats"],
    image: fleetPreviewImages[7],
  },
  {
    id: "CAR009",
    name: "فورد رينجر",
    type: "بيك أب",
    capacity: 5,
    pricePerHour: 120.0,
    color: "أبيض",
    transmission: "أوتوماتيك",
    fuelType: "ديزل",
    features: ["GPS", "Bluetooth", "AC"],
    image: fleetPreviewImages[8],
  },
];

// Highlight strip shown above the 3D CTA section.
const ctaHighlights = [
  {
    id: "001",
    icon: <Newspaper className="w-10 h-10" />,
    name: "حجز سلس وسريع",
    action: null,
    isPlaying: true,
  },
  {
    id: "002",
    icon: <Sparkles className="w-14 h-14" />,
    name: "امتيازات حصرية للعملاء الدائمين",
    action: null,
    isPlaying: false,
  },
  {
    id: "003",
    icon: <Clock10 className="w-25 h-25" />,
    name: "غيّر أو ألغِ حجزك حتى ٧٢ ساعة قبل موعد الاستلام",
    action: null,
    isPlaying: false,
  },
  {
    id: "004",
    icon: <BatteryChargingIcon className="w-10 h-15" />,
    name: "شحن مجاني",
    action: null,
    isPlaying: false,
  },
];

// Paint options for the 3D configurator.
const carPaintColors = [
  "#FFFFFF", // أبيض ناصع
  "#0A0A0A", // أسود داكن
  "#1C1C1C", // أسود معدني
  "#837F7D", // رمادي مغناطيسي
  "#5F778C", // أزرق كافالري
  "#0B1F3A", // أزرق داكن جدا
  "#6B0000", // أحمر داكن
  "#8B0000", // أحمر ياقوتي لؤلؤي
  "#C1BFC0", // فضي معدني
  "#3D3F42", // رمادي غامق
  "#4A5D52", // أخضر عسكري
  "#7F7A70", // برونزي معدني
  "#28282B", // أسود مطفي
];

export {
  vehicleImages,
  featuredServices,
  carUsageCategories,
  featureIcons,
  fleetPreviewImages,
  fleetCatalog,
  ctaHighlights,
  carPaintColors,
};