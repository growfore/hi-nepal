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

export default function FAQRenderer({ faqs }: Readonly<{ faqs: FAQItem[] }>) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faqs"
      className="scroll-mt-42  border border-dashed p-2 rounded-md bg-green-200/20 border-green-500/90"
    >
      <h2 className="text-2xl font-bold text-green-700">FAQs</h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-lg no-underline hover:no-underline hover:text-green-700 cursor-pointer font-semibold flex justify-between">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="max-w-none text-lg"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
