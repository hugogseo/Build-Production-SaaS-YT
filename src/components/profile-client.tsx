"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Calendar, User, Shield, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProfileClientProps {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    credits: number;
    createdAt: Date;
  };
  createdDate: string;
  stats: {
    totalGenerated: number;
    thisMonth: number;
    favorites: number;
    mostUsedStyle: string;
  };
}

export function ProfileClient({ user, createdDate, stats }: ProfileClientProps) {
  const router = useRouter();

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Your Profile</h1>
      </div>

      <div className="grid gap-6">
        {/* Profile Overview Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={user.image || ""}
                  alt={user.name || "User"}
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback className="text-lg">
                  {(
                    user.name?.[0] ||
                    user.email?.[0] ||
                    "U"
                  ).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                  {user.emailVerified && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Member since {createdDate}</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              Your account details and settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Full Name
                </label>
                <div className="p-3 border rounded-md bg-muted/10">
                  {user.name || "Not provided"}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <div className="p-3 border rounded-md bg-muted/10 flex items-center justify-between">
                  <span>{user.email}</span>
                  {user.emailVerified && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">Available Credits</p>
                    <p className="text-sm text-muted-foreground">
                      Your current credit balance
                    </p>
                  </div>
                  <Badge variant="default" className="text-lg px-3 py-1">
                    {user.credits}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">Email Verification</p>
                    <p className="text-sm text-muted-foreground">
                      Email address verification status
                    </p>
                  </div>
                  <Badge variant={user.emailVerified ? "default" : "secondary"}>
                    {user.emailVerified ? "Verified" : "Unverified"}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generation Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Generation Settings</CardTitle>
            <CardDescription>
              Customize your default plushie generation preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Default Plushie Style</p>
                  <p className="text-sm text-muted-foreground">
                    Your preferred style for new generations
                  </p>
                </div>
                <Badge variant="outline">Cute & Cuddly</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Auto-Save to Gallery</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically save generated plushies
                  </p>
                </div>
                <Badge variant="default" className="bg-green-600">Enabled</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Image Quality</p>
                  <p className="text-sm text-muted-foreground">
                    Output resolution for generated plushies
                  </p>
                </div>
                <Badge variant="outline">High (1024x1024)</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Generation History</p>
                  <p className="text-sm text-muted-foreground">
                    Keep history of all generation attempts
                  </p>
                </div>
                <Badge variant="default" className="bg-green-600">Enabled</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Generation Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stats.totalGenerated}</p>
                  <p className="text-xs text-muted-foreground">Total Generated</p>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stats.thisMonth}</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stats.favorites}</p>
                  <p className="text-xs text-muted-foreground">Favorites</p>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stats.mostUsedStyle}</p>
                  <p className="text-xs text-muted-foreground">Most Used Style</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your account settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4" disabled>
                <User className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Edit Profile</div>
                  <div className="text-xs text-muted-foreground">Update your information</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" disabled>
                <Shield className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Security Settings</div>
                  <div className="text-xs text-muted-foreground">Manage security options</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" disabled>
                <Mail className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Email Preferences</div>
                  <div className="text-xs text-muted-foreground">Configure notifications</div>
                </div>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Additional profile management features coming soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
