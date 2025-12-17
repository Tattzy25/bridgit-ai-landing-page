"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Sparkles, Loader2 } from "lucide-react";

interface HeroSearchBarProps {
  readonly onSubmit: (url: string) => void;
  readonly isLoading: boolean;
}

export function HeroSearchBar({ onSubmit, isLoading }: HeroSearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = () => {
    if (searchValue.trim() && !isLoading) {
      onSubmit(searchValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto mb-6 md:mb-8 px-2 sm:px-0">
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-xl md:rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500 animate-pulse-soft" />

        <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 animate-border-rotate"
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), #22d3ee, #0ea5e9, #3b82f6, #0ea5e9, #22d3ee)`,
            }}
          />
        </div>

        <div className="relative rounded-lg md:rounded-xl bg-background m-[2px]">
          <div className="relative flex items-center p-1 md:p-1.5 h-12 sm:h-14 md:h-16 lg:h-18">
            <div className="absolute left-3 sm:left-4 md:left-5 z-10">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-500" />
              <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-sky-400 absolute -top-0.5 -right-1 sm:-top-1 sm:-right-1.5" />
            </div>

            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://yourwebsite.com"
              disabled={isLoading}
              className="h-full text-sm sm:text-base md:text-lg lg:text-xl pl-10 sm:pl-12 md:pl-14 pr-20 sm:pr-24 md:pr-40 lg:pr-52 border-0 bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50 disabled:opacity-50"
            />

            <div className="absolute right-2 sm:right-3 md:right-4">
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading || !searchValue.trim()}
                className="h-8 sm:h-9 md:h-10 lg:h-12 px-3 sm:px-4 md:px-5 lg:px-6 text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-lg md:rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                    <span className="hidden md:inline ml-1.5">
                      Processing...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="hidden md:inline">
                      Create My Search Bar
                    </span>
                    <span className="md:hidden">Go</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1 md:ml-1.5" />
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 rounded-lg md:rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slide" />
          </div>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 md:mt-6">
        Enter yourwebsite URL and watch the magic happen
      </p>
    </div>
  );
}
