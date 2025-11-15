import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

export interface UserData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  credits: number;
  platformRole: string;
  createdAt: Date;
}

/**
 * Get current session and user data with Better Auth server-side validation
 * This should be used in Server Components and Server Actions
 */
export async function getUserWithSession() {
  // Better Auth session validation
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return null;
  }

  // Query complete user data from database
  const userData = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, session.user.id))
    .limit(1);

  if (!userData.length) {
    return null;
  }

  return {
    session,
    user: userData[0],
  };
}

/**
 * Format user's join date for display
 */
export function formatMemberSince(createdAt: Date): string {
  return new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}
