"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Sparkles, Loader2 } from "lucide-react";
import Image from "next/image";

interface HeroSearchBarProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
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
    <div className="max-w-4xl mx-auto mb-8">
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500 animate-pulse-soft" />
        
        <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 animate-border-rotate"
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), #22d3ee, #0ea5e9, #3b82f6, #0ea5e9, #22d3ee)`,
            }}
          />
        </div>
        
        <div className="relative rounded-xl bg-background m-[2px]">
          <div className="relative flex items-center p-1.5 h-20 sm:h-24">
            <div className="absolute left-4 z-10 h-[calc(100%-6px)] py-[3px]">
              <Image
                src="https://aogjrgyogk0skpah.public.blob.vercel-storage.com/Untitled%20design%20%289%29.png"
                alt="Bridgit AI"
                width={80}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
            
            <div className="absolute left-24 z-10">
              <Search className="w-9 h-9 text-transparent bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text stroke-[url(#search-gradient)]" style={{ stroke: 'url(#search-gradient)' }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="search-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
              <Sparkles className="w-4 h-4 text-sky-400 absolute -top-1.5 -right-2" />
            </div>
            
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://yourwebsite.com"
              disabled={isLoading}
              className="h-full text-xl sm:text-2xl md:text-3xl pl-28 sm:pl-32 pr-52 sm:pr-64 border-0 bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50 disabled:opacity-50"
            />
            
            <div className="absolute right-4 sm:right-5">
              <Button 
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading || !searchValue.trim()}
                className="h-12 sm:h-14 px-5 sm:px-6 text-sm sm:text-base font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    <span className="hidden sm:inline ml-1.5">Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Create My Search Bar</span>
                    <span className="sm:hidden">Create</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5" />
                  </>
                )}
              </Button>
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slide" />
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-6">
        Paste your website URL and watch the magic happen
      </p>
    </div>
  );
}
