"use client";

import { useAppSession } from "@/entities/user/use-app-session";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useAppSession();

  const isUnauthenticated = session.status === "unauthenticated";

  useEffect(() => {
    if (isUnauthenticated) {
      signIn();
    }
  }, [isUnauthenticated]);

  const isLoading =
    session.status === "loading" || session.status === "unauthenticated";

  return (
    <>
      {isLoading && <>...loading</>}
      {session.status === "authenticated" && children}
    </>
  );
}
