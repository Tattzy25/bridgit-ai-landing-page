import Image from "next/image"
import { Globe, Brain, Code2, ArrowRight, Play } from "lucide-react"

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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">See it in action</h3>
              <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                Watch how easy it is to add intelligent search to any website in under 2 minutes.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                Watch Demo Video
              </button>
            </div>
            <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl relative group cursor-pointer">
              <Image
                src="/modern-saas-dashboard-preview-with-search-bar-purp.jpg"
                alt="Demo video thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
