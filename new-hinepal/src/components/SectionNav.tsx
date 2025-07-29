"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import * as Icons from "lucide-react";

type NavItem = { id: string; label: string; icon: keyof typeof Icons };
type Props = { navigations: NavItem[] };

export function SectionNav({ navigations }: Props) {
  const [activeId, setActiveId] = useState("");
  const [visible, setVisible] = useState(false);

  // Store refs for each nav item
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setVisible(scrollY > 200);

      let currentSection = "";
      for (const nav of navigations) {
        const section = document.getElementById(nav.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            currentSection = nav.id;
            break;
          }
        }
      }
      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigations]);

  // Auto-scroll active nav item into view when it changes
  useEffect(() => {
    const activeEl = itemRefs.current[activeId];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Keeps it minimal movement
        inline: "center", // Good for horizontal nav
      });
    }
  }, [activeId]);

  if (!visible) return null;

  return (
    <div className="section-nav sticky overflow-auto whitespace-nowrap">
      {navigations.map((nav) => {
        const Icon = Icons[nav.icon];
        return (
          <div
          // @ts-ignore
            ref={(el) => (itemRefs.current[nav.id] = el)}
            className={`nav-item ${activeId === nav.id ? "active" : ""}`}
            key={nav.id}
          >
            <Button link={`#${nav.id}`} navButton>
              {/* @ts-ignore */}
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {nav.label}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
