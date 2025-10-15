import { parseFAQsServer } from "@/utils/parse-faqs"; // Server Utility
import FAQRenderer from "@/components/organisms/faq-renderer"; // Client Component

// This component is now a Server Component!
export default function FAQSection({ html }: { html: string }) {
  // 1. Execute the parsing on the server
  const faqs = parseFAQsServer(html);

  // 2. Pass the clean, structured data to the client component for interactivity
  return <FAQRenderer faqs={faqs} />;
}