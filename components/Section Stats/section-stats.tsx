"use client";

import StatsCarouselCount from "@/components/ui/statscarousel";

export function SectionStats() {
  const stats = [
    { value: 60, suffix: "s", label: "Setup Time" },
    { value: 100, suffix: "ms", label: "Response Time" },
    { value: 99.9, suffix: "%", label: "Uptime SLA" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 -mt-4">
      <div className="max-w-4xl mx-auto flex justify-center">
        <StatsCarouselCount
          stats={stats}
          title=""
          className="h-[380px]"
          cardClassName="min-w-[320px] sm:min-w-[380px] p-10 sm:p-12"
        />
      </div>
    </section>
  );
}
