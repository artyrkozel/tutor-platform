"use client";

import { ClientSafeProvider } from "next-auth/react";
import { Github } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useOAuthSignIn } from "../use-oauth-sign-in";

export const ProviderButton = ({
  provider,
}: {
  provider: ClientSafeProvider;
}) => {
  const oauthSignIn = useOAuthSignIn(provider);

  const getIcon = (provider: ClientSafeProvider) => {
    switch (provider.id) {
      case "github":
        return <Github />;
      default:
        return null;
    }
  };

  return (
    <Button onClick={() => oauthSignIn.signIn()}>
      {getIcon(provider)} {provider.name}
    </Button>
  );
};
