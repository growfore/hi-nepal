"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Sparkles,
  List,
  Check,
  X,
  MapPin,
  CloudSunRain,
  Backpack,
  MessageCircleQuestion,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LucideEye: Eye,
  Sparkles: Sparkles,
  LucideList: List,
  LucideCheck: Check,
  LucideX: X,
  LucideMapPin: MapPin,
  LucideCloudSunRain: CloudSunRain,
  LucideBackpack: Backpack,
  LucideMessageCircleQuestion: MessageCircleQuestion,
};

type NavItem = {
  id: string;
  label: string;
  icon: string;
};

type Props = {
  navigation: NavItem[];
};

export default function SectionNav({ navigation }: Props) {
  const [activeId, setActiveId] = useState(navigation[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const sectionEls = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const map: Record<string, HTMLElement | null> = {};
    navigation.forEach(({ id }) => {
      map[id] = document.getElementById(id);
    });
    sectionEls.current = map;
  }, [navigation]);

  useEffect(() => {
    const NAV_OFFSET = 80;
    const onScroll = () => {
      const viewportBottom = window.innerHeight;
      let nextActive = activeId;
      for (const nav of navigation) {
        const el = sectionEls.current[nav.id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportBottom && rect.bottom > NAV_OFFSET) {
          nextActive = nav.id;
          break;
        }
      }
      setActiveId(nextActive);
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navigation, activeId]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 z-50 w-full bg-black">
      <div className="flex overflow-x-auto whitespace-nowrap">
        {navigation.map((nav) => {
          const Icon = iconMap[nav.icon];
          return (
            <Button
              key={nav.id}
              variant="ghost"
              onClick={() => {
                const el = sectionEls.current[nav.id];
                if (!el) return;
                window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
              }}
              className={`shrink-0 px-4 py-3 rounded-none flex items-center gap-2 ${
                activeId === nav.id ? "bg-green-700 text-white" : "text-white"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {nav.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
