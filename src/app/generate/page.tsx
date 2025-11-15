"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { UserProfile } from "@/components/auth/user-profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock } from "lucide-react";
import Link from "next/link";
import { ImageUploadZone } from "@/components/ui/image-upload-zone";
import { GenerationProgress } from "@/components/ui/generation-progress";

type GenerationStatus = "idle" | "preparing" | "generating" | "finalizing" | "complete";

export default function GeneratePage() {
  const { data: session, isPending } = useSession();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState("cute");
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleImageSelect = (file: File, preview: string) => {
    setUploadedFile(file);
    setPreviewUrl(preview);
    setStatus("idle");
    setGeneratedImageUrl(null);
    console.log("Image selected:", file.name);
  };

  const handleGenerate = () => {
    if (!uploadedFile) return;

    console.log("Starting generation with style:", selectedStyle);
    setStatus("preparing");
    setProgress(0);

    // Simulate generation progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 300);

    // Simulate generation steps
    setTimeout(() => setStatus("generating"), 1000);
    setTimeout(() => setStatus("finalizing"), 2500);
    setTimeout(() => {
      setStatus("complete");
      setProgress(100);
      clearInterval(progressInterval);
      // Mock generated image (use a plushie-like image)
      setGeneratedImageUrl("https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=800&h=800&fit=crop");
      console.log("Generation complete!");
    }, 4000);
  };

  const handleSaveToGallery = () => {
    console.log("Saving to gallery...");
    alert("Plushie saved to your gallery! (This is a UI demo)");
  };

  const handleDownload = () => {
    console.log("Downloading plushie...");
    alert("Download started! (This is a UI demo)");
  };

  const handleReset = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setStatus("idle");
    setProgress(0);
    setGeneratedImageUrl(null);
    setSelectedStyle("cute");
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Sign In Required</h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to generate plushies
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Generate Plushie</h1>
            <p className="text-muted-foreground">
              Upload a photo and let AI transform it into an adorable plushie
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/dashboard">
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
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              My Gallery
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Upload & Options */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Photo</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUploadZone
                onImageSelect={handleImageSelect}
                maxSizeMB={10}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plushie Style</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="style">Choose a style</Label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger id="style">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cute">Cute & Cuddly</SelectItem>
                    <SelectItem value="kawaii">Kawaii Style</SelectItem>
                    <SelectItem value="realistic">Realistic Plushie</SelectItem>
                    <SelectItem value="cartoon">Cartoon Style</SelectItem>
                    <SelectItem value="vintage">Vintage Toy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Style Description</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedStyle === "cute" &&
                    "Soft, rounded features with big eyes and a friendly appearance."}
                  {selectedStyle === "kawaii" &&
                    "Japanese-inspired cuteness with pastel colors and chibi proportions."}
                  {selectedStyle === "realistic" &&
                    "Detailed, lifelike plushie with realistic textures and proportions."}
                  {selectedStyle === "cartoon" &&
                    "Bold, exaggerated features with vibrant colors and simplified shapes."}
                  {selectedStyle === "vintage" &&
                    "Classic toy aesthetic with retro colors and nostalgic details."}
                </p>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleGenerate}
                disabled={!uploadedFile || status !== "idle"}
              >
                {status === "idle" ? (
                  <>
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
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                    Generate Plushie
                  </>
                ) : (
                  "Generating..."
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Preview/Result */}
        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "idle" && !previewUrl && (
                <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="mx-auto mb-4 h-16 w-16"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <p className="font-medium">Upload an image to get started</p>
                    <p className="text-sm">Your generated plushie will appear here</p>
                  </div>
                </div>
              )}

              {status === "idle" && previewUrl && (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={previewUrl}
                      alt="Uploaded preview"
                      className="w-full object-contain"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Ready to generate! Click the button to start.
                  </p>
                </div>
              )}

              {(status === "preparing" ||
                status === "generating" ||
                status === "finalizing") && (
                <GenerationProgress
                  status={status}
                  progress={progress}
                  className="aspect-square"
                />
              )}

              {status === "complete" && generatedImageUrl && (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border-2 border-primary">
                    <img
                      src={generatedImageUrl}
                      alt="Generated plushie"
                      className="w-full object-contain"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleSaveToGallery}
                    >
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
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                      Save to Gallery
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        onClick={handleDownload}
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
                        onClick={handleReset}
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                        New
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
