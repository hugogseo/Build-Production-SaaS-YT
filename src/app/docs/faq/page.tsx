import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/docs"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Documentation
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Common questions about PlushieAI
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-xl font-semibold">How does PlushieAI work?</h3>
            <p className="text-muted-foreground">
              PlushieAI uses advanced artificial intelligence to analyze your photos and transform them into adorable plushie designs. Our AI identifies key features, adjusts proportions, and applies the selected style to create a unique plushie version of your subject.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">What types of photos work best?</h3>
            <p className="text-muted-foreground">
              Clear, well-lit photos with simple backgrounds work best. Close-up shots of faces (people or pets) produce the most detailed and accurate results. We recommend images that are at least 512x512 pixels.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">How long does generation take?</h3>
            <p className="text-muted-foreground">
              Most plushie generations complete in 10-30 seconds. During peak times, it may take slightly longer. You'll see a progress indicator showing the current status of your generation.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Can I use generated plushies commercially?</h3>
            <p className="text-muted-foreground">
              Generated plushies are for personal use only unless you have a commercial license. Contact us if you're interested in using PlushieAI for commercial purposes.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">What image formats are supported?</h3>
            <p className="text-muted-foreground">
              We support JPG, PNG, and WEBP formats. Maximum file size is 10MB. For best results, we recommend high-resolution images in JPG or PNG format.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Can I delete or edit my generated plushies?</h3>
            <p className="text-muted-foreground">
              Yes! From your gallery, you can view, download, favorite, or delete any of your generated plushies. Once deleted, plushies cannot be recovered, so make sure to download any you want to keep.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Is my data safe?</h3>
            <p className="text-muted-foreground">
              Absolutely. We take privacy seriously. Your uploaded images are only used for generation and are not shared with third parties. See our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for more details.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">What if I'm not happy with the result?</h3>
            <p className="text-muted-foreground">
              Try a different style! Each style produces unique results. You can also try adjusting your photo (better lighting, different angle) and regenerating. There's no limit to how many plushies you can create.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              Our free tier allows you to try PlushieAI without any cost. For paid plans, please refer to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              for refund information.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Can I download my plushies?</h3>
            <p className="text-muted-foreground">
              Yes! Every generated plushie can be downloaded in high quality. Simply click the download button in your gallery or in the generation preview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
