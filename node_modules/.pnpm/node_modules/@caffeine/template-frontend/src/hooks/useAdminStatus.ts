import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";

interface ActorWithAdmin {
  isCallerAdmin: () => Promise<boolean>;
}

export function useAdminStatus() {
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const { identity } = useInternetIdentity();

  const query = useQuery<boolean>({
    queryKey: ["isAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return (actor as unknown as ActorWithAdmin).isCallerAdmin();
    },
    enabled: !!actor && !!identity && !actorFetching,
    retry: false,
  });

  return {
    isAdmin: query.data || false,
    isLoading: actorFetching || query.isLoading,
  };
}
