import { Hero } from "@/components/hero"
import { SectionStats } from "@/components/Section Stats/section-stats"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { SearchShowcase } from "@/components/search-showcase"
import { UseCases } from "@/components/use-cases"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SectionStats />
      <HowItWorks />
      <Features />
      <SearchShowcase />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
