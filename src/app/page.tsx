"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  return (
    <main className="flex-1">
      {/* Hero Section with Interactive Preview */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Headline & CTA */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Transform Your Photos into{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    Adorable Plushies
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Upload any photo of yourself, your friends, family, or pets, and watch as our AI transforms them into cute, cuddly plushie designs in seconds.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {session ? (
                  <Button size="lg" className="text-lg" asChild>
                    <Link href="/generate">Create Your Plushie</Link>
                  </Button>
                ) : (
                  <Button size="lg" className="text-lg" asChild>
                    <Link href="/api/auth/signin">Get Started Free</Link>
                  </Button>
                )}
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="#examples">See Examples</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold">10,000+</p>
                  <p className="text-sm text-muted-foreground">Plushies Created</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold">2,500+</p>
                  <p className="text-sm text-muted-foreground">Happy Users</p>
                </div>
              </div>
            </div>

            {/* Right: Before/After Slider */}
            <div className="flex items-center">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=600&fit=crop"
                afterImage="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=800&h=600&fit=crop"
                beforeAlt="Original photo"
                afterAlt="Plushie version"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Why Choose PlushieAI?</h2>
              <p className="text-lg text-muted-foreground">
                The easiest way to create personalized plushie designs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Upload Anything</h3>
                  <p className="text-sm text-muted-foreground">
                    Photos of people, pets, or objects. Our AI handles it all.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">AI Magic</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced AI transforms your images with stunning results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Instant Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your plushie design in 10-30 seconds. No waiting around.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Your Gallery</h3>
                  <p className="text-sm text-muted-foreground">
                    Save, download, and manage all your creations in one place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Amazing Transformations</h2>
              <p className="text-lg text-muted-foreground">
                See what our AI can create from your photos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={`https://images.unsplash.com/photo-${1560807707 + i}?w=400&h=400&fit=crop`}
                      alt={`Example ${i}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Transformed from a real photo into an adorable plushie design
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Create your plushie in three simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-3 text-xl font-semibold">Upload Your Photo</h3>
                <p className="text-muted-foreground">
                  Choose any photo from your device or take a new one with your camera.
                </p>
              </div>

              <div className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-3 text-xl font-semibold">AI Generates</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your photo and creates an adorable plushie version.
                </p>
              </div>

              <div className="relative text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-3 text-xl font-semibold">Download & Share</h3>
                <p className="text-muted-foreground">
                  Save to your gallery, download in high quality, or share with friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold">Ready to Create Your Plushie?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Join thousands of users turning their memories into adorable plushie designs
                </p>
                {session ? (
                  <Button size="lg" className="text-lg" asChild>
                    <Link href="/generate">Start Creating Now</Link>
                  </Button>
                ) : (
                  <Button size="lg" className="text-lg" asChild>
                    <Link href="/api/auth/signin">Sign Up Free</Link>
                  </Button>
                )}
                <p className="mt-4 text-sm text-muted-foreground">
                  No credit card required. Start for free today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
