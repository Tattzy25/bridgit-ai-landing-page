"use client";

import StatsCarouselCount from "@/components/ui/statscarousel";

export function SectionStats() {
  const stats = [
    { value: 60, suffix: "s", label: "Setup Time" },
    { value: 100, suffix: "ms", label: "Response Time" },
    { value: 99.9, suffix: "%", label: "Uptime SLA" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex justify-center">
        <StatsCarouselCount
          stats={stats}
          title=""
          className="h-[380px]"
          cardClassName="min-w-[280px] sm:min-w-[320px] p-8 sm:p-10"
        />
      </div>
    </section>
  );
}
