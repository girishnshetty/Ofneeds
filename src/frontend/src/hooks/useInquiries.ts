import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";

export interface Inquiry {
  name: string;
  company: string;
  email: string;
  phone: [] | [string];
  productInterest: string;
  quantity: string;
  message: string;
  timestamp: bigint;
}

interface ActorWithInquiries {
  getAllInquiries: (arg: null) => Promise<Array<[string, Inquiry]>>;
}

export function useInquiries() {
  const { actor, isFetching: actorFetching } = useActor(createActor);

  return useQuery<Array<[string, Inquiry]>>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return (actor as unknown as ActorWithInquiries).getAllInquiries(null);
    },
    enabled: !!actor && !actorFetching,
  });
}
