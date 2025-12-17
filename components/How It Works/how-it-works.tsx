import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Crawl Everything",
    description:
      "We scan your entire site automatically. Pages, documents, media — if it exists, it's captured. No setup. No guessing. Nothing missed.",
  },
  {
    title: "Structure the Intelligence",
    description:
      "We clean, organize, and index your content. Chaos removed. Relationships created. Your site becomes machine-searchable and human-readable.",
  },
  {
    title: "Activate Search",
    description:
      "Drop it in. Your site answers instantly. Inline search, command palette, or visual discovery — live for your visitors in minutes.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 border border-primary/20 p-6 sm:p-8 lg:p-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-accent text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg border border-primary/20">
            Simple Setup
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your site → intelligent search. Fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="text-center hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader className="items-center pb-2">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
