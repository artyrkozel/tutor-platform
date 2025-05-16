"use client";

import { useMutation } from "@tanstack/react-query";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const useOAuthSignIn = (provider: ClientSafeProvider) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const oauthSignMutation = useMutation({
    mutationFn: () =>
      signIn(provider.id, {
        callbackUrl: callbackUrl ?? undefined,
      }),
  });

  return {
    isPending: oauthSignMutation.isPending,
    signIn: oauthSignMutation.mutate,
  };
};
