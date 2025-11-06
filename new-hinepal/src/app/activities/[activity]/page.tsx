import endpoints from "@/constant/endpoints";
import { get } from "@/utils/request-handler";
import TrekkingCard from "@/components/molecules/TrekkingCard";
import Link from "next/link";
import { ChevronRight, LucideChevronRight } from "lucide-react";

export async function generateMetadata({ params }: any): Promise<any> {
  let activity = params.activity;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/activities/${activity}`,
    { cache: "no-store" }
  );
  const responseData = await response.json();

  let title = responseData?.data?.seo?.metaTitle || "";
  let description = responseData?.data?.seo?.metaDescription || "";

  if (params.activity == "tours") {
    title = "Nepal Tour Packages 2025: Culture, Multi-Day & Safari Tours";
    description =
      "Book the best Nepal Tour Packages for 2025. Discover Kathmandu, Pokhara, & Chitwan Safari with custom multi-day and nature itineraries. Best prices.";
  }
  if (activity == "trekking") {
    title = "Best Trekking Routes & Packages in Nepal (2025)";
    description =
      "Explore the best trekking packages in Nepal, including Everest Base Camp, Annapurna Circuit, and Manaslu. Find short treks, challenging routes, and beginner guides.";
  }
  if (activity == "destination") {
    (title = "Nepal Tours, Tibet Travel & Kailash Mansarovar Yatra Packages"),
      (description =
        "Plan your next journey with Hi Nepal Treks. Discover profound cultural experiences in Nepal, thrilling travel to Tibet, and the spiritual Kailash Mansarovar Yatra.");
  }
  return {
    title: responseData?.data?.seo?.metaTitle || title,
    description: responseData?.data?.seo?.metaDescription || description,
    keywords: responseData?.data?.seo?.metaKeywords,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_FRONTEND_BASE_URL +
        `/activities/${params.activity}` || " ",
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

export default async function ActivitySingle({
  params,
}: {
  params: Promise<{ activity: string }>;
}) {
  const activity = (await params).activity;

  let data;
  await get({
    endPoint: endpoints.ACTIVITIES + "/" + activity,
    token: "",
    success: (_, res) => {
      data = res.data?.destinations;
    },
    failure: (message) => {
      return;
    },
  });
  return (
    <div className="mt-24 p-2 flex flex-col gap-4">
      {activity == "tours" && (
        <div>
          <div className="p-4 relative bg-cover bg-center flex items-start md:items-center  md:justify-center  mt-24 md:mt-32 border-b border-black flex-col">
            <h1 className="font-bold text-4xl lg:text-6xl">
              {activity.charAt(0).toUpperCase() + activity.slice(1)}
            </h1>
            <p className="text-left md:text-center  mt-4 italic text-xl py-4">
              Enhance your journey with one of the best Nepal tour packages.
              Learn about Nepal's unique culture, traditional rituals, friendly
              people, and stunning natural and manmade attractions with a
              planned{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/tours/nature-wildlife"
                }
              >
                nature
              </Link>{" "}
              and{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/tours/multi-days-tour"
                }
              >
                multi-day Nepal tour packages
              </Link>{" "}
              to make your trip memorable.
            </p>
            <div className="lg:px-32 flex flex-col gap-2 px-4 pt-4">
              <div className="flex items-center gap-1 text-green-700">
                <Link href={"/"}>Home</Link>
                <LucideChevronRight />{" "}
                <Link href={`/activities/${activity}`}>
                  {activity.charAt(0).toUpperCase() + activity.slice(1)}{" "}
                </Link>{" "}
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
      {activity == "trekking" && (
        <div className="p-4 relative bg-cover bg-center flex md:items-center md:justify-center  mt-24 md:mt-32 border-b border-black flex-col">
          <h1 className="font-bold text-4xl lg:text-6xl">
            {activity.charAt(0).toUpperCase() + activity.slice(1)}
          </h1>
          <p className="text-left md:text-center  mt-4 italic text-xl">
            Embark some of the best trekking in Nepal, exploring the Himalayan
            regions, strolling around some of the highest peaks such as Mount
            Everest, Annapurna, Manaslu, and many more. Nepal is home to 8 out
            of 14 8000+ m high peaks of the world. With the planned base camp
            trekking in Nepal, including
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/everest-base-camp-trek"}
            >
              {" "}
              Everest Base Camp
            </Link>
            ,
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
              href={"https://hinepaltreks.com/north-annapurna-base-camp-trek"}
            >
              {" "}
              North Annapurna Base Camp
            </Link>
            , and others, you can witness these snow-crowned mountains.
          </p>
          <div className="lg:px-32 flex flex-col gap-2 px-4 pt-4">
            <div className="flex items-center gap-1 text-green-700">
              <Link href={"/"}>Home</Link>
              <LucideChevronRight />{" "}
              <Link href={`/activities/${activity}`}>
                {activity.charAt(0).toUpperCase() + activity.slice(1)}{" "}
              </Link>{" "}
              <ChevronRight />
            </div>
          </div>
        </div>
      )}
      {activity == "destination" && (
        <div className="p-4 relative bg-cover bg-center flex md:items-center md:justify-center  mt-24 md:mt-32 border-b border-black flex-col">
          <h1 className="font-bold text-4xl lg:text-6xl">
            {activity.charAt(0).toUpperCase() + activity.slice(1)}
          </h1>
          <p className="text-left md:text-center  mt-4 italic text-xl">
            Discover the spiritual and cultural wonders of the Himalayas with
            itineraries to Kailash Mansarovar Yatra, Bhutan, and Tibet. From
            sacred pilgrimages and serene monasteries to breathtaking landscapes
            and vibrant traditions, these destinations offer an unforgettable
            journey of peace and adventure.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:px-24 p-2">
        {data &&
          /*@ts-ignore*/
          data?.length > 0 &&
          /* @ts-ignore */
          data.map((d: any, idx: number) => {
            return (
              <Link key={idx} href={`${activity}/${d.slug}`}>
                <TrekkingCard
                  activity={false}
                  slug={d.slug}
                  title={d.name}
                  image={d.image}
                  imageAlt={d.imageAlt}
                />
              </Link>
            );
          })}
      </div>
      <div>
        {activity == "tours" && (
          <div className="container mx-auto  text-justify p-2 md:p-8 text-xl">
            Nepal is a stunning place located in South Asia. Situated between
            two giant countries, China and India, this heavenly country offers
            various tour packages from{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/tours/multi-days-tour"}
            >
              {" "}
              one-day tours
            </Link>
            to{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/tours/multi-days-tour"}
            >
              multi-day Nepal tours
            </Link>
            . <br />
            From a short hike in Pokhara, such as the{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/pokhara-valley-tour"}
            >
              Pokhara Valley
            </Link>
            ,{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/world-peace-pagoda"}
            >
              World Peace Pagoda
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/sarangkot-pokhara-tour"}
            >
              Sarangkot
            </Link>
            , and
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kalikasthan-thulakot-hill"}
            >
              {" "}
              Kalikasthan Thulakot Tours
            </Link>
            , to various long multi-day tours like{" "}
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
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/upper-mustang-tour"}
            >
              {" "}
              Upper Mustang
            </Link>
            , and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kathmandu-tour-package"}
            >
              Kathmandu tour packages
            </Link>
            , Nepal offers it all.
            <br />
            If you are a nature lover and enthusiastic about wildfires, then the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/tours/nature-wildlife"}
            >
              {" "}
              nature and wildlife tour
            </Link>{" "}
            is a perfect Nepal tour package for you offers you{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/chitwan-national-park-tour"}
            >
              {" "}
              Chitwan
            </Link>{" "}
            and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/bardiya-national-park-tour"}
            >
              Bardiya National Park Tours
            </Link>
            . <br />
            Each Nepal tour package is not just about strolling around Nepal,
            but learning about the natural, cultural, and geographical
            significances of Nepal while enjoying the stunning natural beauty of
            the Himalayas. <br />
            Experience the diversity of Nepal with the best tour packages make
            your journey last in your memories forever. From vibrant, busy
            streets to a tranquil Himalayan atmosphere, a well-planned tour in
            Nepal makes your journey full of fun and learning.
            <br />
            If you wish to explore sacred sites and monasteries, a Nepal
            spiritual tour is ideal. The tours take you to the religious heart
            of Nepal, introducing you to Buddhist stupas, Hindu temples,
            meditation centers, and age-old rituals that mirror the country's
            spiritual wealth. Nepal Sightseeing Tour combines nature and
            culture, tours including{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/ghandruk-village-tour"}
            >
              Ghandruk
            </Link>{" "}
            and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/sikles-village-tour"}
            >
              Sikles Village tour
            </Link>
            , for all the enthusiasts who always have something to do with
            digging up historical sites and secret treasures. <br />
            From UNESCO's World Heritage Sites in the Kathmandu Valley to the
            picturesque Himalayan vistas in Pokhara, Nepal tour packages offer
            everything to first-time travelers as well as repeat visitors.
          </div>
        )}
        {activity == "trekking" && (
          <p className="container mx-auto text-justify p-2 md:p-8 text-xl">
            Nepal is home to some of the stunning and popular trekking routes
            offering unique and diverse natural landscapes and mountain views,
            along with raw cultural and traditional significance. Whether you
            are a beginner or a pro, Nepal provides countless options as per
            your desire. If you are a beginner or short on time, short trekking
            in Nepal, such as{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/mardi-himal-trek"}
            >
              {" "}
              Mardi Himal
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/ghorepani-poon-hill-trek"}
            >
              {" "}
              Ghorepani Poon Hill
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/khumai-danda-trek"}
            >
              {" "}
              Khumai Danda
            </Link>
            , and
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/khopra-danda-trek"}
            >
              {" "}
              Korchan Ridge
            </Link>
            , is what you are looking for. At the same time, for experienced
            trekkers who are looking for the more challenging and long routes,
            such as the
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/upper-dolpo-trek"}
            >
              {" "}
              Upper Dolpo
            </Link>
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/dhaulagiri-circuit-trek"}
            >
              {" "}
              Dhaulagiri Circuit
            </Link>
            , and
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
            >
              {" "}
              Kanchenjunga Circuit trek
            </Link>
            , etc., these are the best trekking packages in Nepal. Choose the
            best trekking in Nepal depending upon your fitness level, interest,
            time limitations, and cost to make your journey more convenient.{" "}
            <br />
            Nepal is not only famous for the high-standing mountains, but also
            for different unique cultures and ethnicities. Explore the authentic
            culture of various ethnic groups, such as Brahmin, Chhetri, Gurung,
            Magar, Tamang, and many more, in the remote area of Nepal with
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/lower-dolpo-trek"}
            >
              {" "}
              Lower Dolpo
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/helambu-trek"}
            >
              {" "}
              Helambu
            </Link>
            ,
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/manaslu-circuit-trek"}
            >
              {" "}
              Manaslu Circuit
            </Link>
            , and other Nepal trekking itineraries. While trekking in these
            routes, you can learn about the long history of Nepal.
          </p>
        )}
      </div>
    </div>
  );
}
