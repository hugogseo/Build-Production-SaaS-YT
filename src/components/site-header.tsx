"use client";

import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { UserProfile } from "@/components/auth/user-profile";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";

export function SiteHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
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
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              PlushieAI
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            {session && (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/generate"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Generate
                </Link>
                <Link
                  href="/chat"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Chat
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Chatbot
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Agent
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  API
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Visual
                </Link>
              </>
            )}
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {!session && (
            <Button asChild variant="default" size="sm">
              <Link href="/api/auth/signin">Sign In</Link>
            </Button>
          )}
          <UserProfile />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
