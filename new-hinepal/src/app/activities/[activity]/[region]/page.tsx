import HLinkComp from "@/components/atoms/link-component";
import PackageCard from "@/components/molecules/package-card";
import endpoints from "@/constant/endpoints";
import { formatSlug } from "@/helper/formatSlug";
import { get } from "@/utils/request-handler";
import { LucideChevronRight } from "lucide-react";
import Link from "next/link";
import { text } from "stream/consumers";

export async function generateMetadata({ params }: any): Promise<any> {
  const { region } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/destinations/${region}`,
    { cache: "no-store" },
  );
  const regionDetails = await response.json();

  let title =
    regionDetails?.seo?.metaTitle ||
    `${formatSlug(region)} - Hi Nepal Travels & Treks`;
  let description = regionDetails?.data?.seo?.metaDescription || "";
  let keywords = regionDetails?.data?.seo?.metaKeywords || "";

  if (region.includes("annapurna-region")) {
    title = "Explore the Annapurna Region Nepal Trekking Itinerary";
    description =
      "Discover the ultimate Annapurna Region Nepal Trekking Itinerary with detailed routes, highlights, best seasons, and tips. Plan your adventure today!";
    keywords =
      "annapurna region, trekking agency in nepal, travel agency in nepal";
  }
  if (region.includes("everest-region")) {
    title =
      "Everest Region Trekking in Nepal: Itinerary to World’s Highest Peak";
    description =
      "Experience Everest Region Trekking in Nepal with detailed itineraries, best seasons, and local insights. Book now to explore the Himalayas like never before!";
    keywords =
      "everest region, trekking agency in nepal, travel agency in nepal";
  }
  if (region.includes("multi-days-tour")) {
    title = "Multi-Day Tour: Unforgettable Nepal Tour Packages";
    description =
      "Explore Nepal tour packages with multi-day cultural tours, heritage sites, and scenic getaways. Book now to experience Nepal’s rich culture and beauty!";
    keywords = "multi-day tour, travel agency in nepal";
  }
  if (region.includes("manaslu-region")) {
    title = "Manaslu Region Trekking in Nepal Itineraries Breakdown";
    description =
      "Explore Manaslu Region Trekking in Nepal with complete itineraries, best seasons, and essential tips. Book now for an unforgettable Himalayan adventure!";
    keywords = "manaslu region, trekking agency in nepal";
  }
  if (region.includes("dolpo-region")) {
    title = "Dolpo Region Trek: Embark with Best Itineraries";
    description =
      "Experience the Dolpo Region Trek with remote trails, rich culture, and stunning landscapes. Book now to explore Nepal’s hidden Himalayan paradise!";
    keywords = "dolpo region, travel agency in nepal, trekking agency in nepal";
  }
  if (region.includes("langtang-region")) {
    title = "Langtang Region Nepal Trekking Itinerary Breakdown";
    description =
      "Discover Langtang Region Nepal Trekking with scenic trails, cultural villages, and the best travel seasons. Book now to experience the Himalayas up close!";
    keywords = "langtang region";
  }

  if (region.includes("kanchenjunga")) {
    title = "Kanchenjunga Region Trekking in Nepal: Best Itineraries for 2025";
    description =
      "Experience the Kanchenjunga Region Trekking in Nepal with breathtaking Himalayan views, remote trails, and ideal seasons. Book now for an epic adventure in Nepal";
  }

  if (region.includes("day-tours")) {
    title = "Day tours in Nepal: Perfect itinerary and Best Season";
    description =
      "Discover the best Day Tours in Nepal with perfect itineraries and ideal seasons. Book now to explore culture, heritage, and scenic wonders in a single day!";
    keywords = "day tours in nepal, travel and trekking agency";
  }
  if (region.includes("nature-wildlife")) {
    title = "Nature and Wildlife Tours in Nepal: Itinerary, Safari & Best Time";
    description =
      "Experience Nature and Wildlife Tours in Nepal with safaris, jungle walks, and ideal seasons. Book now to explore Nepal’s rich biodiversity and wild beauty!";
    keywords = "trekking agency in nepal";
  }
  if (region.includes("tibet")) {
    title = "Tibet: Discovering the Lesser-Known Treasures";
    description =
      "Discover the untouched beauty of Tibet with our guide to its lesser-known treasures. From monasteries to breathtaking vistas, embark on an unforgettable adventure.";
    keywords = "Tibet";
  }
  if (region.includes("heli-tour")) {
    ((title = "Helicopter Tour"),
      (description =
        "Take an unforgettable Heli Tour over the Himalayas. See Mount Everest, Annapurna, and stunning peaks from the bird’s eye view from the sky — book your adventure now!"));
    keywords = "Heli Tour, Helicopter Tour";
  }

  return {
    title: regionDetails?.data?.seo?.metaTitle || " ",
    description:
      regionDetails?.data?.seo?.metaDescription || description || undefined,
    keywords: regionDetails?.data?.seo?.metaKeywords || keywords || undefined,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_FRONTEND_BASE_URL +
          `/activities/${params.activity}/${params.region}` || " ",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}
export default async function RegionPage({
  params,
}: {
  params: Promise<{ activity: string; region: string }>;
}) {
  const region = (await params).region;
  const activity = (await params).activity;
  let data;
  let schemaData;

  await get({
    endPoint: endpoints.DESTINATIONS + "/" + region,
    token: "",
    success: (_, res) => {
      data = res.data?.packages;
      schemaData = res?.data?.seo?.schema;
    },
    failure: (message) => {
      return message;
    },
  });

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            //  @ts-ignore
            __html: JSON.stringify(JSON.parse(schemaData)),
          }}
        ></script>
      )}
      <div className="flex flex-col gap-4">
        <div className="md:min-h-[40vh]  p-4 flex flex-col  md:p-8 md:items-center border-b-2 border-black bg-green-700 text-white">
          <h1 className="font-bold text-4xl lg:text-6xl">
            {region.includes("wildlife")
              ? "Nature and Wildlife Tours"
              : formatSlug(region)}
          </h1>
          {region.includes("bhutan") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Discover the hidden monasteries, colorful festivals and beautiful
              hiking trails of the mystical Buddhist Kingdom of Bhutan. From
              Tiger’s Nest Monastery to the serene valleys of Paro and Thimphu,
              experience Bhutan’s spiritual traditions, breathtaking scenery,
              and the philosophy of Gross National Happiness.
            </p>
          )}
          {region.includes("tibet") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Embark on a journey to the mystical land ‘Tibet’, where the snow
              capped peaks reflect the height of spirituality. Embark on
              journeys to
              <HLinkComp
                href="/kailash-mansarovar-yatra"
                text="Mount Kailash"
                linkColor="white"
              />
              , Lake Mansarovar, and Lhasa, embracing Tibetan culture, ancient
              traditions, and breathtaking mountain landscapes.
            </p>
          )}
          {region.includes("heli-tour") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Experience the thrill of helicopter tours in Nepal. Fly over{" "}
              <HLinkComp
                href="https://hinepaltreks.com/jomsom-muktinath-trek"
                text="Muktinath"
                linkColor="white"
              />
              ,
              <HLinkComp
                href="/annapurna-base-camp-trek"
                text="Annapurna Base Camp"
                linkColor="white"
              />
              ,
              <HLinkComp
                href="/everest-base-camp-helicopter-tour"
                text="Everest Base Camp Helicopter Tour"
                linkColor="white"
              />
              , Mardi Himal and other iconic Himalayan wonders. Enjoy the views
              of mountain vistas, serene valleys, and pristine landscapes for an
              unforgettable high-altitude adventure.
            </p>
          )}
          {region.includes("everest") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Experience an opportunity to witness the world’s highest mountain,
              Mount Everest (Sagarmatha Himal), along with other tall
              snow-capped mountains while trekking through the Everest Region,
              Nepal. Learn the unique ancient Himalayan culture while walking
              along the stunning landscape of the Everest Region trek. The
              Everest region trek is one of the heavenly paradises on Earth,
              offering some of the major trekking routes in Nepal, such as the{" "}
              <HLinkComp
                href="https://hinepaltreks.com/everest-base-camp-trek"
                text="Everest Base Camp Trek"
                linkColor="white"
              />
              , the
              <HLinkComp
                href="https://hinepaltreks.com/chola-pass-gokyo-trek"
                text="Everest Cho La Pass Trek"
                linkColor="white"
              />
              , the
              <HLinkComp
                href="https://hinepaltreks.com/gokyo-valley-trek"
                text="Gokyo Ri Trek"
                linkColor="white"
              />
              , and the
              <HLinkComp
                href="https://hinepaltreks.com/pikey-peak-trek"
                text="Pikey Peak Trek"
                linkColor="white"
              />
            </p>
          )}
          {region.includes("annapurna") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Explore some of the popular snow-capped Mountains such as
              Annapurna I, II, III, IV, Machhapuchhre (Fishtail), Dhaulagiri,
              and Nilgiri of the Annapurna Region. Along with the opportunity to
              learn about the cultural significance of authentic villages
              situated between the mesmerizing landscape vista of Nepal. From
              one of the popular trekking routes in Nepal
              <HLinkComp
                href="https://hinepaltreks.com/annapurna-panorama-trek"
                text="Annapurna Panorama Trek"
                linkColor="white"
              />
              , to recently getting popular trails like the
              <HLinkComp
                href="https://hinepaltreks.com/north-annapurna-base-camp-trek"
                text="North Annapurna Base Camp"
                linkColor="white"
              />
              and
              <HLinkComp
                href="https://hinepaltreks.com/khumai-danda-trek"
                text="Khumai Danda Trek"
                linkColor="white"
              />
              ,the Annapurna region is filled with options.
            </p>
          )}
          {region.includes("langtang") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              The Langtang Trek is one of Nepal's most satisfying short treks
              with magnificent mountain views, green forests, and rich cultural
              experiences within a short drive from Kathmandu. Referred to as
              the "valley of glaciers," Langtang Trekking is surrounded by
              snow-covered mountains, Langtang Lirung (7,227 m), and dotted with
              yak herds, alpine meadows, and rural villages.
            </p>
          )}
          {region.includes("manaslu") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Explore the Manaslu region, one of the remote and off-the-beaten
              trekking regions of Nepal, which is home to the world’s
              eighth-highest mountain, Mount Manaslu. The unspoiled landscapes,
              traditional towns, and stunning mountain views in this region make
              it a one-of-a-kind place to go trekking, with itineraries
              including the
              <HLinkComp
                text="Manaslu Circuit Trek"
                href="/manaslu-circuit-trek"
                linkColor="white"
                comma
              />
              <HLinkComp
                href="https://hinepaltreks.com/manaslu-tsum-valley-circuit-trek"
                text="Manaslu Tsum Valley Circuit Trek"
                linkColor="white"
                comma
              />
              <HLinkComp
                text="Manaslu and Tsum Valley Circuit Trek"
                href="/manaslu-tsum-valley-circuit-trek"
                comma
                linkColor="white"
              />
              and the
              <HLinkComp
                text="Tsum Valley Trek"
                href="/tsum-valley-trek"
                linkColor="white"
              />
              .
            </p>
          )}
          {region.includes("dolpo") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Dolpo, Nepal's hidden paradise, offers a lifetime adventure
              trekking experience with its unspoiled wilderness, high elevation,
              and timeless Tibetan culture. The region is dotted with striking
              landscapes, barren valleys, boulder-covered ridges, and sparkling
              Phoksundo Lake. Treks like the
              <HLinkComp
                text="Upper Dolpo Trek"
                href="/upper-dolpo-trek"
                linkColor="white"
                comma
              />
              <HLinkComp
                href="/lower-dolpo-trek"
                text="Lower Dolpo Trek"
                linkColor="white"
              />
              and
              <HLinkComp
                text="Shey Phoksundo Lake Trek"
                href="/shey-phoksundo-lake-trek"
                linkColor="white"
              />
              provide an atmosphere of utter isolation and cultural diversity.
            </p>
          )}
          {region.includes("multi-days-tour") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Embark on multiday Nepal tour packages for a deeper exploration of
              the country’s breathtaking landscapes, vibrant culture, and
              adventurous spirit. Unlike short trips, these tours allow
              travelers to experience Nepal at a slower pace, immersing
              themselves in both natural beauty and authentic local life. Get an
              exposure to Nepal's diverse beauty with planned multi-day Nepal
              tours like
              <HLinkComp
                text="Upper Mustang Tour"
                href="/upper-mustang-tour"
                comma
                linkColor="white"
              />
              <HLinkComp
                text="Rara Lake Tour"
                href="/rara-lake-tour-nepal"
                linkColor="white"
                comma
              />
              and
              <HLinkComp
                href="/ghandruk-village-tour"
                text="Ghandruk Village Tour"
                comma
                linkColor="white"
              />
              with a reputed tour agency in Nepal.
            </p>
          )}
          {region.includes("day-tours") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Day tours in Nepal are the perfect way to experience the country’s
              cultural richness and natural beauty in a short amount of time.
              Ideal for travelers with limited schedules, with a reputed tour
              agency in Nepal, the tours like{" "}
              <HLinkComp
                text="Pokhara Valley Tour"
                href="/pokhara-valley-tour"
                comma
                linkColor="white"
              />
              <HLinkComp
                href="/world-peace-pagoda"
                text="World Peace Pagoda Tour"
                linkColor="white"
                comma
              />
              and
              <HLinkComp
                text="Sarangkot Tour"
                href="/sarangkot-pokhara-tour"
                linkColor="white"
              />
              allow you to explore iconic landmarks, bustling cities, and
              stunning viewpoints without the need for overnight stays.
            </p>
          )}
          {region.includes("nature-wildlife") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              Nepal is a paradise for nature and wildlife enthusiasts, offering
              diverse ecosystems that range from subtropical forests to alpine
              meadows and high Himalayan peaks. The country is home to some of
              the world’s rarest flora and fauna, thriving within its rich
              landscapes and protected National Parks such as{" "}
              <HLinkComp
                href="/chitwan-national-park-tour"
                text="Chitwan National Park"
                linkColor="white"
              />
              and
              <HLinkComp
                href={"https://hinepaltreks.com/bardiya-national-park-tour"}
                text="Bardiya National Park"
                linkColor="white"
              />
              . Explore the diverse natural beauty with
              <HLinkComp
                href={"https://hinepaltreks.com/"}
                text="Hi Nepal Travels and Treks"
                linkColor="white"
                comma
              />
              one of the
              <HLinkComp
                href={"https://hinepaltreks.com/about-us"}
                text="best tour operators in Nepal"
                linkColor="white"
              />
              .
            </p>
          )}
          {region.includes("kanchenjunga") && (
            <p className="text-left md:text-center md:mt-4 text-xl">
              The{" "}
              <HLinkComp
                href={
                  "https://hinepaltreks.com/activities/trekking/kanchenjunga-region"
                }
                text={"Kanchenjunga Region"}
                linkColor="white"
              />
              in Nepal offers remote
              <HLinkComp
                text="trekking"
                linkColor="white"
                href={"https://hinepaltreks.com/activities/trekking"}
              />
              with stunning Himalayan scenery and rich cultural exposure.
              Trekkers can visit{" "}
              <HLinkComp
                text="Kanchenjunga North"
                href={
                  "https://hinepaltreks.com/kanchenjunga-north-base-camp-trek"
                }
                linkColor="white"
              />
              or
              <HLinkComp
                text="Kanchenjunga South"
                href={
                  "https://hinepaltreks.com/kanchenjunga-south-base-camp-trek"
                }
                linkColor="white"
                comma
              />
              and the
              <HLinkComp
                text="Kanchenjunga Circuit Trek"
                href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
                linkColor="white"
              />
              combines both routes.
            </p>
          )}

          {/* BREADCRUMB */}
          <div className="lg:px-32 flex flex-col gap-2 mt-4 text-white underline">
            <div className="flex gap-1">
              <Link href={"/"}>Home</Link>
              <LucideChevronRight />
              <Link href={`/activities/${activity}`}>
                {activity?.charAt(0).toUpperCase() + activity.slice(1)}{" "}
              </Link>{" "}
              <LucideChevronRight />{" "}
              <Link href={`/activities/${activity}/${region}`}>
                {region
                  ? region
                      .split("-")
                      .map(
                        (part) => part.charAt(0).toUpperCase() + part.slice(1),
                      )
                      .join(" ")
                  : ""}
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-32 p-4">
          {data &&
            /* @ts-ignore */
            data?.length > 0 &&
            /* @ts-ignore */
            data?.map((item: any, index: number) => {
              return (
                // <Link key={d.slug} href={`/${d.slug}`}>
                <PackageCard
                  showRegion={false}
                  key={item.id}
                  item={item}
                  destination={{
                    slug: item.destination.slug.split("/")[2],
                    activity: {
                      name: "Trekking",
                      slug: "trekking",
                    },
                  }}
                />
                // </Link>
              );
            })}
        </div>
        {/* ***
     ***
     ***
    BOTTOM DESCRIPTIONS  
     ***
     ***
    *****/}
        <div className="p-4 md:px-12 lg:px-24">
          {region.includes("bhutan") && (
            <p className="text-justify text-xl">
              Step into Bhutan, the last Himalayan Kingdom, where ancient
              traditions, Buddhist monasteries and pristine nature exist in
              perfect harmony. Situated high in the Eastern Himalayas, Bhutan is
              the land of smiling monks, fluttering prayer flags and
              breathtaking landscapes ranging from the lush valleys to the snow
              draped peaks. <br />
              The iconic Tiger’s Nest Monastery(Paro Taktsang) clinging
              dramatically to the cliffside with deep spiritual roots and
              timeless allure of Bhutan. Guided by the philosophy of{" "}
              <Link
                href={"https://ophi.org.uk/gross-national-happiness"}
                className="text-green-700 underline"
              >
                Gross National Happiness
              </Link>
              , Bhutan lets you experience the authentic journey into mindful
              living, cultural richness and natural wonder.
            </p>
          )}
          {region.includes("tibet") && (
            <p className="text-justify text-xl">
              Tibet is known as the “Roof of the world” for its Tibetan plateaus
              and this autonomous region of China is the spiritual heart of
              Tibetan Buddhism and sacred pilgrimage sites like Mount Kailash
              and its capital, Lhasa featuring the UNESCO-listed Potala Palace,
              Jokhang Temple and monastery. The journey reaches the spiritual
              pinnacle at{" "}
              <Link
                className="text-green-700 underline"
                href={"https://hinepaltreks.com/kailash-mansarovar-yatra"}
              >
                Mount Kailash
              </Link>{" "}
              and Lake Mansarovar, revered by Buddhists, Hindus, Jains, and Bon
              followers as the ultimate pilgrimage site, a place believed to
              purify the soul and connect heaven with earth.
              <br />
              Tibet is where silence sounds louder than words, from the clinging
              monasteries in the mountain sides to the architectural marvels
              embodying centuries of devotion, meditation and mystery. Each
              sacred site offers a glimpse into a timeless spiritual world,
              where monks chant in candle-lit halls, prayer flags dancing in the
              wind and mountain echoes with serenity. Experience this
              high-altitude journey that reflects the true essence of Tibetan
              culture, spirituality and the Himalayan adventure.
            </p>
          )}
          {region.includes("heli-tour") && (
            <p className="text-justify text-xl">
              Explore the majestic landscapes of Nepal from the sky. This
              breathtaking aerial perspective via a helicopter tour offers bird
              eye-view of stunning peaks and iconic destinations like Mount
              Everest, Annapurna, Muktinath,{" "}
              <Link
                className="text-green-700 underline"
                href={"https://hinepaltreks.com/annapurna-base-camp-trek"}
              >
                Annapurna Base Camp
              </Link>
              ,{" "}
              <Link
                className="text-green-700 underline"
                href={"https://hinepaltreks.com/mardi-himal-trek"}
              >
                Mardi Himal
              </Link>
              . You can also witness glacial lakes such as Tilicho and Kapauche.
              <br />
              Be it the spiritual journey to the sacred sites or a chance to
              witness panoramic mountain views, Our heli tour services offers
              luxury, convenience and unforgettable aerial adventures. Our heli
              tours allow you to skip the lengthy treks and offer VIP access to
              the roof of the world.
              <br />
              We recommend heli tours for those with limited time, seeking
              luxury because you can see in hours, what takes trekkers weeks in
              luxury, convenience, safety and the guarantee of unforgettable
              views.
            </p>
          )}
          {region.includes("everest") && (
            <p className="text-justify text-xl">
              Home to the world’s highest peak, Mount Everest, the Everest
              region in Nepal, offers tons of adventures to adventure lovers,
              such as walking to the world’s highest passes to climbing 8000 m+
              mountains. Located in the northeastern part of Nepal, the Everest
              region is home to many snow-capped mountains such as Mount
              Everest, Lhotse, Makalu, Ama Dablam, and Cho Oyu. The Everest
              region trekking is not just about hiking to high altitude regions
              of Nepal, but also about exploring the natural and cultural
              beauties of Nepal. While in this region, you will have
              opportunities to closely observe rare wildlife such as the snow
              leopard, red panda, and Monal. Also, witness the lush and
              multi-colored Rhododendron forest while on the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/everest-base-camp-trek"}
              >
                {" "}
                EBC trek
              </Link>{" "}
              in the spring season. <br /> <br />
              Everest region
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking
              </Link>{" "}
              is also an opportunity to experience the friendly hospitality of
              the Sherpa people, who are renowned for their mountaineering
              skills and profound Buddhist heritage. Trips to old monasteries
              such as Tengboche and Pangboche offer trekkers an opportunity to
              feel the spiritual nature of the Himalayas, along with an
              opportunity to comprehend the cultural heritage of the Khumbu
              region. <br /> Besides, the region has a number of treks suitable
              for each adventure-seeker, from challenging high-altitude treks to
              more modest, easier treks that still get to enjoy the majesty of
              the Himalayas. If you wish to reach Everest Base Camp or you
              simply wish to acquire stunning mountain views, the Everest area
              promises memories with adventure, culture, and nature to
              appreciate.
            </p>
          )}
          {region.includes("annapurna") && (
            <p className="text-xl text-justify">
              The Annapurna Region is home to several trekking routes. From
              short and beginner-friendly treks like the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/mardi-himal-trek"}
              >
                {" "}
                Mardi Himal trek{" "}
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/ghorepani-poon-hill-trek"}
              >
                {" "}
                Ghorepani Poon Hill Trek{" "}
              </Link>
              , and
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/khumai-danda-trek"}
              >
                {" "}
                Khumai Danda Trek
              </Link>{" "}
              to challenging and thrilling
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/annapurna-circuit-trek"}
              >
                {" "}
                Annapurna Circuit Trek{" "}
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/north-annapurna-base-camp-trek"}
              >
                {" "}
                North ABC Trek{" "}
              </Link>
              , and
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/dhaulagiri-circuit-trek"}
              >
                {" "}
                Dhaulagiri Circuit Trek{" "}
              </Link>
              , the Annapurna Region offers a range of options. <br /> <br />
              Moreover, if you are looking for a spiritual break from the
              regular hectic life, then
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/jomsom-muktinath-trek"}
              >
                {" "}
                Jomsom Muktinath{" "}
              </Link>{" "}
              Nepal
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking itineraries
              </Link>{" "}
              are what spiritual people go with. During the peak season,
              thousands of devotees make this trek as a religious tour. These
              treks combine religious and spiritual connection with natural
              wonders, making the most out of the journey with life-lasting
              memories. <br /> <br />
              Similarly, the treks in the Annapurna Region are not only popular
              for the Mountains’ beauty or the spiritual practices, but also for
              the authentic cultural experiences, warm and welcoming locals,
              natural beauty, and ancient architecture. Learn about the
              authentic and untouched cultural beauty of Nepal with
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/annapurna-base-camp-trek"}
              >
                {" "}
                Annapurna Base Camp{" "}
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kori-trek"}
              >
                {" "}
                Kori{" "}
              </Link>
              , and
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/ghorepani-poon-hill-trek"}
              >
                {" "}
                Poon Hill treks{" "}
              </Link>
              . Explore this hidden gem of the Annapurna Region with
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/"}
              >
                {" "}
                Hi Nepal Travels and Treks{" "}
              </Link>
              , a reliable trekking agency in Nepal. <br />
              Besides its
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking{" "}
              </Link>
              possibilities, the Annapurna Region is a biodiversity haven.
              Trekkers can expect to be welcomed by lush rhododendron forests,
              exotic orchids, waterfalls, and wildlife such as Himalayan thar,
              langur monkeys, and a variety of bird species in all their
              colorful plumage along the trails. The changing landscapes, from
              the terraced fields to alpine meadows and glacial valleys, ensure
              that every step of the journey is refreshing and exhilarating.
              <br />
              What makes the Annapurna Region even more remarkable is the
              accessibility it provides to trekkers of all types. From a veteran
              mountaineer seeking challenging high passes like Thorang La on the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/dhaulagiri-circuit-trek"}
              >
                {" "}
                Dhaulagiri Circuit Trek{" "}
              </Link>
              to a beginner seeking short pleasant strolls, the region provides
              options that cater to every type of trekker. Coupled with
              breathtaking sunrise over Poon Hill, cultural immersion in Gurung
              and Magar villages, and the spiritual tranquility of Muktinath,
              the Annapurna Region truly offers a complete Himalayan experience.
            </p>
          )}
          {region.includes("langtang") && (
            <p className="text-xl text-justify">
              Located on the northern side of Kathmandu Valley, the Langtang
              Region offers some of the classic Langtang trekking routes, such
              as the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/langtang-gosaikunda-trek"}
              >
                {" "}
                Langtang Gosaikunda trek{" "}
              </Link>
              , the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/langtang-valley-trek"}
              >
                {" "}
                Langtang Valley trek{" "}
              </Link>
              , and the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/helambu-trek"}
              >
                {" "}
                Helambu Trek
              </Link>
              . This reason is also the perfect blend of the stunning landscape
              and mountain views, and cultural significance.
              <br />
              Cultural immersion is also the highlight of the Langtang region.
              The trekker can explore Tamang villages with Tibetan-influenced
              culture, where ancient monasteries, chortens, and mani walls
              reflect deep spiritual heritage. Rich in natural biodiversity, the
              Langtang Region is home to several species of flora and fauna.
              With fewer crowds, this region gives a tranquil and thrilling
              experience. Trekkers on the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/langtang-valley-trek"}
              >
                {" "}
                Langtang Trek
              </Link>{" "}
              routes are treated to diverse landscapes, from subtropical forests
              filled with rhododendrons and bamboo to high-altitude terrains
              where prayer flags flutter against dramatic Himalayan backdrops.{" "}
              <br /> Another highlight of the Langtang Region is the
              breathtaking view of Langtang Lirung, the highest peak in the
              area, along with panoramic vistas of Dorje Lakpa, Ganesh Himal,
              and other surrounding peaks. The region also offers pristine
              alpine lakes like Gosaikunda, which hold immense spiritual
              significance for both Hindus and Buddhists, attracting pilgrims
              every year. <br />
              For trekkers looking for a more authentic and off-the-beaten-path
              experience, Langtang provides an ideal balance of adventure and
              serenity. With its combination of mountain views, cultural
              exploration, and natural beauty, this region is a perfect choice
              for those seeking a rewarding Himalayan journey without the heavy
              crowds of more commercial trekking routes. Explore the Langtang
              Trekking Region with Hi Nepal Travels and Treks Pvt. Ltd, one of
              the reputed tour agencies in Nepal.
            </p>
          )}

          {region.includes("manaslu") && (
            <p className="text-xl text-justify">
              <p>
                Immersion in the local Tibetan-influenced culture is one of the
                hiking highlights in the Manaslu region. Trekkers can enjoy both
                the natural beauty and a rich cultural experience in this area,
                which is home to old Buddhist temples, prayer wheels, and
                chortens.
              </p>
              <p>
                The Manaslu region offers a more remote and peaceful experience
                than other trekking sites in Nepal, even with its growing
                popularity. For daring trekkers seeking a more
                off-the-beaten-path experience, the Manaslu Region treks, such
                as the
                <HLinkComp
                  text="Manaslu Circuit Trek"
                  href="/manaslu-circuit-trek"
                  comma
                />
                <HLinkComp
                  href="/manaslu-tsum-valley-circuit-trek"
                  text="Manaslu and Tsum Valley Circuit Trek"
                  comma
                />
                and the
                <HLinkComp
                  href="/tsum-valley-trek"
                  text="Tsum Valley Trek"
                  comma
                />
                are the hidden gems because of their breathtaking landscapes,
                cultural diversity, and lack of tourists.
              </p>
              <p>
                In addition to its cultural richness, the Manaslu region is also
                blessed with diverse natural beauty. Trekkers have a lot to
                expect in the form of lush forests, waterfalls, high-altitude
                passes, and stunning views of Manaslu, the eighth-highest
                mountain peak on Earth. The Manaslu region also provides the
                opportunity for true contact with local villagers. Lodging in
                simple teahouses and villages allows trekking guests to
                experience firsthand daily routines, traditions, and the warm
                reception of the people who inhabit this remote area. Combined
                with the peace of the trails and the stunning Himalayan
                landscape,
                <Link
                  className="text-green-700"
                  href={"https://hinepaltreks.com/manaslu-circuit-trek"}
                >
                  {" "}
                  trekking in Manaslu{" "}
                </Link>
                is a truly unique and memorable experience. Explore the Manaslu
                Region with{" "}
                <Link
                  className="text-green-700"
                  href={"https://hinepaltreks.com/"}
                >
                  Hi Nepal Travels and Treks
                </Link>
                , one of the best trekking companies in Nepal.
              </p>
            </p>
          )}
          {region.includes("dolpo-region") && (
            <p className="text-xl text-justify">
              Dolpo's trekking visitors are greeted by landscapes of drama, arid
              valleys, rocky cliffs, azure Phoksundo Lake, and towering
              snow-white peaks. The region is equally culturally rich, with
              centuries-old monasteries, traditional villages, and the Bon
              faith, dating back to pre-Buddhism. Wind-whipped prayer flags,
              chortens, and mani walls reflect the deep spiritual nature of the
              place. <br />
              Compared to the more touristy treks of Nepal, Dolpo provides an
              unparalleled sense of isolation and tranquility. Treks such as the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/upper-dolpo-trek"}
              >
                {" "}
                Upper Dolpo Trek
              </Link>
              ,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/lower-dolpo-trek"}
              >
                {" "}
                Lower Dolpo Trek
              </Link>
              , and
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/shey-phoksundo-lake-trek"}
              >
                {" "}
                Shey Phoksundo Lake Trek
              </Link>{" "}
              introduce one to both natural splendor and an age-old way of life
              that remains unscathed. For those seeking an off-the-beaten-path
              adventure filled with raw beauty and cultural depth, Dolpo is a
              Himalayan secret gem. <br />
              One of Dolpo's most fascinating attractions is Shey Phoksundo
              National Park, the largest national park in the country. The park
              boasts a dense variety of wildlife, including blue sheep,
              Himalayan thar, snow leopard, and musk deer. Unspoiled Phoksundo
              Lake, in its mesmerizing turquoise hue, is the jewel of the region
              and one of Nepal's most well-known natural tourist sites. <br />
              Further,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking
              </Link>
              in Dolpo is not just a test of physical stamina; it's a step back
              in time. The trails bring one along ancient trade routes once used
              by caravans coming into Tibet, and it is possible to glimpse the
              history of the region as a cultural and commercial crossroads in
              an otherwise out-of-the-way corner. The coming together of rugged
              landscapes, religious traditions, and simple village life makes
              Dolpo a destination for adventurers willing to make the journey
              into the Himalayas in all their unspoiled splendor. Explore this
              hidden gem with{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/"}
              >
                Hi Nepal Travels and Treks
              </Link>
              , a reliable trekking agency in Nepal.
            </p>
          )}
          {region.includes("kanchenjunga") && (
            <p className="text-xl text-justify">
              The{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/trekking/kanchenjunga-region"
                }
              >
                Kanchenjunga Region
              </Link>{" "}
              is one of the most remote and raw{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                trekking{" "}
              </Link>
              areas in Nepal, with breathtaking Himalayan scenery and rich
              cultural exposure. Trekkers can choose to visit the{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/kanchenjunga-north-base-camp-trek"
                }
              >
                Kanchenjunga North Base Camp
              </Link>{" "}
              or the{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/kanchenjunga-south-base-camp-trek"
                }
              >
                Kanchenjunga South Base Camp
              </Link>
              , each of which provides different angles of the world's
              third-highest peak. <br />
              From encounters with locals belonging to several communities like
              Rai, Limbu, Tamang, and Sherpas, to exploring the pristine beauty
              of nature, treks in the Kanchenjunga Region serve all. For the
              adventurers, the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
              >
                Kanchenjunga Circuit Trek{" "}
              </Link>
              combines both routes, providing an unforgettable experience of
              trekking along alpine forests, high-altitude passes, and
              centuries-old villages in this unspoiled corner of Nepal. Unlike
              the{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/trekking/everest-region"
                }
              >
                Everest{" "}
              </Link>
              or{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/trekking/annapurna-region"
                }
              >
                Annapurna Region Treks{" "}
              </Link>
              , the Kanchenjunga Region is less crowded, perfect for adventure
              seekers, along with peace seekers. <br /> Apart from its cultural
              riches, the Kanchenjunga Region is also famous for its
              biodiversity. Much of the trekking trail lies within the
              Kanchenjunga Conservation Area, home to exotic fauna such as the
              snow leopard, red panda, Himalayan black bear, and a variety of
              bird species. The changing scenery, from lush lowland forests to
              alpine meadows and glacial terrain, makes the trek both
              challenging and breathtaking. <br /> The region is also sacred,
              and Mount Kanchenjunga is treated as a sacred mountain by the
              locals. Trekkers can also experience sacred caves, monasteries,
              and prayer flags that reflect the intense spiritual connection of
              the locals with the Himalayas. The Kanchenjunga Region offers a
              truly unbeatable{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                trekking experience{" "}
              </Link>
              for those who want to view natural grandeur and cultural wealth.
            </p>
          )}

          {region.includes("multi-days-tour") && (
            <p className="text-xl text-justify">
              Nepal is known for its{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                multiple treks
              </Link>{" "}
              around various parts of Nepal.{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/tours"}
              >
                Nepal tours
              </Link>{" "}
              are equally renowned, which demand less physical strength compared
              to several treks in the{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/trekking/everest-region"
                }
              >
                Everest
              </Link>{" "}
              or
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/trekking/annapurna-region"
                }
              >
                {" "}
                Annapurna region
              </Link>
              . From short tours exploring the city life with the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kathmandu-tour-package"}
              >
                Kathmandu tour package
              </Link>{" "}
              to traditional cultural village tours like{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/sikles-village-tour"}
              >
                {" "}
                Sikles
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/panchase-trek"}
              >
                {" "}
                Panchase
              </Link>
              , and the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/ghandruk-village-tour"}
              >
                {" "}
                Ghandruk Village tour
              </Link>
              . Nepal tour packages are filled with tons of options. <br /> If
              you want a longer tour, exploring the remote areas of Nepal, you
              can have a variety of options for multi-day Nepal tours, including{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kalinchowk-trek"}
              >
                {" "}
                Kalinchowk
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/rara-lake-tour-nepal"}
              >
                {" "}
                Rara Lake
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/tilicho-lake-tour"}
              >
                {" "}
                Tilicho Lake
              </Link>
              , and
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/upper-mustang-tour"}
              >
                {" "}
                Upper Mustang Tours
              </Link>
              , which are the perfect tour itinerary for you. <br /> These
              multi-day Nepal tours are planned carefully to make the most out
              of your journey, leaving life-lasting memories.
            </p>
          )}

          {region.includes("day-tours") && (
            <p className="text-xl text-justify">
              The Short Day tours in Nepal are a perfect adventure for people
              with limited time, or looking for a quick getaway from their
              regular hectic schedule. For those who want a{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking
              </Link>{" "}
              experience with fewer physical demands and in a short time,
              one-day tours in Nepal offer various short hikes in the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/pokhara-valley-tour"}
              >
                {" "}
                Pokhara valley
              </Link>
              , including
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/sarangkot-pokhara-tour"}
              >
                {" "}
                Sarangkot
              </Link>
              ,
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/world-peace-pagoda"}
              >
                {" "}
                World Peace Pagoda
              </Link>
              ,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kalikasthan-thulakot-hill"}
              >
                {" "}
                Kalikasthan Thulakot
              </Link>
              , and the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kalikasthan-thulakot-hill"}
              >
                {" "}
                Australian Camp tour
              </Link>
              . <br />
              Each of the one-day{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/tours"}
              >
                {" "}
                tours in Nepal
              </Link>{" "}
              is planned with the itineraries to make the most out of your trip
              in Nepal. From enjoying the magical vista of the Himalayas and
              natural landscapes to learning the unique traditional cultures of
              Nepal, these tour itineraries offer everything you desire. <br />
              If you are a nature lover and want to witness the epic Himalayan
              range, Thulakot and Saragnkot are two of the{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/viewpoints-for-annapurna-region"
                }
              >
                {" "}
                major viewpoints for the Annapurna Range
              </Link>
              . Enjoy your short day-tours in Nepal with the One of the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/assets/hinepal-logo.webp"}
              >
                {" "}
                best trekking agencies in Nepal
              </Link>
              .
            </p>
          )}
          {region.includes("nature-wildlife") && (
            <p className="text-xl text-justify">
              In addition to its wildlife, Nepal's natural scenery also offers
              challenging possibilities for adventure. From jungle walks along
              the Terai to bird watching tours in{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/chitwan-national-park-tour"}
              >
                {" "}
                Chitwan National Park{" "}
              </Link>
              and{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/bardiya-national-park-tour"}
              >
                {" "}
                Bardiya National Park
              </Link>
              , tourists can glimpse exotic wildlife such as the one-horned
              rhinoceros and Bengal tiger in their natural habitats. The
              foothills of the Himalayas are similarly varied, with several
              hundred species of orchids, medicinal plants, and butterflies
              adding to the country's ecological splendor. <br />
              Aside from its natural abundance, Nepal's scenery is filled with
              cultural and religious significance as well. The majority of
              sacred sites, including lakes, caves, and forests, are closely
              associated with local legends and traditions, providing travelers
              with the best of nature and culture in the same trip. Whether{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/activities/trekking"}
              >
                {" "}
                trekking{" "}
              </Link>
              over rhododendron trees, rafting over virgin rivers, or exploring
              UNESCO-listed national parks,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/"}
              >
                {" "}
                Hi Nepal Travels and Treks
              </Link>{" "}
              promises a once-in-a-lifetime experience that blends conservation,
              adventure, and authentic interaction with locals.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
