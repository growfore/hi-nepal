import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Plane, CheckCircle2, Users, RefreshCw, Phone, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Domestic & International Air Ticket Booking in Nepal",
  description:
    "Book domestic and international air tickets in Nepal at the best price with HI Nepal Travels & Tours. Trusted airlines, fast booking & local support.",
}

export default function AirTicketBookingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#008236] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Plane className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Domestic & International Flight Booking</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Your Trusted Partner for Affordable & Reliable Air Tickets
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-black text-center max-w-3xl mx-auto text-pretty">
            At Hi Nepal Travels & Tours, we provide complete domestic and international air ticketing services tailored
            to travelers from Nepal and abroad. Whether you are traveling for tourism, study, work, family visits, or
            urgent travel, our experienced team ensures best fares, flexible options, and hassle-free booking with
            trusted airlines worldwide.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Book Air Tickets with Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Best available airfare deals",
              "Fast and secure ticket booking",
              "Access to all major airlines",
              "Assistance with reissue & refund",
              "Student & group fare support",
              "Local customer service in Nepal",
              "7 days a week support",
            ].map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Flights */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Domestic Air Ticket Booking in Nepal</CardTitle>
              <CardDescription>Fast & Reliable Domestic Flights Across Nepal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-black">
                We offer domestic air tickets to all major and remote destinations within Nepal. Our service is ideal
                for tourists, trekkers, business travelers, and locals who want to save time and travel comfortably.
              </p>

              <div>
                <h3 className="font-semibold mb-3">Popular Domestic Flight Routes</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Kathmandu to Pokhara Flight",
                    "Kathmandu to Lukla",
                    "Kathmandu to Bharatpur (Chitwan)",
                    "Kathmandu to Biratnagar",
                    "Kathmandu to Gautam Buddha Airport",
                    "Kathmandu to Nepalgunj",
                    "Pokhara to Jomsom",
                    "Kathmandu to Bhadrapur",
                    "Mountain Flight from Kathmandu",
                  ].map((route, idx) => (
                    <Badge key={idx} variant="secondary" className="justify-start py-2">
                      {route}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Domestic Airlines We Book</h3>
                <p className="text-sm text-black">
                  Buddha Air • Yeti Airlines • Shree Airlines • Tara Air • Summit Air
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Flights */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">International Air Ticket Booking from Nepal</CardTitle>
              <CardDescription>Fly Worldwide with Confidence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-black">
                HI Nepal Travels & Tours provides international flight booking from Nepal to Asia, Europe, Australia,
                Middle East, and America. We compare multiple airlines and routes to offer you the best price and most
                convenient connections.
              </p>

              <div>
                <h3 className="font-semibold mb-3">Popular International Destinations</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Nepal to Australia",
                    "Nepal to Japan",
                    "Nepal to South Korea",
                    "Nepal to USA & Canada",
                    "Nepal to UK & Europe",
                    "Nepal to Dubai, Qatar & Saudi Arabia",
                    "Nepal to Malaysia, Thailand & Singapore",
                  ].map((destination, idx) => (
                    <Badge key={idx} variant="secondary" className="justify-start py-2">
                      {destination}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">International Airlines We Work With</h3>
                <p className="text-sm text-black text-pretty">
                  Qatar Airways • Emirates • Turkish Airlines • Singapore Airlines • Korean Air • Thai Airways •
                  Malaysia Airlines • Nepal Airlines • Air India • Cathay Pacific • Air France • Air Canada • WestJet •
                  IndiGo • Air Arabia • Austrian • Hongkong Airlines • DELTA • American Airlines • Air transat • Kuwait
                  Airways • British Airways • China Southern • China Eastern • Gulf Air • Air Asia and many more.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Special Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Student Air Ticket Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-black">
                  We specialize in student air ticket booking for students traveling abroad for higher education with
                  affordable pricing, flexible dates, and extra baggage support.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Discounted student airfares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extra baggage allowance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Flexible date change options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Group & Family Flight Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-black">
                  Traveling together has never been easier! We offer specialized ticketing services for family
                  vacations, corporate trips, and group tours.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Discounted group fares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Seat & meal coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated booking support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ticket Support */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Ticket Reissue, Refund & Cancellation Support
              </CardTitle>
              <CardDescription>Need to change your travel plans? We make it simple and stress-free.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Date Change & Flight Rescheduling",
                  "Name Correction",
                  "Ticket Cancellation Assistance",
                  "Refund Processing & Follow-Up",
                  "Partial & Full Refund Guidance",
                  "Emergency Travel Support",
                  "Travel Policy Compliance",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How Our Air Ticket Booking Process Works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Share Details", desc: "Share your travel details (route, date, passengers)" },
              { step: "2", title: "Get Options", desc: "Receive the best flight options & fares" },
              { step: "3", title: "Confirm & Pay", desc: "Confirm your booking & make payment" },
              { step: "4", title: "Get Ticket", desc: "Get your e-ticket instantly via email or WhatsApp" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm  text-balance">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4 bg-[#008236] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Hi Nepal Travels & Tours</h2>
          <p className="text-center mb-8 text-white max-w-2xl mx-auto text-balance">
            Have questions? Need help planning your trip? Our team of travel experts is here to make your journey
            seamless, safe, and unforgettable.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Phone className="h-8 w-8 mb-2" />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-sm">+977 9856035091</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="h-8 w-8 mb-2" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm">info@hinepaltreks.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-8 w-8 mb-2" />
              <p className="font-semibold mb-1">Address</p>
              <p className="text-sm">Street No. 13, Lakeside, Pokhara, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Which is the most popular domestic flight in Nepal?</AccordionTrigger>
              <AccordionContent>
                The most popular domestic route is Kathmandu to Pokhara, followed by flights to Lukla, Nepalgunj, and
                Biratnagar, which connect travelers to trekking and adventure regions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long is the flight from Kathmandu to Pokhara?</AccordionTrigger>
              <AccordionContent>
                The flight takes approximately 25–30 minutes, offering stunning views of the Himalayan foothills along
                the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Which airlines operate domestic flights in Nepal?</AccordionTrigger>
              <AccordionContent>
                Major domestic airlines include Yeti Airlines, Buddha Air, Tara Air, Summit Air, and Sita Air.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is it safe to fly domestically in Nepal?</AccordionTrigger>
              <AccordionContent>
                Yes, domestic flights in Nepal are generally safe. Airlines follow strict safety regulations, although
                weather conditions in the mountains can sometimes cause delays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are mountain flights available in Nepal?</AccordionTrigger>
              <AccordionContent>
                Yes, mountain flights from Kathmandu fly over the Himalayan range, including Mount Everest, Annapurna,
                and Langtang, offering breathtaking aerial views.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Which is the main international airport in Nepal?</AccordionTrigger>
              <AccordionContent>
                Tribhuvan International Airport (KTM) in Kathmandu is the primary international airport connecting Nepal
                with Asia, the Middle East, and Europe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What is the best season for international travelers to visit Nepal?</AccordionTrigger>
              <AccordionContent>
                Spring (March–May) and Autumn (September–November) are the best times due to clear skies, pleasant
                weather, and optimal trekking conditions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
