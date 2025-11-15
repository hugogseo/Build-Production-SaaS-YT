export default function TermsPage() {
  const lastUpdated = "November 14, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using PlushieAI, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily use PlushieAI for personal, non-commercial purposes. This license shall automatically terminate if you violate any of these restrictions.
          </p>

          <h3>You May:</h3>
          <ul>
            <li>Create plushie designs for personal use</li>
            <li>Download and save your generated plushies</li>
            <li>Share your creations on social media with attribution</li>
          </ul>

          <h3>You May Not:</h3>
          <ul>
            <li>Use generated plushies for commercial purposes without a license</li>
            <li>Claim ownership of the AI generation technology</li>
            <li>Attempt to reverse engineer the service</li>
            <li>Upload inappropriate, offensive, or illegal content</li>
            <li>Abuse the service through excessive automation or scraping</li>
          </ul>

          <h2>User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account and for all activities that occur under your account.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by PlushieAI and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h3>Your Content</h3>
          <p>
            You retain ownership of photos you upload. By uploading content, you grant us a license to use, process, and display your content solely for the purpose of providing our service.
          </p>

          <h3>Generated Content</h3>
          <p>
            You own the plushie images generated from your photos. However, we retain the right to use anonymized generation data to improve our AI models.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to use PlushieAI to:</p>
          <ul>
            <li>Upload images containing nudity, violence, or illegal content</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt the service</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>Service Availability</h2>
          <p>
            We strive to provide reliable service, but we do not guarantee that PlushieAI will be available at all times. We may modify, suspend, or discontinue the service at any time without notice.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall PlushieAI be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless PlushieAI from any claims arising from your use of the service or violation of these terms.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PlushieAI operates, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date of these Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
            <br />
            Email: legal@plushieai.com
          </p>
        </div>
      </div>
    </div>
  );
}
