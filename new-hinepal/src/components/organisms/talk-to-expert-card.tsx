import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TripAdvisorBadge from "@/components/molecules/trip-advisor-badge";
import { Button } from "../ui/button";

const expertServices = [
  "Hassle Free Booking",
  "Seamless Communication",
  "Secure Payments",
  "No Hidden Fees",
];
export default function TalkToExpertCard({
  details,
}: Readonly<{ details: any }>) {
  return (
    <div className="px-4 py-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-30 border border-gray-300 flex flex-col mb-8">
      <strong className="font-bold text-2xl mb-2">
        Get free Advice from Experts
      </strong>
      <div className="flex gap-4 items-center my-2">
        <Image
          src={"/assets/mohan-prasad-subedi.webp"}
          alt={details.title || "Mohan Prasad Subedi"}
          width={75}
          height={75}
          className="aspect-square object-cover rounded-full border-2 border-orange-500 shadow-md mb-4"
        />
        <p className="text-xl font-bold">
          Mohan Prasad Subedi <br />
          <span className="text-sm font-semibold">
            (20+ Years of Trusted Travel Experience)
          </span>
        </p>
      </div>
      <ul className="flex flex-col justify-start mb-2 gap-2">
        {expertServices.map((service) => {
          return (
            <li className="flex gap-1 items-center" key={service}>
              <CheckCircle className="text-green-700" size={16} />
              {service}
            </li>
          );
        })}
      </ul>
      <Link
        // href="https://wa.me/9779856035091"
        href={"/booking"}
        className="w-full mb-2 hover:pointer-cursor flex gap-2 items-center justify-start py-1  rounded-xl transition-shadow duration-300 font-bold"
      >
        {/* <Image
          height={42}
          width={42}
          src="/assets/whatsapp-logo.webp"
          alt="WhatsApp"
        /> */}
        <Button className="w-full" size={"lg"}>
          Send a message
        </Button>
      </Link>
      <TripAdvisorBadge />
    </div>
  );
}
