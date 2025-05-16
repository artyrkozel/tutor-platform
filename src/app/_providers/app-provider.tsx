"use client";

import { AppSessionProvider } from "@/entities/session/app-session-provider";

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return <AppSessionProvider>{children}</AppSessionProvider>;
}
