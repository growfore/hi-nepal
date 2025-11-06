import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function HomeFAQs() {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between gap-4 container mx-auto my-24">
        <h2 className="font-bold text-3xl md:text-5xl text-center md:text-left mb-4">
          Frequently Asked Questions
        </h2>
      <div className="bg-slate-100 p-4  rounded-sm w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full "
          defaultValue="item-best-agency"
        >
          <AccordionItem value={"item-best-agency"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Which is the best travel agency in Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Nepal is one of the best destinations to spend time with your friends, family, and loved ones. If you are planning to visit this country of paradise, out of many travel agencies, <Link className="link-style" href={"https://hinepaltreks.com/"}>Hi Nepal Travels and Treks Pvt. Ltd.</Link> is one of the best travel agencies in Nepal, offering its highest-quality services in the field of tourism for more than 20 years.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-best-time"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              When is the best time to travel to Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Visiting Nepal is worth it any time of the year. However, being specific, Spring (March-May) and Autumn (September-November) are considered to be the most <Link href={"https://hinepaltreks.com/best-time-to-visit-nepal"} className="link-style">ideal times to visit Nepal</Link>. During these months, the weather is clear and the temperature is moderate.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-abc-pokhara"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Are there any local trekking agencies in Pokhara for the ABC trek?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Yes, <Link className="link-style" href={"https://hinepaltreks.com/pokhara-valley-tour"}>Pokhara</Link> is a tourism hub, famous for natural wonders and thrilling adventures. To promote tourism in this stunning city, there are tons of local as well as international agencies. If you are looking for one, then <Link className="link-style" href={"https://hinepaltreks.com/about-us"}>Hi Nepal Travels and Treks Pvt. Ltd.</Link> can be one of the best options.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-safe-travel"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Is it safe to travel to Nepal right now?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Yes, it's very safe to travel to Nepal now as the government is more concerned about tourism than ever.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-kathmandu-elevation"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              <p className="text-lg">What is the elevation of Kathmandu, Nepal?</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">Kathmandu is situated at an elevation of 1,300 m above sea level.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-where-nepal"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Where is Nepal located?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Nepal is a landlocked country in South Asia, situated between India and China. This beautiful country is popularly known as the country of the Himalayas, home to eight out of only fourteen peaks in the world that are 8,000 meters or higher above sea level.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-find-agency"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              How can I find a trekking agency in Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Finding a trekking agency in Nepal is not that difficult, as you can find tons of options on the internet. However, it is crucial to get a reliable agency. For that, you can check their reviews and comments, and also communicate with them. If you are already in cities like <Link href={"https://hinepaltreks.com/kathmandu-tour-package"}>Kathmandu</Link> and Pokhara, you can physically visit the agency as you can find lots of travel and trekking agencies in Thamel and Lakeside, respectively.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-flag"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              What does Nepal's flag look like?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                Nepal’s flag is the most unique flag in the world. It’s a red two-rectangle flag with a blue border, with a white sun and a mix of half sun and moon in the middle of each triangle.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-booking-expect"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              What to expect while booking a tour and travel agency in Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">There are several things to keep in mind before you <Link href={"https://hinepaltreks.com/booking"}>book</Link> any tour or travel agency in Nepal:
              </p>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Logistics and Planning</li>
                <li>Experiences</li>
                <li>Guidance and Safety</li>
                <li>Package Customizations</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-currency"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              What is currency of Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">The currency of Nepal is Nepalese Rupee (NPR).</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={"item-capital"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              What is the capital of Nepal?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">Situated in the heart of the nation of the Himalayas, Kathmandu is the Capital of Nepal.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"mount-everest"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Where is Mount Everest located?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                <Link
                  className="text-green-700 underline"
                  href={"https://hinepaltreks.com/where-is-mount-everest"}
                >
                  Mount Everest is located on the border of Nepal and China
                </Link>{" "}
                in the Himalaya Region.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
