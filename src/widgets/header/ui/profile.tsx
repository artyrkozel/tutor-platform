"use client";

import { useAppSession } from "@/entities/user/use-app-session";
import { SignInButton } from "@/features/auth/sign-in-button";
import { useSignOut } from "@/features/auth/use-sign-out";
import { Button } from "@/shared/ui/button";

export const Profile = () => {
  const session = useAppSession();
  const { signOut, isPending } = useSignOut();

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }

   if (session.status === "loading") {
    return <span>...loading</span>;
  }

  return (
    <div>
      <div>{session.data?.user.name}</div>
      <Button disabled={isPending} onClick={() => signOut()}>
        Выйти
      </Button>
    </div>
  );
};
