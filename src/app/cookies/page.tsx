export default function CookiePolicyPage() {
  const lastUpdated = "November 14, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Cookie Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help the website remember information about your visit, making it easier to use and more useful to you.
          </p>

          <h2>How We Use Cookies</h2>
          <p>PlushieAI uses cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and authentication.
          </p>
          <ul>
            <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
            <li><strong>Authentication cookies:</strong> Verify your identity and session</li>
            <li><strong>Security cookies:</strong> Protect against fraudulent activity</li>
          </ul>

          <h3>Functional Cookies</h3>
          <p>
            These cookies allow us to remember choices you make and provide enhanced, personalized features.
          </p>
          <ul>
            <li><strong>Preference cookies:</strong> Remember your settings (theme, language)</li>
            <li><strong>UI state cookies:</strong> Remember your interface preferences</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <p>
            We use these cookies to understand how visitors interact with our website, helping us improve the user experience.
          </p>
          <ul>
            <li>Page visit tracking</li>
            <li>Feature usage statistics</li>
            <li>Error logging and debugging</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies on our site are set by third-party services we use:
          </p>
          <ul>
            <li><strong>Google OAuth:</strong> For authentication services</li>
            <li><strong>Analytics providers:</strong> To understand site usage</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways:
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul>
            <li>Block all cookies</li>
            <li>Accept only first-party cookies</li>
            <li>Delete cookies after each session</li>
            <li>Clear existing cookies</li>
          </ul>

          <h3>Browser-Specific Instructions</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
            </li>
            <li>
              <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
            </li>
          </ul>

          <h2>Impact of Disabling Cookies</h2>
          <p>
            Please note that disabling cookies may impact your experience on PlushieAI:
          </p>
          <ul>
            <li>You may not be able to log in or stay logged in</li>
            <li>Your preferences and settings may not be saved</li>
            <li>Some features may not function correctly</li>
            <li>The website may not remember your previous actions</li>
          </ul>

          <h2>Cookie Duration</h2>
          <p>Cookies on PlushieAI have different lifespans:</p>
          <ul>
            <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent cookies:</strong> Remain for a set period or until manually deleted</li>
          </ul>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2>More Information</h2>
          <p>
            For more details about how we protect your data, please see our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:
            <br />
            Email: privacy@plushieai.com
          </p>
        </div>
      </div>
    </div>
  );
}
