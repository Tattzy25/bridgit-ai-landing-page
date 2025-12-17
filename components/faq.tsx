import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "About 2 minutes. Sign up, enter your URL to start indexing (5-30 minutes depending on site size), copy one script tag, and paste it on your site. That's it.",
  },
  {
    question: "Does it work with my website platform?",
    answer:
      "Yes! Bridgit-AI works with any platform that allows custom HTML or script tags, including WordPress, Webflow, Wix, Squarespace, Hugo, Jekyll, and static HTML sites.",
  },
  {
    question: "How is this different from Algolia?",
    answer:
      "Bridgit-AI is simpler (2-minute setup vs weeks of configuration), more affordable (70% cheaper), and designed for non-developers. We handle all the infrastructure so you can focus on your content.",
  },
  {
    question: "What happens if my site has more pages than my plan allows?",
    answer:
      "We'll index up to your plan limit, prioritizing your most important pages. You can upgrade anytime to index more pages, or manually select which pages to prioritize.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're GDPR and SOC2 compliant. Your data is encrypted at rest and in transit. We never share or sell your data, and you can delete everything at any time.",
  },
  {
    question: "Can I customize the search appearance?",
    answer:
      "Yes! Choose from 9 design styles, customize colors to match your brand, position the search anywhere, and even add custom CSS. Creator and Business plans include full branding customization.",
  },
  {
    question: "What kind of analytics do I get?",
    answer:
      "Track what users search for, see top queries and zero-result queries, understand click-through rates, and discover content gaps. Business plans include advanced trending analysis.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "The Hobby plan is free forever with up to 200 indexed pages. For Creator and Business plans, you can start with a 14-day free trial, no credit card required.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Got questions? We've got answers.</p>
        </div>

        <div className="bg-background rounded-2xl border border-border shadow-xl p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
