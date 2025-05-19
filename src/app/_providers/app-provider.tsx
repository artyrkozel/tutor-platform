"use client";

import { AppSessionProvider } from "@/entities/user/app-session-provider";
import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
    <AppSessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppSessionProvider>
  );
}
