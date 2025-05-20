import AuthGuard from "@/features/auth/auth-guard";
import { Header } from "@/widgets/header/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AuthGuard>{children}</AuthGuard>
    </>
  );
}
