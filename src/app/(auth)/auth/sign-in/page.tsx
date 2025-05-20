import { SignInForm } from "@/features/auth/sign-in-form.server";
import { Suspense } from "react";

export default function SignIn() {
  return (
    <div className="container relative flex-col items-center justify-center self-center pt-24">
      <div className="max-w-[350px] mx-auto">
        <div>Войти</div>
        <Suspense fallback={<>...loading</>}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}
