"use client";

import { cn } from "@/lib/utils";

interface MasonryGridProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

export function MasonryGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 4,
  className,
}: MasonryGridProps) {
  // Convert Tailwind gap number to CSS class
  const gapClass = `gap-${gap}`;

  return (
    <div
      className={cn(
        "grid",
        gapClass,
        // Responsive columns using Tailwind grid-cols-X
        `grid-cols-${columns.sm || 1}`,
        columns.md && `md:grid-cols-${columns.md}`,
        columns.lg && `lg:grid-cols-${columns.lg}`,
        columns.xl && `xl:grid-cols-${columns.xl}`,
        className
      )}
      style={{
        // Use CSS Grid auto-flow for masonry-like behavior
        gridAutoRows: "10px",
      }}
    >
      {children}
    </div>
  );
}

// Alternative: Simple column-based masonry (more true to Pinterest style)
export function MasonryGridColumns({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 4,
  className,
}: MasonryGridProps) {
  const gapClass = `gap-${gap}`;

  return (
    <div
      className={cn(
        "columns-1",
        columns.md && `md:columns-${columns.md}`,
        columns.lg && `lg:columns-${columns.lg}`,
        columns.xl && `xl:columns-${columns.xl}`,
        gapClass,
        className
      )}
    >
      {children}
    </div>
  );
}

// Wrapper for individual masonry items (prevents column break inside)
export function MasonryItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 break-inside-avoid", className)}>
      {children}
    </div>
  );
}
