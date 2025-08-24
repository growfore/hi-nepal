import ContactForm from "@/components/pages/contact-page"

export const metadata = {
  title: "Plan Your Adventure | Hi Nepal Treks",
  description: "Book your trekking or tour adventure with Hi Nepal Treks.",
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
