import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Building,
  Calendar,
  Loader2,
  Mail,
  Package,
  Phone,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { createActor } from "../backend";
import { useInquiries } from "../hooks/useInquiries";

function useDeleteInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (_id: string) => {
      if (!actor) throw new Error("Not available");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

export default function AdminInquiriesPage() {
  const { data: inquiries, isLoading } = useInquiries();
  const deleteInquiry = useDeleteInquiry();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = async () => {
    if (deleteId) {
      await deleteInquiry.mutateAsync(deleteId);
      setDeleteId(null);
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading)
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Inquiries</h1>
          <p className="text-muted-foreground">
            Total: {inquiries?.length || 0}
          </p>
        </div>

        {!inquiries || inquiries.length === 0 ? (
          <div className="rounded-xl border border-border/50 bg-card p-12 text-center">
            <p className="text-muted-foreground">No inquiries yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {inquiries.map(([id, inquiry]) => (
              <div
                key={id}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{inquiry.name}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {formatDate(inquiry.timestamp)}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteId(id)}
                    disabled={deleteInquiry.isPending}
                  >
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start gap-2">
                    <Building className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Company
                      </div>
                      <div className="text-sm font-medium">
                        {inquiry.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-medium">{inquiry.email}</div>
                    </div>
                  </div>
                  {inquiry.phone && (
                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Phone
                        </div>
                        <div className="text-sm font-medium">
                          {inquiry.phone}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <Package className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Product Interest
                      </div>
                      <div className="text-sm font-medium">
                        {inquiry.productInterest}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Package className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Quantity
                      </div>
                      <div className="text-sm font-medium">
                        {inquiry.quantity}
                      </div>
                    </div>
                  </div>
                </div>
                {inquiry.message && (
                  <div className="mt-4 rounded-lg bg-muted/30 p-4">
                    <div className="mb-1 text-xs font-medium text-muted-foreground">
                      Message
                    </div>
                    <p className="text-sm">{inquiry.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Inquiry</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this inquiry?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
