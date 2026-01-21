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
  navigations: NavItem[];
};

export function SectionNav({ navigations }: Props) {
  const [activeId, setActiveId] = useState(navigations[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const didMount = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-60px 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    navigations.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigations]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const el = itemRefs.current[activeId];
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [activeId]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 z-50 w-full shadow-2xl bg-primary">
      <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar">
        {navigations.map((nav) => {
          const Icon = Icons[nav.icon];

          return (
            <div
              key={nav.id}
              // @ts-expect-error some error
              ref={(el) => (itemRefs.current[nav.id] = el)}
              className={`shrink-0 px-3 py-2 ${
                activeId === nav.id ? "bg-green-600" : ""
              }`}
            >
              <Button
                variant="ghost"
                className="text-white rounded-none text-sm flex items-center gap-2"
                onClick={() => {
                  document
                    .getElementById(nav.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* @ts-expect-error some error */}
                {Icon && <Icon className="w-4 h-4" />}
                {nav.label}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
