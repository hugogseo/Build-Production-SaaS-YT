"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Input } from "./input";

export type SortOption = "newest" | "oldest" | "favorites";
export type FilterOption = "all" | "favorites" | "recent";

interface FilterBarProps {
  onSortChange?: (sort: SortOption) => void;
  onFilterChange?: (filter: FilterOption) => void;
  onSearchChange?: (search: string) => void;
  totalCount?: number;
  className?: string;
}

export function FilterBar({
  onSortChange,
  onFilterChange,
  onSearchChange,
  totalCount,
  className,
}: FilterBarProps) {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (value: string) => {
    const newSort = value as SortOption;
    setSortBy(newSort);
    onSortChange?.(newSort);
    console.log(`Sorting by: ${newSort}`);
  };

  const handleFilterChange = (filter: FilterOption) => {
    setFilterBy(filter);
    onFilterChange?.(filter);
    console.log(`Filtering by: ${filter}`);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
    console.log(`Searching for: ${value}`);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg border bg-card p-4 md:flex-row md:items-center md:justify-between",
        className
      )}
    >
      {/* Left Section: Count & Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {totalCount !== undefined && (
          <p className="text-sm text-muted-foreground">
            {totalCount} {totalCount === 1 ? "plushie" : "plushies"}
          </p>
        )}

        <div className="hidden h-4 w-px bg-border md:block" />

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <Button
            variant={filterBy === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("all")}
          >
            All
          </Button>
          <Button
            variant={filterBy === "favorites" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("favorites")}
          >
            <svg
              className="mr-1.5 h-3.5 w-3.5"
              fill={filterBy === "favorites" ? "currentColor" : "none"}
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favorites
          </Button>
          <Button
            variant={filterBy === "recent" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("recent")}
          >
            <svg
              className="mr-1.5 h-3.5 w-3.5"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Recent
          </Button>
        </div>
      </div>

      {/* Right Section: Search & Sort */}
      <div className="flex flex-1 items-center gap-3 md:max-w-md">
        {/* Search Input */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <Input
            type="text"
            placeholder="Search plushies..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Sort Select */}
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
                Newest
              </div>
            </SelectItem>
            <SelectItem value="oldest">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                  />
                </svg>
                Oldest
              </div>
            </SelectItem>
            <SelectItem value="favorites">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Favorites
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
