import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const useCases = [
  {
    title: "Bloggers & Creators",
    description: "Help readers discover your best work across years of archives.",
    image: "/content-creator-blogger-working-on-laptop-aestheti.jpg",
  },
  {
    title: "Small Businesses",
    description: "Knowledge bases, docs, and marketing sites with smart discovery.",
    image: "/small-business-team-modern-office-meeting-professi.jpg",
  },
  {
    title: "E-Commerce",
    description: "Product catalogs with AI understanding of intent and attributes.",
    image: "/ecommerce-online-shopping-product-display-elegant.jpg",
  },
  {
    title: "SaaS Platforms",
    description: "Help users find docs, features, and support instantly.",
    image: "/saas-software-dashboard-modern-interface-dark-them.jpg",
  },
  {
    title: "Communities",
    description: "Forums, Q&A, and portals with powerful search capabilities.",
    image: "/online-community-forum-discussion-platform-modern.jpg",
  },
  {
    title: "Agencies",
    description: "Add value to client sites without heavy development work.",
    image: "/creative-agency-team-workspace-modern-professional.jpg",
  },
]

export function UseCases() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Built for Every Use Case</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From personal blogs to enterprise platforms, Bridgit-AI adapts to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group rounded-2xl border border-border bg-background overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent group-hover:from-primary/90 group-hover:via-primary/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{useCase.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
