"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Sparkles, Loader2 } from "lucide-react";

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
    <div className="max-w-4xl mx-auto mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-pulse-soft" />
        
        <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 animate-border-rotate"
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), #22d3ee, #0ea5e9, #3b82f6, #0ea5e9, #22d3ee)`,
            }}
          />
        </div>
        
        <div className="relative rounded-xl bg-background m-[3px]">
          <div className="relative flex items-center p-1.5">
            <div className="absolute left-6 z-10">
              <div className="relative">
                <Search className="w-7 h-7 text-sky-500" />
                <Sparkles className="w-3.5 h-3.5 text-sky-400 absolute -top-1 -right-1.5" />
                <div className="absolute inset-0 w-7 h-7 bg-sky-400 rounded-full blur-md opacity-50" />
              </div>
            </div>
            
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://yourwebsite.com"
              disabled={isLoading}
              className="h-20 sm:h-24 text-xl sm:text-2xl md:text-3xl pl-16 sm:pl-18 pr-52 sm:pr-64 border-0 bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50 disabled:opacity-50"
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
