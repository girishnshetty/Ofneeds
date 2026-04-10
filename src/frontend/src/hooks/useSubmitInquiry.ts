import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  quantity: string;
  message: string;
}

interface ActorWithSubmit {
  submitInquiry: (
    name: string,
    company: string,
    email: string,
    phone: [] | [string],
    productInterest: string,
    quantity: string,
    message: string,
  ) => Promise<void>;
}

export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not available");
      const phone: [] | [string] = data.phone ? [data.phone] : [];
      return (actor as unknown as ActorWithSubmit).submitInquiry(
        data.name,
        data.company,
        data.email,
        phone,
        data.productInterest,
        data.quantity,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
