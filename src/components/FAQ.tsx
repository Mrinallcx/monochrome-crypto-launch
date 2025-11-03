"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is TOTO token?",
    answer: "TOTO is a next-generation cryptocurrency token built on blockchain technology, designed to provide secure, fast, and transparent digital transactions. It combines innovative smart contract capabilities with a sustainable tokenomics model."
  },
  {
    question: "How can I purchase TOTO tokens?",
    answer: "TOTO tokens can be purchased through major decentralized exchanges (DEX) and select centralized exchanges. You'll need a compatible wallet and some cryptocurrency (usually ETH or USDT) to make the swap."
  },
  {
    question: "What makes TOTO different from other tokens?",
    answer: "TOTO stands out through its commitment to transparency, innovative tokenomics structure, and community-driven governance. Our focus on security and efficiency ensures a reliable and sustainable ecosystem for all holders."
  },
  {
    question: "Is TOTO token secure?",
    answer: "Yes, TOTO is built with advanced cryptographic protocols and has undergone comprehensive security audits. All smart contracts are open-source and verified on the blockchain for complete transparency."
  },
  {
    question: "What are the use cases for TOTO?",
    answer: "TOTO can be used for various purposes including decentralized finance operations, governance voting, staking rewards, and as a medium of exchange within our growing ecosystem of partner applications."
  },
  {
    question: "How is TOTO token governed?",
    answer: "TOTO employs a decentralized governance model where token holders can participate in key decisions affecting the project's future. Voting power is proportional to token holdings, ensuring democratic participation."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 border-t border-black/10">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-black/50 font-light">Support</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-black/10 px-6 rounded-none data-[state=open]:border-black/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-light">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-black/70 pb-6 leading-relaxed font-light">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
