import ContactForm from "@/components/pages/contact-page"
import endpoints from "@/constant/endpoints";
import { TPackageDetails } from "@/types/types";
import { get } from "@/utils/request-handler";

export const metadata = {
  title: "Plan Your Adventure - Hi Nepal Travels & Treks",
  description: "Plan your Himalayan adventure with Hi Nepal Travels and Treks. Booking trekking, tours, and adventure sports in Nepal through our easy online inquiry form.",
  keywords: "trekking, tour, adventure sports, bookings, travel and trekking agency in nepal",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/booking"
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}

export default async function BookingPage() {
  let packages: TPackageDetails[] = [];
  await get({
    endPoint: endpoints.PACKAGES,
    token: '',
    success: (_, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      return message;
    },
  });

  const sortedPackges = packages.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

  return (
    <>
      <ContactForm packages={sortedPackges} />
    </>
  )
}
