"use client";

import { useEffect } from "react";
import { Dialog, DialogContent } from "./dialog";
import { Button } from "./button";
import { Badge } from "./badge";
import type { PlushieData } from "./plushie-card";

interface ImageViewerProps {
  plushie: PlushieData | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload?: (plushie: PlushieData) => void;
  onShare?: (plushie: PlushieData) => void;
  onDelete?: (id: string) => void;
}

export function ImageViewer({
  plushie,
  isOpen,
  onClose,
  onDownload,
  onShare,
  onDelete,
}: ImageViewerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!plushie) return null;

  const formatDate = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative flex flex-1 items-center justify-center bg-muted p-8">
            <img
              src={plushie.imageUrl}
              alt={plushie.prompt || "Generated plushie"}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex w-full flex-col md:w-80">
            {/* Header */}
            <div className="border-b p-6">
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-lg font-semibold">Plushie Details</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 hover:bg-muted"
                  aria-label="Close"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {plushie.style && (
                <Badge variant="secondary">{plushie.style}</Badge>
              )}
            </div>

            {/* Details */}
            <div className="flex-1 space-y-6 p-6">
              {plushie.prompt && (
                <div>
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                    Prompt
                  </h3>
                  <p className="text-sm">{plushie.prompt}</p>
                </div>
              )}

              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  Created
                </h3>
                <p className="text-sm">{formatDate(plushie.createdAt)}</p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  Image ID
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {plushie.id}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 border-t p-6">
              <Button
                className="w-full"
                onClick={() => {
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
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
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
              </Button>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  onDelete?.(plushie.id);
                  onClose();
                  console.log(`Deleting plushie ${plushie.id}`);
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
