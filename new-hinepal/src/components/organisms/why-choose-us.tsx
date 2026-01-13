import { Mountain, Shield, DollarSign, Users, Leaf, CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Mountain,
      title: "Local Himalayan Experts",
      description:
        "Our team consists of experienced local guides and travel professionals who are deeply connected to the Himalayas. Their local knowledge, cultural insight, and hands-on experience ensure you enjoy a genuine and meaningful adventure.",
    },
    {
      icon: Shield,
      title: "Safety Comes First",
      description:
        "Your safety is our highest priority. Our trained guides follow strict safety standards, are knowledgeable in altitude awareness, and are prepared to handle emergencies, ensuring a safe and worry-free trekking experience.",
    },
    {
      icon: DollarSign,
      title: "Best Value for Your Adventure",
      description:
        "We carefully design our itineraries to offer high-quality services at fair prices. With transparent costs and no hidden charges, we make sure you receive excellent value for your Himalayan journey.",
    },
    {
      icon: Users,
      title: "Professional & Personalized Service",
      description:
        "From planning to completion, our professional guides and support staff are dedicated to providing friendly, reliable, and personalized service to make your trip smooth and memorable.",
    },
    {
      icon: Leaf,
      title: "Responsible & Sustainable Tourism",
      description:
        "We believe in protecting nature and supporting local communities. Hi Nepal Treks promotes eco-friendly trekking practices, respects local culture, and contributes to community development wherever we operate.",
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Departures",
      description:
        "Once your trip is confirmed, it's guaranteed to run, regardless of group size, so you can plan your adventure with complete confidence.",
    },
  ]

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Why Hi Nepal Travels & Treks?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A trusted trekking and tour agency with 20+ years of experience, led by local experts in Nepal, Bhutan, and
            Tibet. We specialize in authentic trekking adventures and responsible, eco-friendly travel across the
            Himalayas, delivering safe, memorable, and value-driven journeys.
          </p>
        </div>

        {/* Grid of reasons */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:shadow-md hover:border-green-700/20"
              >
                <div className="mb-4 inline-flex rounded-lg bg-green-700 p-3 ">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
