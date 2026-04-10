import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  useGetCallerUserProfile,
  useSaveCallerUserProfile,
} from "../../hooks/useUserProfile";

export default function ProfileSetupModal() {
  const { identity } = useInternetIdentity();
  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched,
  } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isAuthenticated = !!identity;
  const showProfileSetup =
    isAuthenticated && !profileLoading && isFetched && userProfile === null;

  useEffect(() => {
    if (!showProfileSetup) {
      setName("");
      setError("");
    }
  }, [showProfileSetup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    try {
      await saveProfile.mutateAsync({ name: name.trim() });
    } catch (err) {
      setError("Failed to save profile. Please try again.");
      console.error("Profile save error:", err);
    }
  };

  return (
    <Dialog open={showProfileSetup} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Welcome to Designing Space</DialogTitle>
          <DialogDescription>
            Please tell us your name to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={saveProfile.isPending}
          >
            {saveProfile.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
