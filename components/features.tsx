import Image from "next/image"
import { Search, Sparkles, Palette, Settings, BarChart3, Keyboard, Zap, Brain } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Ranking",
    description:
      "True relevance through intelligent understanding, not just keyword matching. Query categorization and entity recognition built-in.",
  },
  {
    icon: Sparkles,
    title: "Smart Personalization",
    description:
      "Results adapt to visitor history and behavior. Related content recommendations that improve over time.",
  },
  {
    icon: Palette,
    title: "9 Beautiful Styles",
    description: "From floating bubbles to command palettes. All fully responsive with light and dark mode support.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant results in under 100ms with global edge caching. Typo tolerance and fuzzy matching included.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Built-in Cmd+K / Ctrl+K integration. Power users will love the command palette experience.",
  },
  {
    icon: Settings,
    title: "Rules Engine",
    description: "Boost or filter content. Custom synonyms. Category and date filtering. Full control over results.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Real-time query tracking. Top queries, zero-result queries, and content gap analysis.",
  },
  {
    icon: Search,
    title: "Autocomplete",
    description: "Intelligent suggestions from your content. Help users find what they need faster.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl">
          <div className="aspect-[21/9] relative">
            <Image
              src="/modern-saas-dashboard-analytics-dark-theme-purple-.jpg"
              alt="Bridgit AI Dashboard Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-16 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  Powerful Features
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Everything You Need</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Powerful features that make your site smarter without the complexity. Built for performance, designed
                  for beauty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 p-6 rounded-2xl bg-muted/50 border border-border">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-3 border-background overflow-hidden shadow-lg ring-2 ring-background"
              >
                <Image
                  src={`/professional-headshot-person.png?height=48&width=48&query=professional headshot person ${i}`}
                  alt={`User ${i}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">500+</span> teams already using Bridgit
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 shadow-inner group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
