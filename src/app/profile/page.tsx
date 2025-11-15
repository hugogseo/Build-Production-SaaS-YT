import { redirect } from "next/navigation";
import { getUserWithSession } from "@/lib/user-data";
import { ProfileClient } from "@/components/profile-client";

export default async function ProfilePage() {
  // Better Auth server-side session validation
  const result = await getUserWithSession();

  if (!result) {
    redirect("/");
  }

  const { user } = result;

  // Format created date
  const createdDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // TODO: Query actual generation statistics from database
  const stats = {
    totalGenerated: 0,
    thisMonth: 0,
    favorites: 0,
    mostUsedStyle: "Cute"
  };

  return (
    <ProfileClient
      user={user}
      createdDate={createdDate}
      stats={stats}
    />
  );
}
