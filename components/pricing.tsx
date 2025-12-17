import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Hobby",
    price: "Free",
    description: "Perfect for portfolios & personal blogs",
    features: [
      "Up to 200 indexed pages",
      "Monthly re-crawl",
      "Basic search (no personalization)",
      "3 design styles",
      '"Powered by Bridgit-AI" branding',
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "$12",
    period: "/month",
    description: "For serious content creators",
    features: [
      "Up to 2,000 indexed pages",
      "Weekly re-crawl",
      "AI ranking & personalization",
      "All 9 design styles + custom branding",
      "Manual re-crawl triggers",
      "Basic analytics (top queries)",
      "No branding",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to 10,000 indexed pages",
      "Daily re-crawl",
      "All Creator features",
      "Advanced analytics (CTR, trends)",
      "Rules engine & content boosting",
      "Synonyms & custom relevance",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start free, upgrade when you need more. No hidden fees. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border bg-background transition-all duration-300",
                tier.popular
                  ? "border-primary shadow-2xl scale-105 z-10"
                  : "border-border shadow-xl hover:shadow-2xl hover:-translate-y-1",
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-5xl font-bold",
                      tier.popular
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {tier.price}
                  </span>
                  {tier.period && <span className="text-muted-foreground text-lg">{tier.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-3">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        tier.popular ? "bg-accent" : "bg-muted",
                      )}
                    >
                      <Check
                        className={cn("w-3.5 h-3.5", tier.popular ? "text-primary" : "text-muted-foreground")}
                      />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full h-12 text-base font-semibold rounded-xl transition-all duration-300",
                  tier.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    : "hover:bg-muted",
                )}
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
