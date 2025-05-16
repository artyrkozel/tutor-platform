"use client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { useEmailSignIn } from "../use-email-sign-in";

export const EmailSignInForm = () => {
  const form = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
  });

  const emailSignIn = useEmailSignIn();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => emailSignIn.signIn(data.email))}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={emailSignIn.isPending}>Войти через email</Button>
        </div>
      </form>
    </Form>
  );
};
