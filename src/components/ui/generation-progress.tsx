"use client";

import { cn } from "@/lib/utils";

interface GenerationProgressProps {
  status?: "preparing" | "generating" | "finalizing";
  progress?: number;
  message?: string;
  className?: string;
}

export function GenerationProgress({
  status = "generating",
  progress = 0,
  message,
  className,
}: GenerationProgressProps) {
  const getStatusMessage = () => {
    if (message) return message;

    switch (status) {
      case "preparing":
        return "Preparing your image...";
      case "generating":
        return "AI is creating your plushie...";
      case "finalizing":
        return "Almost there! Finalizing your plushie...";
      default:
        return "Processing...";
    }
  };

  const getStatusEmoji = () => {
    switch (status) {
      case "preparing":
        return "🎨";
      case "generating":
        return "✨";
      case "finalizing":
        return "🎉";
      default:
        return "⏳";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-6 rounded-lg border border-dashed bg-muted/50 p-12",
        className
      )}
    >
      {/* Animated Plushie Icon */}
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <span className="animate-bounce text-4xl">{getStatusEmoji()}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress > 0 && (
          <p className="text-center text-xs text-muted-foreground">
            {Math.round(progress)}%
          </p>
        )}
      </div>

      {/* Status Message */}
      <div className="text-center">
        <p className="mb-1 font-medium">{getStatusMessage()}</p>
        <p className="text-sm text-muted-foreground">
          This usually takes 10-30 seconds
        </p>
      </div>

      {/* Loading Dots Animation */}
      <div className="flex gap-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
      </div>
    </div>
  );
}

// Skeleton Loading Component for Cards
export function PlushieCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-card",
        className
      )}
    >
      {/* Image Skeleton */}
      <div className="aspect-square animate-pulse bg-muted" />

      {/* Content Skeleton */}
      <div className="space-y-3 p-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
