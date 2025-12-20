/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { loginPatient } from "@/services/auth/login"; 

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginPatient, null);

  console.log(state);

  return (
    <form action={formAction} className="space-y-8">
      <FieldGroup>
        {/* Email */}
        <Field>
          <FieldLabel>
            Email <span className="text-red-500">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              disabled={isPending}
            />
            <FieldDescription>
              Registered email address
            </FieldDescription>
          </FieldContent>
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel>
            Password <span className="text-red-500">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              disabled={isPending}
            />
            <FieldDescription>
              Your account password
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
