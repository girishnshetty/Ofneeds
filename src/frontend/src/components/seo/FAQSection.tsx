import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
}

export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
}: FAQSectionProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, [faqs]);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold text-[#1a2744] mb-8 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {heading}
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="bg-white rounded-lg border border-gray-200 px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1a2744] hover:text-[#c9a84c] py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
