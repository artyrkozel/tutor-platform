"use server";

import { cn } from "@/shared/lib/utils";
import { getProviders } from "next-auth/react";
import { Divider } from "./ui/divider";
import { EmailSignInForm } from "./ui/email-sign-in-form";
import { ProviderButton } from "./ui/provider-button";

export async function SignInForm() {
  const providers = await getProviders();
  const oauthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === "oauth"
  );

  return (
    <div className={cn("grid gap-6")}>
      <EmailSignInForm />
      <Divider />
      {oauthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
