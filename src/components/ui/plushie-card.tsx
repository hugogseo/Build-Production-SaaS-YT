"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export interface PlushieData {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  prompt?: string;
  style?: string;
  isFavorite?: boolean;
  createdAt: Date | string;
}

interface PlushieCardProps {
  plushie: PlushieData;
  onView?: (plushie: PlushieData) => void;
  onToggleFavorite?: (id: string) => void;
  onDownload?: (plushie: PlushieData) => void;
  onDelete?: (id: string) => void;
  onShare?: (plushie: PlushieData) => void;
  className?: string;
}

export function PlushieCard({
  plushie,
  onView,
  onToggleFavorite,
  onDownload,
  onDelete,
  onShare,
  className,
}: PlushieCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(plushie.isFavorite || false);

  const imageUrl = plushie.thumbnailUrl || plushie.imageUrl;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(plushie.id);
    console.log(`Toggled favorite for plushie ${plushie.id}`);
  };

  const handleCardClick = () => {
    onView?.(plushie);
    console.log(`Viewing plushie ${plushie.id}`);
  };

  const formatDate = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg",
        "cursor-pointer",
        className
      )}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted" />
        )}
        <img
          src={imageUrl}
          alt={plushie.prompt || "Generated plushie"}
          className={cn(
            "h-full w-full object-cover transition-all duration-300",
            "group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={cn(
            "absolute right-2 top-2 z-10 rounded-full p-2 backdrop-blur-sm transition-all",
            isFavorite
              ? "bg-red-500/90 text-white hover:bg-red-600"
              : "bg-white/90 text-gray-600 hover:bg-white hover:text-red-500"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
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
        </button>

        {/* Actions Menu */}
        <div className="absolute left-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="rounded-full bg-white/90 p-2 backdrop-blur-sm transition-colors hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" onClick={(e) => e.stopPropagation()}>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onView?.(plushie);
                  console.log(`Viewing plushie ${plushie.id}`);
                }}
              >
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View Full Size
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload?.(plushie);
                  console.log(`Downloading plushie ${plushie.id}`);
                }}
              >
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onShare?.(plushie);
                  console.log(`Sharing plushie ${plushie.id}`);
                }}
              >
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                Share
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete?.(plushie.id);
                  console.log(`Deleting plushie ${plushie.id}`);
                }}
                className="text-destructive focus:text-destructive"
              >
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-3">
        <div className="mb-2 flex items-start justify-between gap-2">
          {plushie.prompt && (
            <p className="line-clamp-2 flex-1 text-sm text-foreground">
              {plushie.prompt}
            </p>
          )}
          {plushie.style && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              {plushie.style}
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {formatDate(plushie.createdAt)}
        </p>
      </div>
    </div>
  );
}
