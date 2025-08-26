import ContactForm from "@/components/pages/contact-page"

export const metadata = {
  title: "Plan Your Adventure | Hi Nepal Treks",
  description: "Plan your Himalayan adventure with Hi Nepal Travels and Treks. Booking trekking, tours, and adventure sports in Nepal through our easy online inquiry form.",
  keywords: "trekking, tour, adventure sports, bookings, travel and trekking agency in nepal",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/booking"
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BookingPage() {
  return <ContactForm />
}
