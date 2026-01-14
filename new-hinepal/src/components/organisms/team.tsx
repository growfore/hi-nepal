import { placeholderImage } from "@/utils/placeholder-image";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="pb-4 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
            Our Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            Meet the dedicated professionals of the best local trekking company
            in Nepal, who make your travel dreams a reality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {teamData.map((item) => {
            return (
              <div key={item.name} className="flex justify-center">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
                  <figure className="w-full h-72 relative">
                    <Image
                      placeholder="blur"
                      blurDataURL={placeholderImage}
                      height={280}
                      width={320}
                      alt={item.name}
                      src={item.image}
                      className="w-full h-full object-cover"
                      priority={false}
                    />
                  </figure>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-dark-blue-900 mb-1">
                      {item.name}
                    </h3>
                    <div className="text-orange-500 font-semibold text-sm mb-3">
                      {item.position}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

const teamData = [
  {
    name: "YOG PRASAD POUDEL",
    position: "Travel Guide",
    image: "/assets/yog-parsad-subedi.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "BHUWAN SHIVABHAKTI",
    position: "Travel Guide",
    image: "/assets/bhuwan-shivabhakti.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "BAM BAHADUR TAMANG",
    position: "Travel Guide",
    image: "/assets/bam-bahadur-tamang.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "KRISHNA PRASAD SUBEDI",
    position: "Travel Guide",
    image: "/assets/krishana-prasad-subedi.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "Prem Raj Dahal",
    position: "Travel Guide",
    image: "/assets/prem-raj-dahal.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "Shovakhar Bhugai",
    position: "Travel Guide",
    image: "/assets/shovakhar-bhugai.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "Sudip Subedi",
    position: "Travel Guide",
    image: "/assets/sudip-subedi.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "Ram Krishna Timilsina",
    position: "Travel Guide",
    image: "/assets/ramkrishna-timilsina.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
  {
    name: "Shree Krishna Subedi",
    position: "Travel Guide",
    image: "/assets/shreekrishna-subedi.webp",
    description:
      "We are a team of experienced tour guides who are passionate about sharing our knowledge and expertise with you.",
  },
];
