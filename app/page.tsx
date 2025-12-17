import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/How It Works/how-it-works"
import { SearchShowcase } from "@/components/search-showcase"
import { UseCases } from "@/components/use-cases"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <SearchShowcase />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
