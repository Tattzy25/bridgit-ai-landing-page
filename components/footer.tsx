import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Transform Your Site&apos;s Search?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators and businesses using Bridgit-AI to help visitors discover more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-semibold group"
            >
              Start Free - No Credit Card
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-14 text-base bg-background rounded-xl border-2 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              See Live Examples
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Product",
                links: [
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Design Styles", href: "#styles" },
                  { label: "Integrations", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Documentation", href: "#" },
                  { label: "API Reference", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Examples", href: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Press", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "GDPR", href: "#" },
                  { label: "SOC2", href: "#" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-0">
              <Image src="/images/b.png" alt="Bridgit AI" width={28} height={28} className="w-7 h-7" />
              <span className="font-bold text-foreground">Bridgit-AI</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Bridgit-AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
