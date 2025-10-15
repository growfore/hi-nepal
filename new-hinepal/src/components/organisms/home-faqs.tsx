import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function HomeFAQs() {
  const faqs = [
    {
      question: "When is the best time to travel to Nepal?",
      answer:
        "Visiting Nepal is worth it any time of the year. However, being specific, Spring (March-May) and Autumn (September-November) are considered to be the most ideal times to visit Nepal. During these months, the weather is clear and the temperature is moderate.",
    },
    {
      question: "Is it safe to travel to Nepal right now?",
      answer:
        "Yes, it's very safe to travel to Nepal now as the government is more concerned about tourism than ever.",
    },
    {
      question: "What is the elevation of Kathmandu, Nepal?",
      answer:
        "Kathmandu is situated at an elevation of 1,300 m above sea level.",
    },
    {
      question: "What other countries border Nepal?",
      answer:
        "China from the north and India from the east, west, and south share their border with Nepal.",
    },
    {
      question: "Where is Nepal located?",
      answer:
        "Nepal is a landlocked country in South Asia, situated between India and China.",
    },
    {
      question: "What does Nepal's flag look like?",
      answer:
        "Nepal’s flag is the most unique flag in the world. It’s a red two-rectangle flag with a blue border, with a white sun and a mix of half sun and moon in the middle of each triangle.",
    },
    {
      question: "What is currency of Nepal?",
      answer: "The currency of Nepal is Nepalese Rupee (NPR).",
    },
    {
      question: "What is the capital of Nepal?",
      answer: "Kathmandu is the Capital of Nepal.",
    },
  ];

  return (
    <div className="p-4 flex flex-col md:flex-row justify-between gap-4 container mx-auto my-24">
      <div className="mb-4">
        <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="bg-slate-100 p-4  rounded-[32px] w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full "
          defaultValue="item-0"
        >
          {faqs.map((faq, index) => {
            return (
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-lg">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
          <AccordionItem value={"mount-everest"}>
            <AccordionTrigger className="text-lg cursor-pointer hover:cursor-pointer">
              Where is mount everest located?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-lg">
                <Link
                  className="text-green-700"
                  href={"https://hinepaltreks.com/where-is-mount-everest"}
                >
                  {" "}
                  Mount Everest is located on the border of Nepal and China{" "}
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
