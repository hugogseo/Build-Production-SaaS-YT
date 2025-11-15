"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { PlushieCard, type PlushieData } from "@/components/ui/plushie-card";
import { MasonryGridColumns, MasonryItem } from "@/components/ui/masonry-grid";
import { FilterBar } from "@/components/ui/filter-bar";
import { EmptyGallery } from "@/components/ui/empty-state";
import { ImageViewer } from "@/components/ui/image-viewer";
import { CreditsSection } from "@/components/credits-section";

interface DashboardClientProps {
  credits: number;
  totalGenerations: number;
  memberSince: string;
  plushies: PlushieData[];
}

export function DashboardClient({
  credits,
  totalGenerations,
  memberSince,
  plushies,
}: DashboardClientProps) {
  const [selectedPlushie, setSelectedPlushie] = useState<PlushieData | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleViewPlushie = (plushie: PlushieData) => {
    setSelectedPlushie(plushie);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedPlushie(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Plushie Collection</h1>
            <p className="text-muted-foreground">
              View and manage all your AI-generated plushies
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/generate">
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create New Plushie
            </Link>
          </Button>
        </div>
      </div>

      {/* Credits Section - Now using real data */}
      <CreditsSection
        availableCredits={credits}
        totalGenerations={totalGenerations}
        memberSince={memberSince}
      />

      <div className="h-8" />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Plushies
                </p>
                <p className="text-2xl font-bold">{plushies.length}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Favorites
                </p>
                <p className="text-2xl font-bold">
                  {plushies.filter((p) => p.isFavorite).length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="currentColor"
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
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  This Month
                </p>
                <p className="text-2xl font-bold">
                  {plushies.filter(p => {
                    const now = new Date();
                    const plushieDate = new Date(p.createdAt);
                    return plushieDate.getMonth() === now.getMonth() &&
                           plushieDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Bar */}
      <FilterBar
        totalCount={plushies.length}
        onSortChange={(sort) => console.log("Sort by:", sort)}
        onFilterChange={(filter) => console.log("Filter by:", filter)}
        onSearchChange={(search) => console.log("Search:", search)}
        className="mb-8"
      />

      {/* Gallery Grid */}
      {plushies.length === 0 ? (
        <EmptyGallery
          onCreateClick={() => {
            window.location.href = "/generate";
          }}
        />
      ) : (
        <MasonryGridColumns columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}>
          {plushies.map((plushie) => (
            <MasonryItem key={plushie.id}>
              <PlushieCard
                plushie={plushie}
                onView={handleViewPlushie}
                onToggleFavorite={(id) =>
                  console.log("Toggle favorite:", id)
                }
                onDownload={(plushie) =>
                  console.log("Download plushie:", plushie.id)
                }
                onDelete={(id) => console.log("Delete plushie:", id)}
                onShare={(plushie) =>
                  console.log("Share plushie:", plushie.id)
                }
              />
            </MasonryItem>
          ))}
        </MasonryGridColumns>
      )}

      {/* Image Viewer Modal */}
      <ImageViewer
        plushie={selectedPlushie}
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        onDownload={(plushie) => console.log("Download:", plushie.id)}
        onShare={(plushie) => console.log("Share:", plushie.id)}
        onDelete={(id) => {
          console.log("Delete:", id);
          handleCloseViewer();
        }}
      />
    </div>
  );
}
