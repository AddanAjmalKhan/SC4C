import type { IconName } from "@/components/ui/Icon";

export const howItWorksSteps: {
  label: string;
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    label: "Step 01",
    icon: "phone",
    title: "Get a Free Quote",
    body: "Call, WhatsApp, or fill out our online form with your car's make, model, year, and condition for an instant estimate.",
  },
  {
    label: "Step 02",
    icon: "clock",
    title: "Book Your Pickup Time",
    body: "Choose a same-day or next-day slot that works for you, including evenings and weekends.",
  },
  {
    label: "Step 03",
    icon: "truck",
    title: "We Tow It Away, Free",
    body: "Our registered driver arrives on time, handles the ownership transfer paperwork, and loads your vehicle at no cost to you.",
  },
  {
    label: "Step 04",
    icon: "cash",
    title: "Get Paid on the Spot",
    body: "You receive full cash payment the moment we take possession of the vehicle. No waiting, no e-transfers, no delays.",
  },
];
