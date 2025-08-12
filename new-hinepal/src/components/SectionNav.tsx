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

  useEffect(() => {
    const NAVBAR_HEIGHT = 100;

    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 1; // +1 to avoid edge case

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
    // const handleScroll = () => {
    //   const scrollY = window.scrollY || window.pageYOffset;
    //   setVisible(scrollY > 200);

    //   let currentSection = "";
    //   for (const nav of navigations) {
    //     const section = document.getElementById(nav.id);
    //     if (section) {
    //       const rect = section.getBoundingClientRect();
    //       if (rect.top <= 240 && rect.bottom > 240) {
    //         currentSection = nav.id;
    //         break;
    //       }
    //     }
    //   }
    //   setActiveId(currentSection);
    // };

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
    <div className="z-[999] section-nav fixed top-[30px] mt-16  md:px-24 lg:px-36 flex gap-1 bg-orange-500 py-1 w-[100vw] overflow-auto whitespace-nowrap">
      {navigations.map((nav) => {
        const Icon = Icons[nav.icon];
        return (
          <div
            // @ts-ignore
            ref={(el) => (itemRefs.current[nav.id] = el)}
            className={`nav-item ${activeId === nav.id ? "active" : ""}`}
            key={nav.id}
          >
            <Link href={`#${nav.id}`}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(nav.id);
                  const section = document.getElementById(nav.id);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
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
