"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, ImageIcon } from "lucide-react";
import Link from "next/link";

interface CreditsSectionProps {
  availableCredits: number;
  totalGenerations: number;
  memberSince: string;
}

export function CreditsSection({
  availableCredits,
  totalGenerations,
  memberSince,
}: CreditsSectionProps) {
  const maxCredits = 200; // Maximum possible credits for progress bar
  const progressPercentage = (availableCredits / maxCredits) * 100;

  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
      {/* Main Credits Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Available Credits</h3>
              <Button
                asChild
                className="bg-pink-500 hover:bg-pink-600"
                size="sm"
              >
                <Link href="/pricing">Purchase More</Link>
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{availableCredits}</span>
                <span className="text-muted-foreground">créditos disponibles</span>
              </div>
              <Progress
                value={progressPercentage}
                className="h-2"
                indicatorClassName="bg-purple-500"
              />
            </div>

            <p className="text-sm text-green-500 font-medium">
              You&apos;re all set!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <ImageIcon className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Generations
                </p>
                <p className="text-2xl font-bold">{totalGenerations}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-lg font-semibold">{memberSince}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
