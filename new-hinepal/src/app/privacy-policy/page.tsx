import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Hi Nepal Travels & Treks",
  description:
    "Read Hi Nepal Travel and Treks’ Privacy Policy to learn how our travel and trekking agency in Nepal collects, uses, and protects your personal information.",
  keywords: "privacy policy, travel and trekking agency in nepal",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    nocache: false,
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto mt-32">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Hi Nepal Travels and Treks Pvt. Ltd. Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and safeguard all your personal information when you visit
          our website or book a trip with us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Personal details (e.g., name, email, phone, date of birth, passport
            number, photos) for bookings and permits.
          </li>
          <li>
            Booking & payment details, such as trip preferences, deposits, and
            payment method.
          </li>
          <li>
            Website usage data, like cookies, IP addresses, and usage patterns.
          </li>
        </ul>
        <p className="mt-2">
          We use cookies to enhance your experience and collect analytics. By
          using our site, you consent to our use of cookies and data collection
          practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Manage and confirm bookings, customize itineraries, and coordinate
            logistics.
          </li>
          <li>
            Communicate with you—via email, phone, or messaging apps like
            WhatsApp.
          </li>
          <li>Improve our services, website, and user experience.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Sharing Your Information
        </h2>
        <p>
          We may share your information with trusted third parties such as
          guides, hotels, transport providers, or permit authorities, strictly
          for trip-related purposes. We assure that we do not sell your personal
          information to any third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data. However, no system is completely secure;
          while we strive to protect your information, we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Retention Period</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill trip
          services, comply with legal obligations, and resolve disputes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          You have the right to access, correct, delete, or restrict the
          processing of your personal information. To exercise these rights,
          contact us using the details below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          This Privacy Policy may be updated periodically. We’ll notify you of
          significant changes by posting the new policy on our website with the
          effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p>For privacy-related queries, you can reach us at:</p>
        <ul className="list-disc ml-6">
          <li>Phone no: +977 985-6035091</li>
          <li>Email: hinepaltreks@gmail.com</li>
          <li>Address: Street No. 13, Lakeside, Pokhara, Nepal</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
