"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { HeroSearchBar } from "@/components/Hero Search Bar/hero-search-bar";
import { HeroProgress } from "@/components/Hero Progress/hero-progress";
import { HeroEmbedResult } from "@/components/Hero Embed Result/hero-embed-result";

export type ProgressState = "idle" | "crawling" | "indexing" | "ready";

export function Hero() {
  const [progressState, setProgressState] = useState<ProgressState>("idle");
  const [showEmbed, setShowEmbed] = useState(false);

  const handleCreateSearch = async (url: string) => {
    if (!url) return;
    
    setShowEmbed(false);
    setProgressState("crawling");
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProgressState("indexing");
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProgressState("ready");
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    setShowEmbed(true);
  };

  return (
    <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute top-4 left-4 sm:left-6 lg:left-8 z-20">
        <Image
          src="https://aogjrgyogk0skpah.public.blob.vercel-storage.com/Untitled%20design%20%289%29.png"
          alt="Bridgit AI"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/15 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/15 dark:bg-primary/10 rounded-full blur-[100px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 dark:bg-accent/20 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto pt-12 sm:pt-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-primary text-sm font-medium mb-8 sm:mb-12 shadow-lg border border-primary/20">
            <Sparkles className="w-4 h-4" />
            AI-Powered Search for Everyone
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Go from URL to Live AI Search in{" "}
            <span className="text-primary">
              60 seconds
            </span>
          </h1>

          <div className="mb-8 sm:mb-10">
            <HeroProgress state={progressState} />
          </div>

          <HeroSearchBar onSubmit={handleCreateSearch} isLoading={progressState !== "idle" && progressState !== "ready"} />
        </div>

        <HeroEmbedResult show={showEmbed} />
      </div>
    </section>
  );
}
