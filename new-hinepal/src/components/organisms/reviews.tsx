"use client";
import Link from "next/link";
import { ReviewCard } from "../molecules/review-card";
import { Button } from "../ui/button";

export default function ReviewsGroup() {
  const reviews = [
    {
      user: {
        name: "Sean I",
        contributionsCount: 2,
      },
      rating: 5,
      title: "Mohan the Magnificent 😊",
      date: "Aug 2025",
      tripType: "Solo",
      content: `I first used Mohan's services back in 2022. I then returned to Nepal the following year in 23 and most recently this year I spent June-August in Pokhara. Mohan is a very jovial, friendly laid back fellow and first time we met we had an instant connection. He's mostly helped me with transport to and from Pokhara & Kathmandu, but also most recently I used one of his fine jeeps to take me to Muktinath. Also his drivers are very experienced lovely people so the journeys have been great!.

His prices are very competitive, and he's given me some nice discounts over the years so I'm grateful for that. Also whenever I've had to change my plans last minute he's been extremely flexible in accommodating my needs. I consider Mohan a friend and will continue to use his services in my future travels to Nepal.

I'd highly recommend anyone to use Mohan, whether it be for trekking or taxi services, he's well established & connected and always has a can do attitude with a smile.

Cheers Mohan 👋 😊`,
      likesCount: 1,
      isLiked: false,
    },
    {
      user: {
        name: "Barbara K",
        contributionsCount: 5,
      },
      rating: 5,
      title: "Great experience",
      date: "Apr 2025",
      tripType: "Couples",
      content: `Great experience. Mohan helped us organise a great 7-day trek, helped also with transport to Pokhara and always answered our questions. The communication was very good and clear. Our trek was fully organised, our guide really friendly and we enjoyed every minute of it. The price was also good.`,
      likesCount: 1,
      isLiked: false,
    },
    {
      user: {
        name: "Mark S",
        contributionsCount: 1,
      },
      rating: 5,
      title: "Best service in Pokhara!",
      date: "Aug 2025",
      tripType: "Solo",
      content: `Outstanding service across multiple offerings! I initially contacted for a solo trek, which was the highlight of my trip. Hi Nepal demonstrated prompt dropoff/pickup, excellent trek guide tailored to my needs, and overall just a great experience. All with only 12 hours notice!

After some travel issues I experienced with my airplane, Hi Nepal also worked with me on a taxi all the way to Kathmandu which removed the anxiety from my situation entirely. I was picked up promptly at the time I requested, and the company stayed in contact with me to ensure all went perfectly.

10/10 - will be using them again for my next trip in Nepal!`,
      likesCount: 1,
      isLiked: false,
    },
  ];

  const handleLike = (index: number) => {
    console.log(`Review ${index + 1} liked!`);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-8">
        Customer Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
            onLike={() => handleLike(index)}
          />
        ))}
        <Link
          target="_blank"
          href="https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
        >
          <Button className="bg-green-700 p-8 hover:cursor-pointer">
            View More Reviews
          </Button>
        </Link>
      </div>
    </div>
  );
}
