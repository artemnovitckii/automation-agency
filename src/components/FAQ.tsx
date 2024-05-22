import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does your automation agency provide?",
    answer:
      "We offer a range of automation services including process automation, workflow optimization, and AI-driven task automation tailored to your business needs.",
    value: "item-1",
  },
  {
    question: "How can automation benefit my business?",
    answer:
      "Automation can help streamline your business processes, reduce operational costs, improve efficiency, and free up your team to focus on more strategic tasks.",
    value: "item-2",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in various industries including finance, healthcare, manufacturing, retail, and more. Our solutions are adaptable to meet the unique needs of different sectors.",
    value: "item-3",
  },
  {
    question: "Is my data safe with your automation solutions?",
    answer:
      "Yes, we prioritize data security and compliance. Our solutions are designed with robust security measures to ensure your data is protected at all times.",
    value: "item-4",
  },
  {
    question: "How do you determine the areas to automate in my business?",
    answer:
      "We conduct a thorough analysis of your business processes and workflows to identify repetitive and time-consuming tasks that can be automated for better efficiency.",
    value: "item-5",
  },
  {
    question: "What is the cost of your automation services?",
    answer:
      "Our pricing is based on the scope and complexity of the project. We offer competitive rates and a clear pricing structure, ensuring you get value for your investment.",
    value: "item-6",
  },
  {
    question:
      "Do you provide support and maintenance for your automation solutions?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your automation solutions run smoothly and continue to meet your business needs.",
    value: "item-7",
  },
  {
    question: "How long does it take to implement an automation solution?",
    answer:
      "The implementation time varies depending on the complexity of the project. We work efficiently to ensure a timely deployment while maintaining high-quality standards.",
    value: "item-8",
  },
  {
    question:
      "Can your automation solutions integrate with our existing systems?",
    answer:
      "Yes, our solutions are designed to integrate seamlessly with your existing systems and software, ensuring a smooth transition and minimal disruption to your operations.",
    value: "item-9",
  },
  {
    question: "How do I get started with your automation services?",
    answer:
      "Getting started is easy. Contact us for a free consultation, and we'll work with you to understand your needs and develop a customized automation strategy.",
    value: "item-10",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="/free-automation-consultation"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
