"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroEmbedResultProps {
  show: boolean;
}

export function HeroEmbedResult({ show }: HeroEmbedResultProps) {
  const [copied, setCopied] = useState(false);
  const embedCode = `<script src="https://cdn.bridgit.ai/s.js" data-id="abc123"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={cn(
        "relative max-w-2xl mx-auto mt-8 transition-all duration-500",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl">
        <code className="flex-1 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {embedCode}
        </code>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-primary text-zinc-400 hover:text-white transition-all duration-200"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">
        {copied ? "Copied to clipboard!" : "Add this to your website's HTML"}
      </p>
    </div>
  );
}
