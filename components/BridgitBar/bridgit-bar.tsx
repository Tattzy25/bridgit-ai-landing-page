"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { SearchIcon, FileTextIcon, BoxIcon, BookOpenIcon, ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
}

const demoResults: SearchResult[] = [
  {
    id: "1",
    title: "Documentation",
    description: "Learn how to integrate and customize your search experience",
    category: "Pages",
    icon: BookOpenIcon,
  },
  {
    id: "2",
    title: "Components",
    description: "Explore our library of pre-built UI components",
    category: "Pages",
    icon: BoxIcon,
  },
  {
    id: "3",
    title: "Getting Started Guide",
    description: "Quick start tutorial to set up your first search bar",
    category: "Guides",
    icon: FileTextIcon,
  },
  {
    id: "4",
    title: "API Reference",
    description: "Complete API documentation for developers",
    category: "Guides",
    icon: FileTextIcon,
  },
  {
    id: "5",
    title: "Customization",
    description: "Learn how to style and theme your search interface",
    category: "Guides",
    icon: FileTextIcon,
  },
];

interface BridgitBarTriggerProps {
  onClick: () => void;
  className?: string;
}

export function BridgitBarTrigger({ onClick, className }: BridgitBarTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left shadow-sm transition-all hover:border-foreground/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      <SearchIcon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      <span className="flex-1 text-sm text-muted-foreground">Search documentation...</span>
      <div className="hidden items-center gap-1 sm:flex">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </div>
    </button>
  );
}

interface SearchResultCardProps {
  result: SearchResult;
  isSelected: boolean;
  onSelect: () => void;
  onMouseEnter: () => void;
}

function SearchResultCard({ result, isSelected, onSelect, onMouseEnter }: SearchResultCardProps) {
  const Icon = result.icon;
  
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      className={cn(
        "group flex w-full items-center gap-4 rounded-lg border px-4 py-3 text-left transition-all",
        isSelected
          ? "border-foreground/20 bg-accent shadow-sm"
          : "border-transparent bg-transparent hover:bg-accent/50"
      )}
    >
      <div className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
        isSelected ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
      )}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-sm font-medium truncate transition-colors",
          isSelected ? "text-foreground" : "text-foreground"
        )}>
          {result.title}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {result.description}
        </p>
      </div>
      <ArrowRightIcon className={cn(
        "h-4 w-4 shrink-0 transition-all",
        isSelected ? "text-foreground opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-2"
      )} />
    </button>
  );
}

interface BridgitBarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BridgitBarDialog({ open, onOpenChange }: BridgitBarDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const filteredResults = React.useMemo(() => {
    if (!query.trim()) return demoResults;
    return demoResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    filteredResults.forEach((result) => {
      if (!groups[result.category]) {
        groups[result.category] = [];
      }
      groups[result.category].push(result);
    });
    return groups;
  }, [filteredResults]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        onOpenChange(false);
      }
    },
    [filteredResults, selectedIndex, onOpenChange]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  let flatIndex = 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl gap-0 overflow-hidden p-0"
        showCloseButton={false}
      >
        <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="flex-1 border-0 bg-transparent text-base shadow-none focus-visible:ring-0 placeholder:text-muted-foreground"
            autoFocus
          />
          <Kbd className="hidden sm:inline-flex">ESC</Kbd>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
            </div>
          ) : (
            Object.entries(groupedResults).map(([category, results]) => (
              <div key={category} className="mb-4 last:mb-0">
                <p className="mb-2 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {category}
                </p>
                <div className="space-y-1">
                  {results.map((result) => {
                    const currentIndex = flatIndex++;
                    return (
                      <SearchResultCard
                        key={result.id}
                        result={result}
                        isSelected={currentIndex === selectedIndex}
                        onSelect={() => onOpenChange(false)}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t bg-muted/30 px-4 py-2">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <Kbd>↵</Kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function BridgitBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <BridgitBarTrigger onClick={() => setOpen(true)} className={className} />
      <BridgitBarDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
