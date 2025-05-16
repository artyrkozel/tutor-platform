import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const useEmailSignIn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const emailSignInMut = useMutation({
    mutationFn: (email: string) => {
      return signIn("email", {
        email,
        callbackUrl: callbackUrl ?? undefined,
      });
    },
  });

  return {
    isPending: emailSignInMut.isPending,
    signIn: emailSignInMut.mutate,
  };
};
