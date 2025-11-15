"use client";

import { signIn, authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SignInButton() {
  const { data: session, isPending } = authClient.useSession();
  const [isLoading, setIsLoading] = useState(false);

  if (isPending) {
    return (
      <Button disabled>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent mr-2" />
        Loading...
      </Button>
    );
  }

  if (session) {
    return null;
  }

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Sign in failed:", error);
      // TODO: Add toast notification for error
      // toast.error("Failed to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleSignIn} disabled={isLoading}>
      {isLoading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent mr-2" />
          Signing in...
        </>
      ) : (
        "Sign in"
      )}
    </Button>
  );
}
