import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Truck, Bus, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vehicle Rental in Nepal - Cars, Vans & 4x4 Jeep Hire",
  description: "Rent cars, vans, jeeps, & buses in Nepal with Hi Nepal. Safe, reliable, & flexible vehicle rental services for airport transfers, sightseeing, & group trips."
}

export default function VehicleRentalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#008236] text-primary-foreground py-16 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Car className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Vehicle Rental Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance">
            Your Trusted Partner for Safe & Comfortable Transportation in Nepal
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto text-pretty">
            Welcome to Hi Nepal Tours and Travels, your trusted partner for vehicle rental services in Nepal. Whether
            you're exploring the bustling cities, scenic highways, or remote mountain destinations, we've got the
            perfect vehicle to match your travel needs. From airport pickups to long‑distance journeys, our fleet and
            experienced drivers ensure safe, comfortable, and flexible transportation throughout your trip in Nepal.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Vehicle Rent Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Car className="h-5 w-5 text-primary" />
                  Wide Range of Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer a diverse fleet including cars, vans, jeeps, Hiace (minivan), and buses suitable for all
                  group sizes and purposes, from solo travelers to large tour groups.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Professional Local Drivers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All our vehicles come with experienced, licensed drivers familiar with Nepal's terrain, from smooth
                  city roads to rugged mountain routes, so you can enjoy a stress‑free journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Flexible Rental Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Need a vehicle for a few hours, a full day, or multiple days? We tailor rental packages to fit your
                  itinerary with flexible pricing and duration options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Competitive & Transparent Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer affordable rates with no hidden charges. Our pricing is simple, clear, and designed to give
                  you the best value for your travel budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Convenient Pickup & Drop‑Off
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enjoy door‑to‑door pickup and drop‑off service, whether it's airport transfers, hotel pickup, or
                  journey start/finish points of your choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vehicle Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Car Rental</CardTitle>
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardDescription>Perfect for Couples & Small Families</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ideal for couples, solo travelers, or small families who want to explore Nepal at their own pace. Our
                  cars are well‑maintained, comfortable, and perfect for city tours or intercity transfers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">City Tours</Badge>
                  <Badge variant="secondary">Airport Transfer</Badge>
                  <Badge variant="secondary">1-4 Passengers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Van/Hiace Rental</CardTitle>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardDescription>Spacious & Reliable for Groups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Spacious and reliable, vans (like Hiace) are perfect for family trips, group sightseeing, or airport
                  transfers. These vehicles balance comfort and affordability for medium‑sized groups.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Family Trips</Badge>
                  <Badge variant="secondary">Group Tours</Badge>
                  <Badge variant="secondary">6-10 Passengers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Jeep & 4×4 Rental</CardTitle>
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardDescription>Built for Adventure & Rough Terrain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For adventure lovers and rough terrain routes, our robust 4×4 jeeps can tackle mountainous roads,
                  trekking drop‑offs, and rural destinations with ease.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mountain Routes</Badge>
                  <Badge variant="secondary">Trekking Access</Badge>
                  <Badge variant="secondary">4-6 Passengers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Bus & Minibus Rental</CardTitle>
                  <Bus className="h-8 w-8 text-primary" />
                </div>
                <CardDescription>Perfect for Large Groups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Traveling with a large group? Our buses and minibuses provide comfortable seating, good luggage space,
                  and reliable service for tours, events, and corporate travel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Corporate Events</Badge>
                  <Badge variant="secondary">Group Tours</Badge>
                  <Badge variant="secondary">15-40 Passengers</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 bg-[#008236] text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Book Your Vehicle?</h2>
          <p className="text-center mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-balance">
            Contact us today to discuss your travel plans and get the perfect vehicle for your Nepal adventure.
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
    </div>
  )
}
