"use client"

import type React from "react"
import { useState } from "react"
import { SearchIcon, CommandIcon, SparklesIcon, TagIcon, ChevronRightIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const searchStyles = [
  {
    id: "floating-bubble",
    name: "Floating Bubble",
    description: "Minimal floating action button",
    image: "/floating-bubble-search-button-purple-minimal.jpg",
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "Frosted glass aesthetic",
    image: "/glassmorphism-search-bar-frosted-glass-blur-effect.jpg",
  },
  {
    id: "gradient-border",
    name: "Gradient Border",
    description: "Animated gradient glow",
    image: "/gradient-border-search-bar-purple-pink-glow.jpg",
  },
  {
    id: "neumorphic",
    name: "Neumorphic",
    description: "Soft shadows & depth",
    image: "/neumorphic-soft-ui-search-bar-subtle-shadows.jpg",
  },
  {
    id: "command-palette",
    name: "Command Palette",
    description: "Developer-style modal",
    image: "/command-palette-cmd-k-search-modal-dark-theme.jpg",
  },
  {
    id: "bubble-tags",
    name: "Bubble Tags",
    description: "Filter chips included",
    image: "/search-bar-with-filter-tag-bubbles-colorful.jpg",
  },
  {
    id: "compact-bar",
    name: "Compact Bar",
    description: "Space-efficient design",
    image: "/compact-minimal-search-bar-small-clean.jpg",
  },
  {
    id: "minimal-underline",
    name: "Minimal Underline",
    description: "Clean & elegant",
    image: "/minimal-underline-search-input-elegant-simple.jpg",
  },
  {
    id: "icon-toggle",
    name: "Icon Toggle",
    description: "Expandable search icon",
    image: "/expandable-search-icon-toggle-button-animation.jpg",
  },
]

function FloatingBubble() {
  return (
    <div className="flex items-center justify-center h-full">
      <button className="w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-all flex items-center justify-center">
        <SearchIcon className="w-7 h-7" />
      </button>
    </div>
  )
}

function Glassmorphism() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl" />
        <div className="relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/30 dark:border-zinc-700/50 shadow-2xl">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-lg backdrop-blur">
            <CommandIcon className="w-3 h-3" />K
          </kbd>
        </div>
      </div>
    </div>
  )
}

function GradientBorder() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="relative w-full max-w-md group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition duration-500 group-hover:blur" />
        <div className="relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-background shadow-lg">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <SparklesIcon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  )
}

function Neumorphic() {
  return (
    <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6">
      <div className="w-full max-w-md flex items-center gap-3 px-5 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(0,0,0,0.08)] dark:shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.03),inset_6px_6px_12px_rgba(0,0,0,0.4)]">
        <SearchIcon className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  )
}

function CommandPalette() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <kbd className="px-2 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-lg">ESC</kbd>
        </div>
        <div className="p-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
            <ChevronRightIcon className="w-4 h-4" />
            <span>Recent searches...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function BubbleTags() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
      <div className="w-full max-w-md flex items-center gap-3 px-5 py-3 rounded-full bg-muted shadow-inner border border-border">
        <SearchIcon className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium flex items-center gap-1.5 shadow-md">
          <TagIcon className="w-3.5 h-3.5" /> Products
        </span>
        <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium flex items-center gap-1.5 shadow-md">
          <TagIcon className="w-3.5 h-3.5" /> Blog
        </span>
        <span className="px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium flex items-center gap-1.5 shadow-md">
          <TagIcon className="w-3.5 h-3.5" /> Docs
        </span>
      </div>
    </div>
  )
}

function CompactBar() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted shadow-lg border border-border">
        <SearchIcon className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Quick search..."
          className="w-44 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
        <kbd className="px-2 py-0.5 text-[11px] font-medium text-muted-foreground bg-background rounded-md shadow-sm">
          /
        </kbd>
      </div>
    </div>
  )
}

function MinimalUnderline() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 pb-3 border-b-2 border-primary">
          <SearchIcon className="w-5 h-5 text-primary" />
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-lg"
          />
        </div>
      </div>
    </div>
  )
}

function IconToggle() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex items-center justify-center h-full">
      <div
        className={cn(
          "flex items-center gap-3 rounded-full transition-all duration-300 overflow-hidden",
          expanded
            ? "px-5 py-3 bg-background border border-border w-full max-w-md shadow-2xl"
            : "p-4 bg-primary hover:bg-primary/90 cursor-pointer shadow-xl",
        )}
      >
        <button onClick={() => setExpanded(!expanded)} className="flex-shrink-0">
          {expanded ? (
            <XIcon className="w-5 h-5 text-muted-foreground" />
          ) : (
            <SearchIcon className="w-6 h-6 text-primary-foreground" />
          )}
        </button>
        {expanded && (
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
        )}
      </div>
    </div>
  )
}

const styleComponents: Record<string, React.ComponentType> = {
  "floating-bubble": FloatingBubble,
  glassmorphism: Glassmorphism,
  "gradient-border": GradientBorder,
  neumorphic: Neumorphic,
  "command-palette": CommandPalette,
  "bubble-tags": BubbleTags,
  "compact-bar": CompactBar,
  "minimal-underline": MinimalUnderline,
  "icon-toggle": IconToggle,
}

export function SearchShowcase() {
  const [activeStyle, setActiveStyle] = useState("glassmorphism")

  const ActiveComponent = styleComponents[activeStyle]

  return (
    <section id="styles" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-semibold mb-6 shadow-lg border border-primary/20">
            9 Stunning Styles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Beautiful Search Bars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose from our collection of beautifully designed search experiences. Click any style to preview it live.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          {searchStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300",
                activeStyle === style.id
                  ? "ring-4 ring-primary shadow-2xl scale-[1.02]"
                  : "ring-1 ring-border hover:ring-2 hover:ring-primary/50 shadow-lg hover:shadow-xl",
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={style.image || "/placeholder.svg"}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    activeStyle === style.id
                      ? "bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20"
                      : "bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent group-hover:from-primary/90 group-hover:via-primary/50",
                  )}
                />
              </div>

              <div className="relative h-full flex flex-col justify-end p-4">
                {activeStyle === style.id && (
                  <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse" />
                )}

                <h3 className="text-white font-bold text-sm sm:text-base mb-1 drop-shadow-lg">{style.name}</h3>
                <p className="text-white/80 text-xs hidden sm:block drop-shadow-md">{style.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-accent via-background to-accent dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 rounded-3xl border border-border shadow-2xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 bg-background rounded-lg text-xs text-muted-foreground font-mono border border-border shadow-inner">
                  yourdomain.com
                </div>
              </div>
            </div>

            <div className="h-64 sm:h-72">
              <ActiveComponent />
            </div>

            <div className="text-center py-4 border-t border-border/50 bg-muted/30">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border text-sm shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">Live Preview:</span>
                <span className="font-bold text-foreground">
                  {searchStyles.find((s) => s.id === activeStyle)?.name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
