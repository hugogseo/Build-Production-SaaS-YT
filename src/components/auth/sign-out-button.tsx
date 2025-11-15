"use client";

import { signOut, authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  if (isPending) {
    return (
      <Button disabled>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent mr-2" />
        Loading...
      </Button>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
      // TODO: Add toast notification for error
      // toast.error("Failed to sign out. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent mr-2" />
          Signing out...
        </>
      ) : (
        "Sign out"
      )}
    </Button>
  );
}
