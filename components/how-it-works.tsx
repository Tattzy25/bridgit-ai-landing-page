import { Globe, Brain, Code2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Index Your Site",
    description:
      "Enter your URL. Our crawler explores your entire site, extracts content, understands context, and builds an intelligent index in 5-30 minutes.",
    icon: Globe,
  },
  {
    number: "2",
    title: "AI Personalizes",
    description:
      "Results adapt to each visitor. The AI learns from search behavior, user history, and intent patterns to deliver smarter results over time.",
    icon: Brain,
  },
  {
    number: "3",
    title: "Embed & Go Live",
    description: "Copy one script tag. Paste it anywhere on your site. Your intelligent, beautiful search is now live.",
    icon: Code2,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 border border-primary/20 p-8 lg:p-12">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            Simple Setup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From URL to live AI search in three simple steps. No developers required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}

              <div className="h-full p-6 lg:p-8 rounded-2xl border border-border bg-background hover:border-primary/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-inner group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
