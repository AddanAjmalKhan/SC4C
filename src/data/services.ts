export const services = [
  {
    tag: "SVC-01",
    vehicle: "crash" as const,
    title: "Scrap Car Removal",
    body: "We pick up any scrap vehicle, running or not, right from your location. No matter the make, model, or condition, we take it all.",
  },
  {
    tag: "SVC-02",
    vehicle: "sedan" as const,
    title: "Junk Car Pickup",
    body: "Got an old junker sitting in your garage or driveway? We haul it away at no cost to you, across the entire GTA.",
  },
  {
    tag: "SVC-03",
    vehicle: "van" as const,
    title: "Cash for Cars",
    body: "Get paid instantly when we pick up your vehicle. No lowball offers, no waiting, just fair money the same day you call.",
  },
  {
    tag: "SVC-04",
    vehicle: "truck" as const,
    title: "Towing Service",
    body: "Our registered towing team is available 7 days a week across the GTA, for breakdowns, accidents, or relocations.",
  },
];

export const acceptedVehicles = [
  { letter: "A", vehicle: "sedan" as const, title: "Sedans & Coupes", body: "Any make or model, from economy cars to luxury sedans." },
  { letter: "B", vehicle: "truck" as const, title: "SUVs & Trucks", body: "Full-size, mid-size, and light-duty pickup trucks." },
  { letter: "C", vehicle: "van" as const, title: "Vans & Minivans", body: "Passenger and cargo vans, including commercial fleet vehicles." },
  { letter: "D", vehicle: "crash" as const, title: "Accident & Damaged", body: "Collision damage, write-offs, and insurance total losses." },
  { letter: "E", vehicle: "battery" as const, title: "Non-Running Vehicles", body: "Dead battery, blown engine, or transmission failure, still gets picked up." },
  { letter: "F", vehicle: "van" as const, title: "Fleet & Multiple Vehicles", body: "Bulk pickup for businesses, dealerships, and property managers." },
];

export const pricingFactors = [
  { code: "01", title: "Vehicle Weight", body: "Heavier vehicles, such as trucks and SUVs, contain more recyclable steel and typically earn a higher scrap value." },
  { code: "02", title: "Make & Model", body: "Vehicles with in-demand parts, such as popular engines or transmissions, often fetch a higher offer than the metal value alone." },
  { code: "03", title: "Condition", body: "A complete, intact vehicle is worth more than one missing an engine, catalytic converter, or major parts." },
  { code: "04", title: "Current Scrap Metal Prices", body: "Steel and metal commodity prices shift weekly and directly move our cash offers up or down." },
  { code: "05", title: "Pickup Location", body: "Vehicles in easily accessible locations within the GTA core cost less to tow, which can improve your offer." },
];

export const whyChooseUs = [
  { title: "Free Same-Day Pickup", body: "We dispatch our tow truck to your location fast, often the same day you call." },
  { title: "We Handle All Paperwork", body: "We manage ownership transfer and vehicle deregistration, so you never deal with MTO headaches." },
  { title: "Fast & Reliable Pickup", body: "Registered operators who show up on time and handle every pickup professionally." },
  { title: "Available 7 Days a Week", body: "We work weekends and holidays. Call any time, we're always ready to pick up your vehicle." },
];

export const counters = [
  { value: 12, suffix: "K+", label: "Happy Customers" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
  { value: 30, suffix: "+", label: "Professional Experts" },
  { value: 10, suffix: "+", label: "Years Experience" },
];
