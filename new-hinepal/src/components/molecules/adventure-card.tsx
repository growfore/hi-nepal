import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdventureCard = ({
  image,
  text,
  link,
}: {
  image: string;
  text: string;
  link: string;
}) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <figure className="w-full h-64 relative">
          <Link href={link} className="block w-full h-full">
            <Image
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-t-xl"
              src={image}
              alt={text}
            />
          </Link>
        </figure>
        <div className="">
          <div className="p-4">
            <h3 className="text-2xl font-bold text-dark-blue-900 mb-2">
              <Link title={text} href={link}>
                {text?.length > 50 ? text.slice(0, 47) + "  ..." : text}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
