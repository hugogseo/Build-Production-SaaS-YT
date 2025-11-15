export default function PrivacyPolicyPage() {
  const lastUpdated = "November 14, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to PlushieAI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>

          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Profile picture (from Google OAuth)</li>
            <li>Account credentials</li>
          </ul>

          <h3>Uploaded Content</h3>
          <p>When you use our service, we collect:</p>
          <ul>
            <li>Images you upload for plushie generation</li>
            <li>Generated plushie images</li>
            <li>Generation preferences and settings</li>
          </ul>

          <h3>Usage Data</h3>
          <p>We automatically collect certain information when you use PlushieAI:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Generation history and statistics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use collected information for:</p>
          <ul>
            <li>Providing and maintaining our service</li>
            <li>Processing your plushie generation requests</li>
            <li>Improving our AI models and features</li>
            <li>Communicating with you about service updates</li>
            <li>Detecting and preventing fraud or abuse</li>
            <li>Analyzing usage patterns to improve user experience</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. Your images and generated content are stored securely using encryption. We retain your data for as long as your account is active or as needed to provide services.
          </p>

          <h2>Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our service</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience. See our{" "}
            <a href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </a>{" "}
            for more details.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@plushieai.com
          </p>
        </div>
      </div>
    </div>
  );
}
