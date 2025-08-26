import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review Hi Nepal Travels and Treks’ Terms and Conditions for booking policies, payment details, cancellations, insurance requirements, and liability information.",
  keywords: "terms and conditions",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/terms-and-conditions"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const TermsAndConditions = () => {
  return (
    <>
      <div className="p-6 max-w-5xl mx-auto mt-32">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. About Us</h2>
          <p>
            All bookings are handled by Hi Nepal Travels and Treks Pvt. Ltd, a legally registered travel company based in Nepal.
            The term “trip” refers to trekking, tours, sightseeing, adventure, cultural or holiday packages arranged by us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Booking & Payments</h2>
          <ul className="list-disc ml-6">
            <li>A non-refundable deposit of 20% of the total trip cost is required to confirm your booking.</li>
            <li>Payment methods include bank transfer (client covers all transaction fees) or credit card (card fees, e.g., 4%, are borne by the client).</li>
            <li>The remaining balance must be paid before the trip departure, either at our office or via pre-agreed methods.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Cancellations & Refunds</h2>
          <h3 className="font-semibold mb-1">By Client:</h3>
          <ul className="list-disc ml-6 mb-2">
            <li>Cancellation ≥ 90 days before departure: full refund (minus deposit) with written notice.</li>
            <li>60–89 days: 75% refund of deposit.</li>
            <li>30–59 days: 50% refund of deposit.</li>
            <li>15–29 days: no refund on deposit.</li>
            <li>Within 15 days or post-departure: no refund.</li>
          </ul>
          <h3 className="font-semibold mb-1">By Hi Nepal Treks:</h3>
          <p>
            We may cancel due to natural disasters, political unrest, or insufficient participants. If canceled, we'll offer an alternative trip or refund minus incurred costs.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Amendments</h2>
          <ul className="list-disc ml-6">
            <li>Change requests must be submitted at least 90 days before departure.</li>
            <li>Amendments between 60–89 days before may incur a $50 per person fee, plus any cost differences.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Insurance & Responsibility</h2>
          <ul className="list-disc ml-6">
            <li><strong>Mandatory:</strong> You must obtain travel insurance covering medical emergencies, evacuation (including helicopter rescue), trip cancellation, and baggage loss.</li>
            <li><strong>Fitness:</strong> Travelers must be in suitable physical condition. Medical clearance may be required for strenuous treks.</li>
            <li><strong>Unforeseen Events:</strong> Weather, political unrest, or delays may cause itinerary changes. Clients bear any additional expenses.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Code of Conduct & Liability</h2>
          <ul className="list-disc ml-6">
            <li>Hi Nepal Treks reserves the right to refuse or terminate service if a traveler’s behavior endangers others or violates local laws—without refund.</li>
            <li>We engage third-party providers (e.g., hotels, transport) but are not liable for their negligence.</li>
            <li>Our liability is limited to trip services directly arranged by us.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
          <p>These Terms are governed by the laws of Nepal. Any disputes shall be resolved in Nepalese courts.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Modifications to Terms</h2>
          <p>We reserve the right to update these Terms. Clients booking after changes are deemed to accept the revised Terms.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Acknowledgment</h2>
          <p>By booking with Hi Nepal Treks, you confirm you have read, understood, and agree to these Terms & Conditions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Summary Table</h2>
          <table className="w-full border border-gray-400 border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 px-4 py-2 text-left">Section</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Privacy Policy</td>
                <td className="border border-gray-400 px-4 py-2">Data collection, usage, storage, sharing, user rights, updates</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Booking Terms</td>
                <td className="border border-gray-400 px-4 py-2">Deposit requirements, payment methods, processing fees</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Cancellation & Refunds</td>
                <td className="border border-gray-400 px-4 py-2">Sliding-scale refunds based on timeline, policy clarity</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Amendments</td>
                <td className="border border-gray-400 px-4 py-2">Fees and notice periods for changes</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Insurance & Safety</td>
                <td className="border border-gray-400 px-4 py-2">Mandatory coverage, fitness requirements, risk disclaimers</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Liability & Conduct</td>
                <td className="border border-gray-400 px-4 py-2">Responsibility limits, code of conduct, third-party interactions</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Legal Compliance</td>
                <td className="border border-gray-400 px-4 py-2">Governing law, dispute resolution, right to modify policies</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
