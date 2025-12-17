"use client"

import { BridgitBar } from "@/components/BridgitBar/bridgit-bar"

export function SearchShowcase() {
  return (
    <section id="product" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Search that thinks.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your visitors find answers in milliseconds. No setup required.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute -left-4 top-8 z-10 -rotate-6">
            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 px-4 py-3 rounded-lg shadow-lg border border-amber-200 dark:border-amber-800 max-w-[160px]">
              <p className="text-sm font-medium">Press <kbd className="px-1.5 py-0.5 bg-amber-200 dark:bg-amber-800 rounded text-xs font-mono">⌘K</kbd> to open search</p>
            </div>
            <div className="w-3 h-3 bg-amber-100 dark:bg-amber-900/40 border-r border-b border-amber-200 dark:border-amber-800 rotate-45 absolute -bottom-1.5 left-8" />
          </div>

          <div className="hidden md:block absolute -right-4 top-16 z-10 rotate-3">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 px-4 py-3 rounded-lg shadow-lg border border-emerald-200 dark:border-emerald-800 max-w-[150px]">
              <p className="text-sm font-medium">Arrow keys to navigate results</p>
            </div>
            <div className="w-3 h-3 bg-emerald-100 dark:bg-emerald-900/40 border-l border-t border-emerald-200 dark:border-emerald-800 rotate-45 absolute -top-1.5 right-6" />
          </div>

          <div className="hidden lg:block absolute -left-8 bottom-20 z-10 rotate-2">
            <div className="bg-sky-100 dark:bg-sky-900/40 text-sky-900 dark:text-sky-100 px-4 py-3 rounded-lg shadow-lg border border-sky-200 dark:border-sky-800 max-w-[140px]">
              <p className="text-sm font-medium">Type to filter instantly</p>
            </div>
            <div className="w-3 h-3 bg-sky-100 dark:bg-sky-900/40 border-r border-b border-sky-200 dark:border-sky-800 rotate-45 absolute -bottom-1.5 left-6" />
          </div>

          <div className="hidden lg:block absolute -right-6 bottom-12 z-10 -rotate-2">
            <div className="bg-violet-100 dark:bg-violet-900/40 text-violet-900 dark:text-violet-100 px-4 py-3 rounded-lg shadow-lg border border-violet-200 dark:border-violet-800 max-w-[150px]">
              <p className="text-sm font-medium">Hit <kbd className="px-1.5 py-0.5 bg-violet-200 dark:bg-violet-800 rounded text-xs font-mono">Enter</kbd> to select</p>
            </div>
            <div className="w-3 h-3 bg-violet-100 dark:bg-violet-900/40 border-l border-t border-violet-200 dark:border-violet-800 rotate-45 absolute -top-1.5 right-8" />
          </div>

          <div className="relative bg-background rounded-2xl sm:rounded-3xl border border-border shadow-2xl overflow-hidden mx-4 md:mx-12">
            <div className="relative">
              <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-muted rounded-lg text-[10px] sm:text-xs text-muted-foreground font-mono border border-border">
                    yourdomain.com
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-b from-muted/10 to-transparent">
                <BridgitBar className="max-w-lg mx-auto" />
              </div>
            </div>
          </div>

          <div className="md:hidden mt-6 flex flex-wrap justify-center gap-3">
            <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-xs font-medium">
              <kbd className="px-1 py-0.5 bg-background rounded text-[10px] font-mono mr-1">⌘K</kbd> opens search
            </div>
            <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-xs font-medium">
              <kbd className="px-1 py-0.5 bg-background rounded text-[10px] font-mono mr-1">↑↓</kbd> navigate
            </div>
            <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-xs font-medium">
              <kbd className="px-1 py-0.5 bg-background rounded text-[10px] font-mono mr-1">↵</kbd> select
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
