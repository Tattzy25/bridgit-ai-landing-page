"use client";

import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProgressState = "idle" | "crawling" | "indexing" | "ready";

interface HeroProgressProps {
  readonly state: ProgressState;
}

const stateLabels: Record<ProgressState, string> = {
  idle: "SEARCH. UNLOCKED.",
  crawling: "Crawling your site...",
  indexing: "Indexing content...",
  ready: "Search ready!",
};

export function HeroProgress({ state }: HeroProgressProps) {
  const isLoading = state !== "idle" && state !== "ready";

  return (
    <Badge
      variant="outline"
      className={cn(
        "px-8 py-3 rounded-full text-xl sm:text-2xl font-semibold tracking-wide bg-white dark:bg-zinc-900 border-border shadow-lg",
        state === "ready" && "text-green-500 border-green-500/30"
      )}
    >
      {isLoading && (
        <Loader2 className="w-5 h-5 animate-spin text-primary mr-2" />
      )}
      {stateLabels[state]}
    </Badge>
  );
}
