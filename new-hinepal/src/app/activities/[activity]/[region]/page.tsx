import TrekkingCard from "@/components/TrekkingCard";
import endpoints from "@/constant/endpoints";
import { formatSlug } from "@/helper/formatSlug";
import { get } from "@/utils/request-hander";
import { LucideChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<any> {
  const { region, activity } = params;
  let title = `${formatSlug(region)} - Hi Nepal Travel and Treks`;
  let description = "";
  let keywords = "";

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
    description =
      "Discover all planned Hi Nepal Travels and Treks' multi-day tours, explore Nepal with our travel and trekking agency in Nepal.";
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
  if (region.includes("nature-wildlife")) {
    (description =
      "Explore Nepal's rich biodiversity with Hi Nepal Travels and Treks. Experience Chitwan & Bardiya National Parks with guided by a trusted trekking agency in Nepal."),
      (keywords = "trekking agency in nepal");
  }
  if (region.includes("day-tours")) {
    (description =
      "Hi Nepal Travels and Treks offers exciting day tours in Nepal, exploring cultural sites, natural beauty, and adventure sports with the best travel and tour agency."),
      (keywords = "day tours in nepal, travel and trekking agency");
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

  return {
    title: formatSlug(params.region) + " - Hi Nepal Travel and Treks",
    description: description || undefined,
    keywords: keywords || undefined,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_FRONTEND_BASE_URL +
          `/activities/${params.activity}/${params.region}` || " ",
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

  await get({
    endPoint: endpoints.DESTINATIONS + "/" + region,
    token: "",
    success: (_, res) => {
      data = res.data?.packages;
    },
    failure: (message) => {
      notFound();
    },
  });

  return (
    <div className="mt-24 flex flex-col gap-4 p-4">
      <div className="md:min-h-[40vh] mt-12  flex flex-col p-4  md:p-8 md:items-center border-b-2 border-black">
        <h1 className="font-bold md:text-center text-6xl lg:text-9xl">
          {region.includes("wildlife")
            ? "Nature and Wildlife Tours"
            : formatSlug(region)}
        </h1>
        {region.includes("everest") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Experience an opportunity to witness the world’s highest mountain,
            Mount Everest (Sagarmatha Himal), along with other tall snow-capped
            mountains while trekking through the Everest Region, Nepal. Learn
            the unique ancient Himalayan culture while walking along the
            stunning landscape of the Everest Region trek. The Everest region
            trek is one of the heavenly paradises on Earth, offering some of the
            major trekking routes in Nepal, such as the{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/everest-base-camp-trek"}
            >
              {" "}
              Everest Base Camp Trek
            </Link>
            , the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/chola-pass-gokyo-trek"}
            >
              {" "}
              Everest Cho La Pass Trek
            </Link>
            , the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/gokyo-valley-trek"}
            >
              {" "}
              Gokyo Ri Trek
            </Link>
            , and the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/pikey-peak-trek"}
            >
              {" "}
              Pikey Peak Trek
            </Link>
            .
          </p>
        )}
        {region.includes("annapurna") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Explore some of the popular snow-capped Mountains such as Annapurna
            I, II, III, IV, Machhapuchhre (Fishtail), Dhaulagiri, and Nilgiri of
            the Annapurna Region. Along with the opportunity to learn about the
            cultural significance of authentic villages situated between the
            mesmerizing landscape vista of Nepal. From one of the popular
            trekking routes in Nepal
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/annapurna-base-camp-trek"}
            >
              {" "}
              Annapurna Base Camp trek
            </Link>
            , to recently getting popular trails like the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/north-annapurna-base-camp-trek"}
            >
              {" "}
              North Annapurna Base Camp
            </Link>
            and
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/khumai-danda-trek"}
            >
              {" "}
              Khumai Danda{" "}
            </Link>
            ,the Annapurna region is filled with options.
          </p>
        )}
        {region.includes("langtang") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            The Langtang Trek is one of Nepal's most satisfying short treks with
            magnificent mountain views, green forests, and rich cultural
            experiences within a short drive from Kathmandu. Referred to as the
            "valley of glaciers," Langtang Trekking is surrounded by
            snow-covered mountains, Langtang Lirung (7,227 m), and dotted with
            yak herds, alpine meadows, and rural villages.
          </p>
        )}
        {region.includes("manaslu") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Explore the Manaslu region, one of the remote and off-the-beaten
            trekking regions of Nepal, which is home to the world’s
            eighth-highest mountain, Mount Manaslu. The unspoiled landscapes,
            traditional towns, and stunning mountain views in this region make
            it a one-of-a-kind place to go trekking, with itineraries including
            the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/manaslu-circuit-trek"}
            >
              {" "}
              Manaslu Circuit Trek
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/manaslu-tsum-valley-circuit-trek"}
            >
              {" "}
              Manaslu and Tsum Valley Circuit Trek
            </Link>
            , and the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/tsum-valley-trek"}
            >
              {" "}
              Tsum Valley Trek
            </Link>
            .
          </p>
        )}
        {region.includes("dolpo") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Dolpo, Nepal's hidden paradise, offers a lifetime adventure trekking
            experience with its unspoiled wilderness, high elevation, and
            timeless Tibetan culture. The region is dotted with striking
            landscapes, barren valleys, boulder-covered ridges, and sparkling
            Phoksundo Lake. Treks like the{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/upper-dolpo-trek"}
            >
              {" "}
              Upper Dolpo Trek
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/lower-dolpo-trek"}
            >
              {" "}
              Lower Dolpo Trek
            </Link>
            , and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/shey-phoksundo-lake-trek"}
            >
              {" "}
              Shey Phoksundo Lake Trek
            </Link>{" "}
            provide an atmosphere of utter isolation and cultural diversity.
          </p>
        )}
        {region.includes("multi-days-tour") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Embark on multiday tours in Nepal for a deeper exploration of the
            country’s breathtaking landscapes, vibrant culture, and adventurous
            spirit. Unlike short trips, these tours allow travelers to
            experience Nepal at a slower pace, immersing themselves in both
            natural beauty and authentic local life. Get an exposure to Nepal's
            diverse beauty with Planned multi-day tours like
            <Link className="text-green-700" href={"/upper-mustang-tour"}>
              {" "}
              Upper Mustang Tour
            </Link>
            ,
            <Link className="text-green-700" href={"/rara-lake-tour-nepal"}>
              Rara Lake Tour
            </Link>
            , and
            <Link className="text-green-700" href={"/ghandruk-village-tour"}>
              Ghandruk Village Tour
            </Link>
            , with a reputed tour agency in Nepal.
          </p>
        )}
        {region.includes("day-tours") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Day tours in Nepal are the perfect way to experience the country’s
            cultural richness and natural beauty in a short amount of time.
            Ideal for travelers with limited schedules, with a reputed tour
            agency in Nepal, the tours like
            <Link className="text-green-700" href={"/pokhara-valley-tour"}>
              {" "}
              Pokhara Valley Tour,
            </Link>
            <Link className="text-green-700" href={"/world-peace-pagoda"}>
              {" "}
              World Peace Pagoda Tour,{" "}
            </Link>{" "}
            and
            <Link className="text-green-700" href={"/sarangkot-pokhara-tour"}>
              {" "}
              Sarangkot Tour
            </Link>
            allow you to explore iconic landmarks, bustling cities, and stunning
            viewpoints without the need for overnight stays.
          </p>
        )}
        {region.includes("nature-wildlife") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            Nepal is a paradise for nature and wildlife enthusiasts, offering
            diverse ecosystems that range from subtropical forests to alpine
            meadows and high Himalayan peaks. The country is home to some of the
            world’s rarest flora and fauna, thriving within its rich landscapes
            and protected National Parks such as
            <Link
              className="text-green-700"
              href={"/chitwan-national-park-tour"}
            >
              {" "}
              Chitwan National Park
            </Link>{" "}
            and
            <Link
              className="text-green-700"
              href={"/bardiya-national-park-tour"}
            >
              {" "}
              Bardiya National Park.{" "}
            </Link>
            Explore the diverse natural beauty with Hi Nepal Travels and Treks,
            one of the best tour operators in Nepal.
          </p>
        )}
        {region.includes("kanchenjunga") && (
          <p className="text-left md:text-center md:mt-4 italic text-xl">
            The{" "}
            <Link
              className="text-green-700"
              href={
                "https://hinepaltreks.com/activities/trekking/kanchenjunga-region"
              }
            >
              Kanchenjunga Region
            </Link>{" "}
            in Nepal offers remote{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/trekking"}
            >
              trekking
            </Link>{" "}
            with stunning Himalayan scenery and rich cultural exposure. Trekkers
            can visit{" "}
            <Link
              className="text-green-700"
              href={
                "https://hinepaltreks.com/kanchenjunga-north-base-camp-trek"
              }
            >
              Kanchenjunga North
            </Link>{" "}
            or{" "}
            <Link
              className="text-green-700"
              href={
                "https://hinepaltreks.com/kanchenjunga-south-base-camp-trek"
              }
            >
              South Base Camps
            </Link>
            , and the{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
            >
              Kanchenjunga Circuit Trek
            </Link>{" "}
            combines both routes.
          </p>
        )}
        <div className="lg:px-32 flex flex-col gap-2 mt-4 text-green-700">
          <div className="flex gap-1">
            <Link href={"/"}>Home</Link>
            <LucideChevronRight />{" "}
            <Link href={`/activities/${activity}`}>
              {activity?.charAt(0).toUpperCase() + activity.slice(1)}{" "}
            </Link>{" "}
            <LucideChevronRight />{" "}
            <Link href={`/activities/${activity}/${region}`}>
              {" "}
              {region.split("-")[0].charAt(0).toUpperCase() +
                region.split("-")[0].slice(1) +
                " " +
                region.split("-")[1].charAt(0).toUpperCase() +
                region.split("-")[1].slice(1)}
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-32">
        {/* @ts-ignore */}
        {data &&
          data?.length > 0 &&
          data?.map((d, idx) => {
            return (
              <Link key={idx} href={`/${d.slug}`}>
                <TrekkingCard
                  slug={d.slug}
                  title={d.title.split(":")[0]}
                  image={d.thumbnail}
                  days={d.duration}
                />
              </Link>
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
      <div className="p-2 md:px-12 lg:px-24">
        {region.includes("everest") && (
          <p className="text-justify font-medium italic text-xl">
            Home to the world’s highest peak, Mount Everest, the Everest region
            in Nepal, offers tons of adventures to adventure lovers, such as
            walking to the world’s highest passes to climbing 8000 m+ mountains.
            Located in the northeastern part of Nepal, the Everest region is
            home to many snow-capped mountains such as Mount Everest, Lhotse,
            Makalu, Ama Dablam, and Cho Oyu. The Everest region trekking is not
            just about hiking to high altitude regions of Nepal, but also about
            exploring the natural and cultural beauties of Nepal. While in this
            region, you will have opportunities to closely observe rare wildlife
            such as the snow leopard, red panda, and Monal. Also, witness the
            lush and multi-colored Rhododendron forest while on the{" "}
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
            is also an opportunity to experience the friendly hospitality of the
            Sherpa people, who are renowned for their mountaineering skills and
            profound Buddhist heritage. Trips to old monasteries such as
            Tengboche and Pangboche offer trekkers an opportunity to feel the
            spiritual nature of the Himalayas, along with an opportunity to
            comprehend the cultural heritage of the Khumbu region. <br />{" "}
            Besides, the region has a number of treks suitable for each
            adventure-seeker, from challenging high-altitude treks to more
            modest, easier treks that still get to enjoy the majesty of the
            Himalayas. If you wish to reach Everest Base Camp or you simply wish
            to acquire stunning mountain views, the Everest area promises
            memories with adventure, culture, and nature to appreciate.
          </p>
        )}
        {region.includes("annapurna") && (
          <p className="text-lg text-justify font-medium">
            The Annapurna Region is home to several trekking routes. From short
            and beginner-friendly treks like the{" "}
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
            Moreover, if you are looking for a spiritual break from the regular
            hectic life, then
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
            are what spiritual people go with. During the peak season, thousands
            of devotees make this trek as a religious tour. These treks combine
            religious and spiritual connection with natural wonders, making the
            most out of the journey with life-lasting memories. <br /> <br />
            Similarly, the treks in the Annapurna Region are not only popular
            for the Mountains’ beauty or the spiritual practices, but also for
            the authentic cultural experiences, warm and welcoming locals,
            natural beauty, and ancient architecture. Learn about the authentic
            and untouched cultural beauty of Nepal with
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
            <Link className="text-green-700" href={"https://hinepaltreks.com/"}>
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
            langur monkeys, and a variety of bird species in all their colorful
            plumage along the trails. The changing landscapes, from the terraced
            fields to alpine meadows and glacial valleys, ensure that every step
            of the journey is refreshing and exhilarating.
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
            and Magar villages, and the spiritual tranquility of Muktinath, the
            Annapurna Region truly offers a complete Himalayan experience.
          </p>
        )}
        {region.includes("langtang") && (
          <p className="text-lg text-justify font-medium">
            Located on the northern side of Kathmandu Valley, the Langtang
            Region offers some of the classic Langtang trekking routes, such as
            the{" "}
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
            Cultural immersion is also the highlight of the Langtang region. The
            trekker can explore Tamang villages with Tibetan-influenced culture,
            where ancient monasteries, chortens, and mani walls reflect deep
            spiritual heritage. Rich in natural biodiversity, the Langtang
            Region is home to several species of flora and fauna. With fewer
            crowds, this region gives a tranquil and thrilling experience.
            Trekkers on the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/langtang-valley-trek"}
            >
              {" "}
              Langtang Trek
            </Link>{" "}
            routes are treated to diverse landscapes, from subtropical forests
            filled with rhododendrons and bamboo to high-altitude terrains where
            prayer flags flutter against dramatic Himalayan backdrops. <br />{" "}
            Another highlight of the Langtang Region is the breathtaking view of
            Langtang Lirung, the highest peak in the area, along with panoramic
            vistas of Dorje Lakpa, Ganesh Himal, and other surrounding peaks.
            The region also offers pristine alpine lakes like Gosaikunda, which
            hold immense spiritual significance for both Hindus and Buddhists,
            attracting pilgrims every year. <br />
            For trekkers looking for a more authentic and off-the-beaten-path
            experience, Langtang provides an ideal balance of adventure and
            serenity. With its combination of mountain views, cultural
            exploration, and natural beauty, this region is a perfect choice for
            those seeking a rewarding Himalayan journey without the heavy crowds
            of more commercial trekking routes. Explore the Langtang Trekking
            Region with Hi Nepal Travels and Treks Pvt. Ltd, one of the reputed
            tour agencies in Nepal.
          </p>
        )}

        {region.includes("manaslu") && (
          <p className="text-lg text-justify font-medium">
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
              popularity. For daring trekkers seeking a more off-the-beaten-path
              experience, the Manaslu Region treks, such as the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/manaslu-circuit-trek"}
              >
                {" "}
                Manaslu Circuit Trek
              </Link>
              ,
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/manaslu-tsum-valley-circuit-trek"
                }
              >
                {" "}
                Manaslu and Tsum Valley Circuit Trek
              </Link>
              , and the
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/tsum-valley-trek"}
              >
                {" "}
                Tsum Valley Trek{" "}
              </Link>
              , are the hidden gems because of their breathtaking landscapes,
              cultural diversity, and lack of tourists.
            </p>
            <p>
              In addition to its cultural richness, the Manaslu region is also
              blessed with diverse natural beauty. Trekkers have a lot to expect
              in the form of lush forests, waterfalls, high-altitude passes, and
              stunning views of Manaslu, the eighth-highest mountain peak on
              Earth. The Manaslu region also provides the opportunity for true
              contact with local villagers. Lodging in simple teahouses and
              villages allows trekking guests to experience firsthand daily
              routines, traditions, and the warm reception of the people who
              inhabit this remote area. Combined with the peace of the trails
              and the stunning Himalayan landscape,
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
          <p className="text-lg text-justify font-medium">
            Dolpo's trekking visitors are greeted by landscapes of drama, arid
            valleys, rocky cliffs, azure Phoksundo Lake, and towering snow-white
            peaks. The region is equally culturally rich, with centuries-old
            monasteries, traditional villages, and the Bon faith, dating back to
            pre-Buddhism. Wind-whipped prayer flags, chortens, and mani walls
            reflect the deep spiritual nature of the place. <br />
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
            boasts a dense variety of wildlife, including blue sheep, Himalayan
            thar, snow leopard, and musk deer. Unspoiled Phoksundo Lake, in its
            mesmerizing turquoise hue, is the jewel of the region and one of
            Nepal's most well-known natural tourist sites. <br />
            Further,{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/trekking"}
            >
              {" "}
              trekking
            </Link>
            in Dolpo is not just a test of physical stamina; it's a step back in
            time. The trails bring one along ancient trade routes once used by
            caravans coming into Tibet, and it is possible to glimpse the
            history of the region as a cultural and commercial crossroads in an
            otherwise out-of-the-way corner. The coming together of rugged
            landscapes, religious traditions, and simple village life makes
            Dolpo a destination for adventurers willing to make the journey into
            the Himalayas in all their unspoiled splendor. Explore this hidden
            gem with{" "}
            <Link className="text-green-700" href={"https://hinepaltreks.com/"}>
              Hi Nepal Travels and Treks
            </Link>
            , a reliable trekking agency in Nepal.
          </p>
        )}
        {region.includes("kanchenjunga") && (
          <p className="text-lg text-justify font-medium">
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
              trekking { " "}
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
            Rai, Limbu, Tamang, and Sherpas, to exploring the pristine beauty of
            nature, treks in the Kanchenjunga Region serve all. For the
            adventurers, the{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
            >
              Kanchenjunga Circuit Trek{" "}
            </Link>
            combines both routes, providing an unforgettable experience of
            trekking along alpine forests, high-altitude passes, and
            centuries-old villages in this unspoiled corner of Nepal. Unlike the{" "}
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
            riches, the Kanchenjunga Region is also famous for its biodiversity.
            Much of the trekking trail lies within the Kanchenjunga Conservation
            Area, home to exotic fauna such as the snow leopard, red panda,
            Himalayan black bear, and a variety of bird species. The changing
            scenery, from lush lowland forests to alpine meadows and glacial
            terrain, makes the trek both challenging and breathtaking. <br />{" "}
            The region is also sacred, and Mount Kanchenjunga is treated as a
            sacred mountain by the locals. Trekkers can also experience sacred
            caves, monasteries, and prayer flags that reflect the intense
            spiritual connection of the locals with the Himalayas. The
            Kanchenjunga Region offers a truly unbeatable{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/trekking"}
            >
              trekking experience{" "}
            </Link>
            for those who want to view natural grandeur and cultural wealth.
          </p>
        )}
      </div>
    </div>
  );
}
