"use client";

import { useEffect, useRef, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import Link from "next/link";

type NavItem = { id: string; label: string; icon: keyof typeof Icons };
type Props = { navigations: NavItem[] };

export function SectionNav({ navigations }: Props) {
  const [activeId, setActiveId] = useState("");
  const [visible, setVisible] = useState(false);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const ignoreScrollUpdate = useRef(false);

  useEffect(() => {
    const NAVBAR_HEIGHT = 56;

    const handleScroll = () => {
      if (ignoreScrollUpdate.current) return;
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 1; 

      let currentSection = "";
      for (const nav of navigations) {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = nav.id;
            break;
          }
        }
      }
      setActiveId(currentSection);

      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigations]);

  useEffect(() => {
    const activeEl = itemRefs.current[activeId];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  if (!visible) return null;

  return (
    <div className="z-[99] section-nav fixed top-[30px] mt-16  px-4 md:px-24 lg:px-36 flex gap-1 bg-orange-500 py-1 w-[100vw] overflow-auto whitespace-nowrap">
      {navigations.map((nav) => {
        const Icon = Icons[nav.icon];
        return (
          <div
            // @ts-ignore
            ref={(el) => (itemRefs.current[nav.id] = el)}
            className={`my-1 container mx-auto  nav-item ${activeId === nav.id ? "active" : ""}`}
            key={nav.id}
          >
            <Link href={`#${nav.id}`}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(nav.id);

                  ignoreScrollUpdate.current = true;
                  setTimeout(() => {
                    ignoreScrollUpdate.current = false;
                  }, 3000);

                  const section = document.getElementById(nav.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              variant={'ghost'} className="hover:bg-green-600 hover:text-white text-white">
              {/* @ts-ignore */}
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {nav.label}
            </Button>
          </Link>
          </div>
  );
})}
    </div >
  );
}
