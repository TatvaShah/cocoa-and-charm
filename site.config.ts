import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Cocoa & Charm",
  tagline: "Artisan dipped treats in Mississauga, with local pickup and GTA delivery.",
  category: "Artisan dipped treats",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://cocoa-and-charm-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Dipped treats in Mississauga",
    headline: "Custom chocolate covered treats and loaded pretzels",
    subhead: "Cocoa & Charm makes artisan dipped treats in Mississauga, including chocolate covered Oreos, strawberries and pretzels, decorated Rice Krispies treats, and loaded pretzels. Local pickup is available, with GTA delivery. A November 9 post opened Christmas loaded pretzel preorders. Send an Instagram message to order.",
    images: [
      { src: "/images/post-6.jpg", alt: "A Christmas loaded pretzel gift box from Cocoa & Charm", width: 941, height: 1254 },
      { src: "/images/post-1.jpg", alt: "Cinderella inspired chocolate covered Oreos from Cocoa & Charm", width: 1080, height: 1440 },
      { src: "/images/post-5.jpg", alt: "Pink and white chocolate covered strawberries, Oreos and pretzels from Cocoa & Charm", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the treats", href: "#gallery" },
  },

  highlights: [
    "Custom chocolate covered Oreos, strawberries and pretzels",
    "Loaded pretzels in five posted flavours",
    "Wedding and event dessert tables",
    "Mississauga pickup and GTA delivery",
  ],

  about: {
    title: "Welcome to Cocoa & Charm",
    body: [
      "Cocoa & Charm makes artisan dipped treats in Mississauga, with local pickup and GTA delivery. Posted work includes custom chocolate covered Oreos, chocolate covered strawberries, chocolate covered pretzels and pretzel rods, decorated Rice Krispies treats, and loaded pretzels. The Instagram bio also lists chocolate bars. Treats have been made for birthdays, baby showers and weddings, including a wedding order of 28 dozen treats, as posted.",
      "A November 9 post introduced loaded pretzels in five flavours, with Christmas preorders for a Christmas Box of 5 pieces at $59.99, a Mini Box of 3 pieces at $37.99, and individual loaded pretzels at $13.99, as posted. Send an Instagram message to inquire or preorder.",
    ],
    image: { src: "/images/post-6.jpg", alt: "A Christmas loaded pretzel gift box from Cocoa & Charm", width: 941, height: 1254 },
  },

  menu: {
    label: "Menu",
    title: "Treats and boxes",
    variant: "list",
    showPrices: false,
    priceNote: "Christmas loaded pretzel prices were posted on November 9, 2026, and may change. Send an Instagram message to preorder or for other pricing.",
    groups: [
      {
        title: "Loaded pretzels",
        items: [
          { name: "Loaded pretzel flavours", description: "Posted as S'mores, Strawberries & Cream, Salted Caramel, Cookies & Cream, and Dark Peanut Butter Pistachios." },
          { name: "Christmas Box (5 pieces)", description: "Posted at $59.99." },
          { name: "Mini Box (3 pieces)", description: "Posted at $37.99." },
          { name: "Individual loaded pretzel", description: "Posted at $13.99." },
        ],
      },
      {
        title: "Custom dipped treats",
        items: [
          { name: "Chocolate covered Oreos" },
          { name: "Chocolate covered strawberries" },
          { name: "Chocolate covered pretzels and pretzel rods" },
          { name: "Decorated Rice Krispies treats" },
          { name: "Wedding and event dessert tables", description: "A November post described a wedding order of 28 dozen treats." },
        ],
      },
    ],
    footnote: "Local pickup in Mississauga, with GTA delivery, as posted.",
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-6.jpg", width: 941, height: 1254, alt: "A Christmas loaded pretzel gift box from Cocoa & Charm", caption: "A Christmas loaded pretzel box", href: "https://www.instagram.com/p/Dfh0YrRnMAj/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Cinderella inspired chocolate covered Oreos from Cocoa & Charm", caption: "Custom chocolate covered Oreos", href: "https://www.instagram.com/p/Df4_gfiHDo4/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Pink and white chocolate covered strawberries, Oreos and pretzels from Cocoa & Charm", caption: "Matching dipped treats", href: "https://www.instagram.com/p/DfhY2bAnMW3/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "White and gold wedding Rice Krispies treats from Cocoa & Charm", caption: "Wedding Rice Krispies treats", href: "https://www.instagram.com/p/DfYVN4FHK3u/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1440, alt: "White chocolate covered pretzels with gold detail from Cocoa & Charm", caption: "Wedding pretzels", href: "https://www.instagram.com/p/DfSAMKjnBT8/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Custom colour-matched dipped treats from Cocoa & Charm", caption: "Treats in a party colour palette", href: "https://www.instagram.com/p/Dfm6hbRnEZc/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "cocoa.and.charm",
    embeds: ["https://www.instagram.com/p/Dfh0YrRnMAj/", "https://www.instagram.com/p/Df4_gfiHDo4/", "https://www.instagram.com/p/DfhY2bAnMW3/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message to inquire or preorder. Local pickup is in Mississauga, and GTA delivery is available.",
    dmMessage: "Hi Cocoa & Charm! I would like to order.\nDate needed:\nTreats or loaded pretzel box:\nColours or flavour:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/cocoa.and.charm" },
    ],
    note: "Local pickup in Mississauga, with GTA delivery, as posted.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message to inquire or preorder, as posted." },
    { q: "Do you deliver?", a: "Local pickup is available in Mississauga, and GTA delivery is available, as posted." },
    { q: "What are the loaded pretzel prices?", a: "A November 9 post listed a Christmas Box of 5 pieces at $59.99, a Mini Box of 3 pieces at $37.99, and individual loaded pretzels at $13.99." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga, ON, with GTA delivery",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/cocoa.and.charm/" },
    ],
  },

  seo: {
    title: "Cocoa & Charm | Artisan dipped treats in Mississauga",
    description: "Mississauga maker of chocolate covered Oreos, strawberries, pretzels and loaded pretzels, with local pickup and GTA delivery. Christmas boxes posted from $37.99. Order by Instagram DM.",
    keywords: ["Cocoa & Charm", "chocolate covered Oreos Mississauga", "loaded pretzels GTA", "wedding dessert table Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
