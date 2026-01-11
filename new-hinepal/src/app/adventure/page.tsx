import Image from "next/image";
import { ImageCard } from "@/components/molecules/image-card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventures - Hi Nepal Travels & Treks",
  description:
    "Hi Nepal Travels & Treks, a top travel & trekking agency in Nepal, offers thrilling adventure sports like paragliding & bungee jumping across the Himalayas.",
  keywords: "adventure sports, travel and trekking agency in nepal",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/adventure",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "standard",
    "max-snippet": -1,
  },
};
export default function AdventurePage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="p-4 relative bg-cover bg-center flex items-center md:justify-center  mt-24 md:mt-42">
        <div className="flex flex-col md:items-center">
          <h1 className="font-bold text-4xl lg:text-7xl mb-4">Adventures</h1>
          <p className="text-left italic text-xl">
            Experience the adventure sport of a lifetime amidst the Himalayas,
            where every thrill comes with breathtaking views.
          </p>
        </div>
      </section>
      <div className="p-2 md:p-12 container mx-auto flex flex-col gap-8">
        <div id="paragliding" className="scroll-mt-42">
          <ImageCard />
        </div>

        {/* Bungee */}
        <div
          id="bungee"
          className="scroll-mt-44 scroll-smooth flex  flex-col-reverse md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8"
        >
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Bungee</h2>
            <p className="text-justify">
              Bungee Jumping in Nepal is one of the popular adventure sports
              where a person makes a free fall from a high platform attached
              with a long elastic rope and other safety gear. The highest bungee
              jumping in Nepal is in Kusma, which is the world’s second highest
              bungee jump. Other popular spots for bungee jump in Nepal are
              Pokhara Bungee Jump and Bhote Koshi.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/bungee.webp"}
              alt="bungee"
              height={500}
              width={500}
              priority
            />
          </div>
        </div>

        {/* Rock Climbing */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start  justify-between rounded-md p-2  md:p-8">
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/rock_climbing.webp"}
              alt="rock-climbing"
              height={500}
              width={500}
              priority
            />
          </div>
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Rock Climbing</h2>
            <p className="text-justify">
              Rock climbing in Nepal is an exciting adventure sport that offers
              both outdoor and indoor options for thrill-seekers of all skill
              levels. The country's diverse terrain, including Himalayan cliffs
              and lush crags, provides world-class climbing spots like Nagarjun,
              Hattiban, Bimal Nagar, and Thame. Indoor climbing gyms in major
              cities like Kathmandu and Pokhara are perfect for beginners and
              advanced climbers to practice and refine their skills.
            </p>
          </div>
        </div>

        {/* Zipline */}
        <div
          id="zipline"
          className="scroll-mt-44 scroll-smooth flex flex-col-reverse md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8"
        >
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Zipline</h2>
            <div className="text-justify">
              Zipline in Nepal offers a unique experience of the country's
              stunning landscapes and adrenaline-pumping adventures. One of the
              famous ziplines around the world, the Pokhara zipline in western
              Nepal offers incredible speeds with the{" "}
              <Link
                className="text-green-700 underline"
                href={
                  "https://hinepaltreks.com/activities/trekking/annapurna-region"
                }
              >
                {" "}
                Annapurna Range
              </Link>{" "}
              and Fewa Lake as backdrop. Dhulikhel zipline and Nagarkot zipline
              are two other popular destinations for ziplining in Nepal. With
              professional safety precautions, trained guides, and a variety of
              ride styles, it's more than just a sport; it's an unforgettable
              journey through the skies.
            </div>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/zipline.webp"}
              alt="zipline"
              height={500}
              width={500}
              priority
            />
          </div>
        </div>

        {/* Cycling  */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8">
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/cycling.webp"}
              alt="cycling"
              height={500}
              width={500}
            />
          </div>
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Cycling</h2>
            <div className="text-justify">
              Cycling in Nepal offers a unique mixture of adventure, fitness,
              and cultural exploration. It offers smooth city rides and
              challenging mountain trails, allowing enthusiasts to experience
              the country's beauty. Mountain bikers can tackle rugged tracks in
              Kathmandu, Pokhara, and the Annapurna region, while leisure riders
              can enjoy peaceful lakeside paths or gentle countryside roads.
              Cycling can even enhance your day tours in Pokhara, such as the{" "}
              <Link
                className="text-green-700 underline"
                href={"https://hinepaltreks.com/sarangkot-pokhara-tour"}
              >
                Sarangkot Tour
              </Link>{" "}
              or{" "}
              <Link
                className="text-green-700 underline"
                href={"https://hinepaltreks.com/world-peace-pagoda"}
              >
                World Peace Pagoda Tour
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Ultra light flights */}

        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8">
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Ultralight Flights</h2>
            <p className="text-justify">
              Pokhara Ultralight Flight is a once-in-a-lifetime experience above
              the picturesque Pokhara Valley, surrounded by beautiful green
              hills, to witness the mesmerizing snow-crowned mountains to the
              north in a small aircraft. Enjoy the views of Annapurna,
              Machhapuchhre, Dhaulagiri, Pokhara and Lekhnath valleys, and Fewa
              Lake while touching the clouds. Choose your ultralight flight
              option:
            </p>
            <ul>
              <li>
                <strong>15 Minutes: </strong>a brief excitement
              </li>
              <li>
                <strong>30 Minutes: </strong>30 minutes: enough time to fully
                absorb it
              </li>
              <li>
                <strong>60 Minutes: </strong>enjoy the freedom and take your
                time.
              </li>
              <li>
                <strong>90 Minutes: </strong>go all out, the possibilities are
                endless
              </li>
            </ul>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/ultra-light-flight.webp"}
              alt="ultra-light-flight"
              height={500}
              width={500}
              priority
            />
          </div>
        </div>

        {/* Rafting */}

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8">
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/rafting.webp"}
              alt="rafting"
              height={500}
              width={500}
              priority
            />
          </div>
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Rafting</h2>
            <p className="text-justify">
              Rafting in Nepal is one of the thrilling and fun adventure sports.
              Peddling past the fast wave of the river by maintaining your
              balance and the raft while the cold water coming from the
              Himalayas continuously hits your face in a fast-flowing river
              between the dense green forests is a thrilling experience. Some of
              the major rafting places in Nepal are:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Marsyangdi River Rafting</strong>
              </li>
              <li>
                <strong>Trishuli River Rafting Nepal</strong>
              </li>
              <li>
                <strong>Bhote Koshi Rafting in Nepal</strong>
              </li>
              <li>
                <strong>Karnali River Rafting</strong>
              </li>
              <li>
                <strong>Sun Koshi River Rafting</strong>
              </li>
              <li>
                <strong>Kaligandaki River Rafting</strong>
              </li>
              <li>
                <strong>Seti River Rafting</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* hot air balloon */}
        <div className="flex  md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8  flex-col-reverse">
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">Hot Air Balloon Rides</h2>
            <p className="text-justify">
              Hot air balloon Pokhara is one of the unique adventure sports
              experiences in Nepal. This extraordinary and thrilling adventure
              provides a safe and memorable flight above the Pokhara valley with
              licensed and experienced experts. Hot air balloon in Pokhara
              offers a 360-degree view of the mountains (Annapurna,
              Machhapuchhre, Dhaulagiri, and Nilgiri), lush hills, Fewa Lake,
              and the Pokhara and Lekhnath Valleys.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/hot-air-balloon.webp"}
              alt="rafting"
              height={500}
              width={400}
              priority
            />
          </div>
        </div>

        {/* atv ride */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start justify-between rounded-md p-2  md:p-8">
          <div className="">
            <Image
              className="rounded-md"
              src={"/assets/atv-ride.webp"}
              alt="rafting"
              height={500}
              width={400}
              priority
            />
          </div>
          <div className="md:max-w-[40vw]">
            <h2 className="font-bold text-xl">ATV Ride</h2>
            <p className="text-justify">
              An ATV ride in Nepal is an exhilarating way to explore the
              breathtaking landscape of this country. Imagine riding through the
              adventurous, rough roads of Nepal along the lush forests, skimming
              riverbanks, and uphill tracks. ATV tour in Pokhara, Chitwan, and
              Mustang is a complete endouvring experience to enjoy your leisure
              days. Where can you do an ATV Ride?
            </p>
            <ul className="pl-4">
              <li className="font-bold list-disc">Pokhara</li>
              <li className="font-bold list-disc">Chitwan</li>
              <li className="font-bold list-disc">Kathmandu</li>
              <li className="font-bold list-disc">Manang and Mustang</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
