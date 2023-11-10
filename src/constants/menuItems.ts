// Icons //
import {
  MonitorSpeaker,
  PcCase,
  Computer,
  MemoryStick,
  Mouse,
  Laptop,
  TabletSmartphone,
  Database,
  Bot,
  Headphones,
  Cable,
  HdmiPort,
  Usb,
  Network,
  Router,
  PlugZap,
  Webcam,
  Server,
  Mic2,
  Mic,
  Projector,
  PictureInPicture2,
} from "lucide-react";

// const menuItems = [
//   {
//     category: "کامپیوتر",
//     icon: MonitorSpeaker,
//     subCategories: [
//       {
//         title: "قطعات و سخت افزار",
//         icon: PcCase,
//         productGroup: [
//           "مادربرد",
//           "پردازنده",
//           "هارد اینترنال",
//           "اس اس دی",
//           "رم کامپیوتر",
//           "پاور کامپیوتر",
//           "کیس کامپیوتر",
//           "کارت گرافیک",
//           "درایو نوری",
//           "مانیتور",
//         ],
//       },
//       {
//         title: "کامپیوتر آماده",
//         icon: Computer,
//         productGroup: ["کامپیوتر اسمبل شده", "مینی پی سی", "زیرو کلاینت"],
//       },
//     ],
//   },
//   {
//     category: "لوازم جانبی",
//     icon: MemoryStick,
//     subCategories: [
//       {
//         title: "جانبی کامپیوتر",
//         icon: Mouse,
//         productGroup: [
//           "کیبورد",
//           "ماوس",
//           "کیبورد و ماوس",
//           "هاب و رم‌ریدر",
//           "وب کم",
//           "هدست | هدفون | ایرفون",
//           "خنک‌کننده کامپیوتر",
//           "تجهیزات گیمینگ",
//         ],
//       },
//       {
//         title: "جانبی لپ‌تاپ",
//         icon: Laptop,
//         productGroup: [
//           "پایه و خنک‌کننده لپ‌تاپ",
//           "شارژر لپ‌تاپ",
//           "باطری لپ‌تاپ",
//           "محافظ لپ‌تاپ",
//           "کیف و کوله",
//         ],
//       },
//       {
//         title: "جانبی موبایل و تبلت",
//         icon: TabletSmartphone,
//         productGroup: [
//           "شارژر",
//           "پایه و نگهدارنده موبایل",
//           "کابل شارژ",
//           "پاور بانک",
//         ],
//       },
//       {
//         title: "تجهیزات ذخیره سازی",
//         icon: Database,
//         productGroup: ["باکس هارد", "هارد اکسترنال", "فلش مموری", "کارت حافظه"],
//       },
//       {
//         title: "تجهیزات هوشمند",
//         icon: Bot,
//         productGroup: [
//           "قلم نوری",
//           "ریموت هوشمند",
//           "پرزنتر",
//           "واقعیت مجازی",
//           "سایر",
//         ],
//       },
//       {
//         title: "سایر لوازم جانبی",
//         icon: Headphones,
//         productGroup: [
//           "پایه و نگهدارنده مانیتور",
//           "بلوتوث",
//           "ماوس‌پد",
//           "باطری",
//           "اسپری تمیز کننده",
//           "محافظ و چندراهی برق",
//           "سایر لوازم جانبی",
//         ],
//       },
//     ],
//   },
//   {
//     category: "مبدل و کابل",
//     icon: Cable,
//     subCategories: [
//       {
//         title: "مبدل‌ها",
//         icon: HdmiPort,
//         productGroup: [
//           "مبدل HDMI",
//           "مبدل Type-C",
//           "مبدل USB",
//           "مبدل DVI | VGA",
//           "مبدل Display Port",
//           "مبدل صدا",
//           "کارت توسعه",
//           "کانکتورها",
//           "سایرمبدل‌ها",
//         ],
//       },
//       {
//         title: "کابل‌های ارتباطی",
//         icon: Usb,
//         productGroup: [
//           "کابل HDMI",
//           "کابل USB",
//           "کابل پرینتر",
//           "کابل صدا",
//           "کابل VGA | DVI",
//           "کابل DISPLAY PORT",
//           "کابل KVM",
//           "کابل پاور",
//           "سایر کابل‌ها",
//         ],
//       },
//     ],
//   },

//   {
//     category: "تجهیزات شبکه",
//     icon: Network,
//     subCategories: [
//       {
//         title: "تجهیزات اکتیو",
//         icon: Router,
//         productGroup: [
//           "سوئیچ شبکه",
//           "کارت شبکه",
//           "روتر و اکسس پوینت",
//           "مودم",
//           "سایر تجهیزات اکتیو",
//         ],
//       },
//       {
//         title: "تجهیزات پسیو",
//         icon: PlugZap,
//         productGroup: [
//           "کابل شبکه",
//           "ابزار شبکه",
//           "کانکتورهای شبکه",
//           "سایر تجهیزات پسیو",
//         ],
//       },
//       {
//         title: "رک وتجهیزات",
//         icon: Server,
//         productGroup: ["رک", "تجهیزات جانبی رک", "مادربرد"],
//       },
//       {
//         title: "تجهیزات نظارتی",
//         icon: Webcam,
//         productGroup: [
//           "دوربین",
//           "ضبط کننده ویدئویی",
//           "ذخیره ساز تحت شبکه",
//           "ذخیره ساز تحت شبکه NAS",
//         ],
//       },
//     ],
//   },

//   {
//     category: "تجهیزات صوت و تصویر",
//     icon: Mic2,
//     subCategories: [
//       {
//         title: "تجهیزات صوتی",
//         icon: Mic,
//         productGroup: ["میکروفون", "ضبط کننده صدا", "کارت صدا"],
//       },
//       {
//         title: "تجهیزات تصویری",
//         icon: Projector,
//         productGroup: ["کارت کپچر", "ویدئو کنفرانس"],
//       },
//       {
//         title: "اسپلیتر | سوئیچ | اکستندر",
//         icon: PictureInPicture2,
//         productGroup: [
//           "اسپلیتر",
//           "اکستندر",
//           "سوئیچ",
//           "ماتریکس سوئیچ",
//           "KVM سوئیچ",
//           "ویدئو وال | مالتی ویو | کواد اسکرین | انکودر و دیکودر",
//         ],
//       },
//     ],
//   },
// ];

// export default menuItems;
