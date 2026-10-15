export const serviceDropdown = [
  "Cash for Cars",
  "Junk Car Pickup",
  "Scrap Car Removal",
  "Accidental Scrap Cars",
  "Towing Service",
  "Van Removal",
  "SUV and Truck Removal",
  "Catalytic Converter Buying",
  "Commercial Fleet Car Removal",
  "Old Car Removal",
];

export const serviceAreaLinks = [
  "Etobicoke",
  "North York",
  "East York",
  "Toronto",
  "Downtown Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Richmond Hill",
  "Oakville",
  "Markham",
  "Scarborough",
  "Bolton",
  "Aurora",
  "Burlington",
  "Newmarket",
  "Oshawa",
  "Whitby",
  "Pickering",
  "Ajax",
];

export const navLinks: { label: string; href: string; dropdown?: string[] }[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", dropdown: serviceDropdown },
  { label: "Service Areas", href: "#areas", dropdown: serviceAreaLinks },
  { label: "Contact", href: "#top-quote" },
  { label: "Blog", href: "#blog" },
];
