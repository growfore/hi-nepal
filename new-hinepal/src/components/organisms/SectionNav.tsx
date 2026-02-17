"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: keyof typeof Icons;
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

  // Scroll spy
  useEffect(() => {
    const NAV_OFFSET = 80; 

    const onScroll = () => {
      const viewportTop = NAV_OFFSET;
      const viewportBottom = window.innerHeight;

      let nextActive = activeId;

      for (const nav of navigation) {
        const el = sectionEls.current[nav.id];
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        const isVisible =
          rect.top < viewportBottom && rect.bottom > viewportTop;

        if (isVisible) {
          nextActive = nav.id;
          break; 
        }
      }

      setActiveId(nextActive);
      setVisible(window.scrollY > 300); // show nav after 300px scroll
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
          const Icon = Icons[nav.icon];

          return (
            <Button
              key={nav.id}
              variant="ghost"
              onClick={() => {
                const el = sectionEls.current[nav.id];
                if (!el) return;

                window.scrollTo({
                  top: el.offsetTop - 70, // adjust for sticky header
                  behavior: "smooth",
                });
              }}
              className={`shrink-0 px-4 py-3 rounded-none flex items-center gap-2 ${
                activeId === nav.id
                  ? "bg-green-700 text-white"
                  : "text-white"
              }`}
            >
              {/* @ts-expect-error type error */}
              {Icon && <Icon className="w-4 h-4" />}
              {nav.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
