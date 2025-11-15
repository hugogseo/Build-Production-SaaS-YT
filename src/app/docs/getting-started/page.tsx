import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/docs"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Documentation
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Getting Started</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Learn how to create your first plushie with PlushieAI
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Quick Start Guide</h2>
          <p>
            Welcome to PlushieAI! Follow these simple steps to create your first adorable plushie design.
          </p>

          <h3>Step 1: Sign Up</h3>
          <p>
            Create your free account by clicking the "Sign In" button in the header. We use Google OAuth for secure, hassle-free authentication.
          </p>

          <h3>Step 2: Upload Your Photo</h3>
          <p>
            Navigate to the Generate page and upload a photo of yourself, your pet, friend, or family member. You can:
          </p>
          <ul>
            <li>Drag and drop an image file</li>
            <li>Click "Browse Files" to select from your device</li>
            <li>Use "Take Photo" to capture with your camera (mobile)</li>
          </ul>

          <h3>Step 3: Choose Your Style</h3>
          <p>
            Select from one of our plushie styles:
          </p>
          <ul>
            <li><strong>Cute & Cuddly</strong> - Soft, rounded features with big eyes</li>
            <li><strong>Kawaii Style</strong> - Japanese-inspired with pastel colors</li>
            <li><strong>Realistic Plushie</strong> - Detailed and lifelike</li>
            <li><strong>Cartoon Style</strong> - Bold and vibrant</li>
            <li><strong>Vintage Toy</strong> - Classic retro aesthetic</li>
          </ul>

          <h3>Step 4: Generate!</h3>
          <p>
            Click the "Generate Plushie" button and wait 10-30 seconds while our AI works its magic.
          </p>

          <h3>Step 5: Save & Share</h3>
          <p>
            Once your plushie is generated, you can:
          </p>
          <ul>
            <li>Save it to your gallery</li>
            <li>Download the high-quality image</li>
            <li>Generate a new version with different styles</li>
          </ul>

          <h2>Tips for Best Results</h2>
          <ul>
            <li>Use well-lit photos with clear subjects</li>
            <li>Close-up shots work better than distant ones</li>
            <li>Simple backgrounds help the AI focus on the subject</li>
            <li>Try different styles to see which you like best</li>
          </ul>

          <div className="not-prose mt-12">
            <Button asChild size="lg">
              <Link href="/generate">Start Creating Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
