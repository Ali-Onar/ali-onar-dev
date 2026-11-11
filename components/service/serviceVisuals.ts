import {
  AppWindow,
  Boxes,
  GraduationCap,
  LifeBuoy,
  Lightbulb,
  Megaphone,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "@/lib/services";

type Visual = {
  Icon: LucideIcon;
  /** Icon tile: border, background and icon color. */
  tone: string;
  /** Solid accent used for small marks. */
  dot: string;
};

export const serviceVisuals: Record<ServiceKey, Visual> = {
  web: {
    Icon: AppWindow,
    tone: "border-sky-200 bg-sky-50 text-sky-700",
    dot: "bg-sky-500",
  },
  mobile: {
    Icon: Smartphone,
    tone: "border-indigo-200 bg-indigo-50 text-indigo-700",
    dot: "bg-indigo-500",
  },
  saas: {
    Icon: Boxes,
    tone: "border-orange-200 bg-orange-50 text-brand-deep",
    dot: "bg-brand",
  },
  rescue: {
    Icon: LifeBuoy,
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  seo: {
    Icon: TrendingUp,
    tone: "border-rose-200 bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
  },
  ads: {
    Icon: Megaphone,
    tone: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  consulting: {
    Icon: Lightbulb,
    tone: "border-violet-200 bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
  },
  training: {
    Icon: GraduationCap,
    tone: "border-teal-200 bg-teal-50 text-teal-700",
    dot: "bg-teal-500",
  },
};
