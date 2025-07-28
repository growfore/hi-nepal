"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

type NavItem = { id: string; label: string };
type Props = { navigations: NavItem[] };

export function SectionNav({ navigations }: Props) {
  const [activeId, setActiveId] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setVisible(scrollY > 200); // show only after 100px scroll

      // scroll spy
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

  if (!visible) return null;

  return (
    <div className="section-nav sticky">
      {navigations.map((nav) => (
        <div
          className={`nav-item ${activeId === nav.id ? "active" : ""}`}
          key={nav.id}
        >
          <Button link={`#${nav.id}`}>{nav.label}</Button>
        </div>
      ))}
    </div>
  );
}
