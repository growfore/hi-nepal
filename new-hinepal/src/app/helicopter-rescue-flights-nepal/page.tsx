import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Emergency Helicopter Rescue in Nepal: 24/7 Evacuation",
  description:
    "Emergency helicopter rescue flights in Nepal for altitude sickness, injuries & remote evacuations. Fast response and trusted rescue coordination.",
}

export default function HelicopterRescuePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-xl md:text-3xl font-bold mb-4 tracking-tight">
            Helicopter Rescue Flights in Nepal: Emergency Evacuation & Life-Saving Air Rescue
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Helicopter Rescue Flights in Nepal",
              "Emergency Helicopter Rescue Nepal",
              "Medical Evacuation Helicopter Nepal",
              "Trekking Rescue Helicopter Nepal",
              "High Altitude Rescue Nepal",
            ].map((keyword) => (
              <Badge key={keyword} variant="secondary" className="bg-slate-200 text-slate-700">
                {keyword}
              </Badge>
            ))}
          </div>
        </header>

        {/* Overview */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold border-b pb-2">Overview - Helicopter Rescue Flights in Nepal</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Helicopter Rescue Flights in Nepal provide fast, life-saving evacuation from remote and high-altitude
              regions where road access is impossible. Due to Nepal’s rugged Himalayan terrain, helicopter evacuation is
              often the only effective solution for medical emergencies, trekking accidents, and altitude-related
              illnesses.
            </p>
            <p>
              Our rescue services support trekkers, climbers, travelers, and locals by coordinating rapid helicopter
              dispatch, ensuring safe transfer to medical facilities in Pokhara or Kathmandu under strict aviation
              safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Service Type:</strong> Emergency Helicopter Rescue & Medical Evacuation
                </li>
                <li>
                  <strong>Operating Regions:</strong> Annapurna, Everest, Langtang, Mustang & remote Himalayan areas
                </li>
                <li>
                  <strong>Response Time:</strong> As fast as weather & aviation clearance allows
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Maximum Operating Altitude:</strong> Up to 6,000+ meters (conditions apply)
                </li>
                <li>
                  <strong>Availability:</strong> 24/7 (weather & daylight dependent)
                </li>
                <li>
                  <strong>Best For:</strong> Trekkers, climbers, tourists, locals, emergency cases
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* When Required */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">When Is a Helicopter Rescue Required?</h2>
          <p className="mb-4 text-slate-700">
            Helicopter rescue flights are commonly needed in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Severe Acute Mountain Sickness (AMS)</li>
            <li>HAPE (High Altitude Pulmonary Edema)</li>
            <li>HACE (High Altitude Cerebral Edema)</li>
            <li>Trekking or mountaineering injuries</li>
            <li>Sudden illness in remote areas</li>
            <li>Emergency evacuation due to extreme conditions</li>
          </ul>
          <p className="mt-4 font-semibold text-red-700">Early evacuation significantly increases survival chances.</p>
        </section>

        {/* Service Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Service Coverage - Helicopter Rescue in Nepal</h2>
          <p className="mb-4 text-slate-700">
            We provide helicopter rescue coordination across Nepal’s major trekking and remote regions, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Annapurna Region</li>
            <li>Everest Region</li>
            <li>Langtang Region</li>
            <li>Mustang & Upper Mustang</li>
            <li>Remote villages & trail networks</li>
          </ul>
          <p className="text-sm text-slate-500 italic">
            Rescue operations depend on weather, visibility, and aviation clearance.
          </p>
        </section>

        {/* Rescue Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">How the Helicopter Rescue Process Works</h2>
          <div className="space-y-6">
            {[
              {
                title: "Emergency Notification",
                content:
                  "Once an emergency is reported, we collect essential details such as patient condition, location, altitude, and weather status.",
              },
              {
                title: "Rescue Coordination",
                content:
                  "We immediately coordinate with helicopter operators, aviation authorities, hospitals, and insurance providers (if applicable).",
              },
              {
                title: "Helicopter Evacuation",
                content:
                  "The helicopter lands at the safest possible nearby location and evacuates the patient efficiently.",
              },
              {
                title: "Hospital Transfer",
                content:
                  "The patient is flown directly to a suitable medical facility in Pokhara or Kathmandu for urgent care.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-700">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">What Our Helicopter Rescue Service Includes</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Emergency helicopter evacuation</li>
            <li>Experienced high-altitude rescue pilots</li>
            <li>Flight clearance & coordination</li>
            <li>Rescue documentation support</li>
            <li>Passenger insurance (as per aviation regulations)</li>
          </ul>
        </section>

        {/* Important Notes */}
        <section className="mb-12 bg-slate-100 p-6 rounded-xl border border-dashed border-slate-300">
          <h2 className="text-xl font-bold mb-4">Important Safety & Operational Notes</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
            <li>Helicopter rescue is weather-dependent</li>
            <li>Weight limits apply for safe operations</li>
            <li>Pilot’s decision is final for flight safety</li>
            <li>Landing duration is kept minimal in high-altitude areas</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Why Choose Our Helicopter Rescue Flights in Nepal?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Fast emergency response coordination</li>
            <li>Proven experience in Himalayan rescue operations</li>
            <li>Strong network with hospitals & insurers</li>
            <li>Licensed aviation partners</li>
            <li>Transparent communication during emergencies</li>
            <li>Trusted local rescue support from Pokhara</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Emergency Helicopter Rescue - Contact Information</h2>
          <p className="text-slate-700 mb-4">
            In emergency situations, every minute counts. Our Helicopter Rescue Flights in Nepal are designed to provide
            rapid, reliable, and safe evacuation from remote Himalayan locations.
          </p>
          <p className="font-bold text-slate-900">
            Contact us immediately for rescue coordination or emergency assistance.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">FAQs - Helicopter Rescue Flights in Nepal</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "How quickly can a helicopter rescue be arranged?",
                a: "Rescue flights are usually coordinated within 1–2 hours, depending on weather and aviation clearance.",
              },
              {
                q: "Is helicopter rescue covered by travel insurance?",
                a: "Most trekking insurance policies cover helicopter evacuation, but coverage depends on your insurer.",
              },
              {
                q: "Can helicopters operate at very high altitudes?",
                a: "Yes, high-altitude helicopters can operate in extreme terrain, weather permitting.",
              },
              {
                q: "Which hospitals are used after rescue?",
                a: "Patients are typically transferred to hospitals in Pokhara or Kathmandu.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  )
}
