import { parseFAQsServer } from "@/utils/parse-faqs"; // Server Utility
import FAQRenderer from "@/components/organisms/faq-renderer"; // Client Component

export default function FAQSection({ html }: { html: string }) {
  const faqs = parseFAQsServer(html);
  return <FAQRenderer faqs={faqs} />;
}