import Link from "next/link";

export default function BestPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/docs"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Documentation
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Best Practices</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Get the most out of PlushieAI with these tips and tricks
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Photo Selection</h2>

          <h3>Choose the Right Photos</h3>
          <ul>
            <li><strong>Good Lighting:</strong> Natural, even lighting produces the best results</li>
            <li><strong>Clear Focus:</strong> Sharp, in-focus images work better than blurry ones</li>
            <li><strong>Simple Backgrounds:</strong> Plain backgrounds help the AI identify the subject</li>
            <li><strong>Face Forward:</strong> Frontal or three-quarter views work best</li>
          </ul>

          <h3>Avoid These Common Mistakes</h3>
          <ul>
            <li>Overly dark or backlit photos</li>
            <li>Images with multiple subjects (AI may get confused)</li>
            <li>Heavily filtered or edited photos</li>
            <li>Very low resolution images</li>
          </ul>

          <h2>Style Selection</h2>

          <h3>Matching Style to Subject</h3>
          <ul>
            <li><strong>Pets:</strong> Try "Cute & Cuddly" or "Kawaii" for maximum adorableness</li>
            <li><strong>Babies:</strong> "Cute & Cuddly" captures their innocence perfectly</li>
            <li><strong>Adults:</strong> "Realistic" or "Cartoon" styles work well</li>
            <li><strong>Unique Looks:</strong> Experiment with "Vintage Toy" for something different</li>
          </ul>

          <h2>Optimization Tips</h2>

          <h3>Image Quality</h3>
          <ul>
            <li>Upload images between 1MB and 10MB for best results</li>
            <li>Minimum resolution: 512x512 pixels</li>
            <li>Recommended: 1024x1024 or higher</li>
            <li>Supported formats: JPG, PNG, WEBP</li>
          </ul>

          <h3>Iterating for Perfect Results</h3>
          <ul>
            <li>Try the same photo with different styles</li>
            <li>Adjust lighting if first attempt isn't perfect</li>
            <li>Crop tighter on the subject if needed</li>
            <li>Save your favorites to compare later</li>
          </ul>

          <h2>Gallery Management</h2>

          <ul>
            <li>Use favorites to mark your best creations</li>
            <li>Download originals for safekeeping</li>
            <li>Delete unsuccessful attempts to keep gallery organized</li>
            <li>Use search to find specific plushies quickly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
