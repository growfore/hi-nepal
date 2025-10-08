import { CheckCircle } from "lucide-react";
import Link from "next/link";
import TripAdvisorBadge from "@/components/trip-advisor-badge";

const expertServices = [
  "Hassle Free Booking",
  "Seamless Communication",
  "Secure Payments",
  "No Hidden Fees",
];
export default function TalkToExpertCard({ details }: { details: any }) {
  return (
    <div className="px-4 py-1 bg-white rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-300">
      <div className="booking-details flex flex-col mb-8">
        <p className="font-bold text-2xl mb-2">
          <strong>Get free Advice from Experts</strong>
        </p>
        <div className="flex gap-4 items-center my-2">
          <img
            src={"/assets/mohan-prasad-subedi.webp"}
            alt={details.title || "Mohan Prasad Subedi"}
            width={75}
            height={75}
            className="aspect-square object-cover rounded-full border-2 border-orange-500 shadow-md mb-4"
          />
          <p className="text-xl font-bold">
            Mohan Prasad Subedi <br />{" "}
            <span className="text-sm font-semibold">
              (20+ Years of Trusted Travel Experience)
            </span>
          </p>
        </div>
        <ul className="flex flex-col justify-start mb-2 gap-2">
          {expertServices.map((service, index) => {
            return (
              <li className="flex gap-1 items-center" key={index}>
                <CheckCircle className="text-green-700" size={16} />
                {service}
              </li>
            );
          })}
        </ul>
        <Link
          href="https://wa.me/9779856035091"
          target="_blank"
          className="w-full mb-2 hover:pointer-cursor flex gap-2 items-center justify-start py-1 px-4 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 font-bold"
        >
          <img
            height={42}
            width={42}
            src="/assets/whatsapp-icon.webp"
            alt="WhatsApp"
          />
          <span className="">Chat on Whatsapp</span>
        </Link>
        <TripAdvisorBadge />
      </div>
    </div>
  );
}
