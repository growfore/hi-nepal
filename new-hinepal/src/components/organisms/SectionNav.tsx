"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import Link from "next/link";

type NavItem = { id: string; label: string; icon: keyof typeof Icons };
type Props = { navigations: NavItem[] };

export function SectionNav({ navigations }: Readonly<Props>) {
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

          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
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
    <div className="z-99 fixed top-[94px] mt-12 md:mt-16  flex justify-center  bg-orange-500  w-screen">
      <div className="container z-99 section-nav  flex justify-center  bg-orange-500  w-full  overflow-auto whitespace-nowrap">
        {navigations.map((nav, index) => {
          const Icon = Icons[nav.icon];
          return (
            <div
              // @ts-ignore
              ref={(el) => (itemRefs.current[nav.id] = el)}
              className={`py-2 cursor-pointer container flex items-center justify-center mx-auto hover:bg-green-600 hover:opacity-80  hover:text-white text-white ${
                activeId === nav.id ? "active" : ""
              }`}
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
                  variant={"ghost"}
                  className="hover:bg-green-600 hover:text-white text-white rounded-none text-lg text-center"
                >
                  {/* @ts-ignore */}
                  {Icon && <Icon className="w-4 h-4 mr-2" />}
                  {nav.label}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
