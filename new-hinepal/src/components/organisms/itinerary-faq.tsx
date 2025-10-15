"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection({ html }: { html: string }) {
  const parseFAQs = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const faqItems: { question: string; answer: string }[] = [];

    const questions = doc.querySelectorAll("ol li h3");
    questions.forEach((q) => {
      const question = q.textContent?.trim() || "";
      const answerEl = q.closest("ol")?.nextElementSibling; // the <p> tag after each <ol>
      const answer = answerEl?.innerHTML || "";
      if (question && answer) faqItems.push({ question, answer });
    });

    return faqItems;
  };

  const faqs = parseFAQs(html);

  return (
    <section
      id="faqs"
      className="scroll-mt-42 mb-12 p-6 bg-white rounded-lg shadow-md border-dashed border-2 border-orange-400"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">FAQs</h2>

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
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
