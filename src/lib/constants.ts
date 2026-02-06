import { Phone, Bot, Star, Cog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceLink {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export const services: ServiceLink[] = [
  {
    name: "AI Phone Answering",
    href: "/services/ai-phone-answering",
    description: "24/7 call answering that books jobs",
    icon: Phone,
  },
  {
    name: "AI Chatbots",
    href: "/services/ai-chatbots",
    description: "Website visitors become appointments",
    icon: Bot,
  },
  {
    name: "Review Management",
    href: "/services/review-management",
    description: "5-star reviews on autopilot",
    icon: Star,
  },
  {
    name: "Business Automation",
    href: "/services/business-automation",
    description: "Eliminate manual admin work",
    icon: Cog,
  },
];

export const companyLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];
