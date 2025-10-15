"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

// This component is purely for rendering the interactive UI
export default function FAQRenderer({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faqs"
      className="scroll-mt-42 mb-12 p-6 rounded-sm border-y border-gray-300"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">FAQs</h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-lg no-underline hover:no-underline hover:text-green-700 cursor-pointer font-semibold flex justify-between">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}