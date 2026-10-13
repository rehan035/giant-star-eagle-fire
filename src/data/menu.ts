export type Category = "Signature" | "Kheer" | "Cold" | "Mithai" | "Pantry";

export type MenuItem = {
  id: string;
  name: string;
  urdu: string;
  blurb: string;
  price: number;
  unit: string;
  category: Category;
  photo: string;
};

export const CATEGORIES: Array<Category | "All"> = [
  "All",
  "Signature",
  "Kheer",
  "Cold",
  "Mithai",
  "Pantry",
];

export const MENU: MenuItem[] = [
  {
    id: "rabri",
    name: "Rabri doodh",
    urdu: "ربڑی دودھ",
    blurb: "The glass the gali is known for. Thick milk, a skin of malai, not a café latte.",
    price: 700,
    unit: "1 glass",
    category: "Signature",
    photo: "/photos/rabri.jpg",
  },
  {
    id: "rasmalai",
    name: "Ras malai",
    urdu: "رس ملائی",
    blurb: "Soft chenna in saffron milk. Take a packet home if the bowl is finished.",
    price: 500,
    unit: "1 packet",
    category: "Signature",
    photo: "/photos/rasmalai.jpg",
  },
  {
    id: "kheer-200",
    name: "Kheer",
    urdu: "کھیر",
    blurb: "The small bowl. Rice, milk, nuts — the one people search Sialkot for.",
    price: 280,
    unit: "200 g",
    category: "Kheer",
    photo: "/photos/kheer.jpg",
  },
  {
    id: "kheer-500",
    name: "Kheer",
    urdu: "کھیر",
    blurb: "A family portion. Enough for the table after nihari, or to send to the house.",
    price: 600,
    unit: "500 g",
    category: "Kheer",
    photo: "/photos/kheer.jpg",
  },
  {
    id: "kheer-1kg",
    name: "Kheer",
    urdu: "کھیر",
    blurb: "The full kilo. For a daawat, or for whoever said they would only taste a spoon.",
    price: 1200,
    unit: "1 kg",
    category: "Kheer",
    photo: "/photos/kheer.jpg",
  },
  {
    id: "qulfi-falooda",
    name: "Qulfi falooda",
    urdu: "قلفی فالودہ",
    blurb: "The cold glass: rose, vermicelli, basil seed and a scoop of qulfi.",
    price: 500,
    unit: "1 piece",
    category: "Cold",
    photo: "/photos/falooda.jpg",
  },
  {
    id: "durian-falooda",
    name: "Durian falooda",
    urdu: "فالودہ",
    blurb: "A lighter falooda pour when you still have the bazaar left to walk.",
    price: 250,
    unit: "1 piece",
    category: "Cold",
    photo: "/photos/falooda.jpg",
  },
  {
    id: "gulab",
    name: "Gulab jamun",
    urdu: "گلاب جامن",
    blurb: "Warm, syruped, and gone before the tea arrives.",
    price: 380,
    unit: "250 g",
    category: "Mithai",
    photo: "/photos/barfi.jpg",
  },
  {
    id: "barfi",
    name: "Khoya barfi",
    urdu: "کھویا برفی",
    blurb: "Diamond-cut khoya barfi. The parcel that travels better than the glass does.",
    price: 2200,
    unit: "1 kg",
    category: "Mithai",
    photo: "/photos/barfi.jpg",
  },
  {
    id: "khoya",
    name: "Khalis khoya",
    urdu: "خالص کھویا",
    blurb: "Plain khoya for the house — for barfi, for halwa, for whatever the kitchen decides.",
    price: 2200,
    unit: "1 kg",
    category: "Mithai",
    photo: "/photos/barfi.jpg",
  },
  {
    id: "ghee-500",
    name: "Desi ghee",
    urdu: "دیسی گھی",
    blurb: "Half a kilo of the ghee the sweets are cooked in.",
    price: 1750,
    unit: "500 g",
    category: "Pantry",
    photo: "/photos/counter.jpg",
  },
  {
    id: "ghee-1kg",
    name: "Desi ghee",
    urdu: "دیسی گھی",
    blurb: "The tin people carry out of Trunk Bazaar along with the kheer.",
    price: 3500,
    unit: "1 kg",
    category: "Pantry",
    photo: "/photos/counter.jpg",
  },
  {
    id: "honey",
    name: "Honey",
    urdu: "شہد",
    blurb: "A small jar from the counter, if the sweet tooth wants something quieter.",
    price: 500,
    unit: "250 g",
    category: "Pantry",
    photo: "/photos/counter.jpg",
  },
];

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Salu+Gujjar+Wali+Gali+Trunk+Bazaar+Sialkot";

export const DELIVERY_URL = "https://www.foodpanda.pk/shop/ia1i/salu-gujjar-milk-shop";

/** Sallu Gujjer Kheer House, Deputy Bagh, Sialkot — published line. */
export const WHATSAPP_NUMBER = "923339999614";
export const WHATSAPP_DISPLAY = "0333 9999614";

export function whatsappHref(slip: string) {
  const text =
    slip ||
    "Assalamualaikum Salu Gujjar Sweet,\nI would like to place an order.\nSalu Gujjar Wali Gali, Trunk Bazaar, Sialkot.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function rupees(n: number) {
  return `Rs ${n.toLocaleString("en-PK")}`;
}
