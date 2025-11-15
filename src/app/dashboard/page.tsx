import { redirect } from "next/navigation";
import { getUserWithSession, formatMemberSince } from "@/lib/user-data";
import { DashboardClient } from "@/components/dashboard-client";
import { type PlushieData } from "@/components/ui/plushie-card";

// Mock plushie data for UI demonstration
// TODO: Replace with actual database query when plushies table is implemented
const MOCK_PLUSHIES: PlushieData[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop",
    prompt: "Golden retriever puppy transformed into adorable plushie",
    style: "Cute",
    isFavorite: true,
    createdAt: new Date("2025-11-10"),
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=600&h=800&fit=crop",
    prompt: "Fluffy cat in plushie style with big eyes",
    style: "Kawaii",
    isFavorite: false,
    createdAt: new Date("2025-11-12"),
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=500&fit=crop",
    prompt: "Baby portrait converted to soft plushie character",
    style: "Cartoon",
    isFavorite: true,
    createdAt: new Date("2025-11-13"),
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=600&h=700&fit=crop",
    prompt: "Hamster eating transformed into plushie design",
    style: "Cute",
    isFavorite: false,
    createdAt: new Date("2025-11-08"),
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
    prompt: "Puppy with flower crown as plushie",
    style: "Realistic",
    isFavorite: false,
    createdAt: new Date("2025-11-14"),
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=550&fit=crop",
    prompt: "Tabby cat lounging plushie version",
    style: "Cute",
    isFavorite: true,
    createdAt: new Date("2025-11-11"),
  },
];

export default async function DashboardPage() {
  // Better Auth server-side session validation
  const result = await getUserWithSession();

  if (!result) {
    redirect("/");
  }

  const { user } = result;

  // Format member since date
  const memberSince = formatMemberSince(user.createdAt);

  // TODO: Query actual plushies from database when plushies table exists
  // For now, using mock data until generation feature is implemented
  const plushies: PlushieData[] = MOCK_PLUSHIES;

  // TODO: Query actual total generations count
  const totalGenerations = plushies.length;

  return (
    <DashboardClient
      credits={user.credits}
      totalGenerations={totalGenerations}
      memberSince={memberSince}
      plushies={plushies}
    />
  );
}
