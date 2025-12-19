/* eslint-disable @typescript-eslint/no-explicit-any */
// components/RegistrationForm.tsx
"use client";

import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { registerPatient } from "@/services/auth/register";


export default function RegistrationForm() {
  
    const [state, formAction, isPending] = useActionState(registerPatient, null);
  console.log(state);

  return (
    <form action={formAction} className="space-y-8">
      <FieldGroup>
        {/* Name */}
        <Field>
          <FieldLabel>
            Name <span className="text-red-500">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              name="name"
              placeholder="Enter patient name"
              disabled={isPending}
            />
            <FieldDescription>
              Full name of the patient
            </FieldDescription>
          </FieldContent>
          {/* <FieldError errors={getFieldErrors("name")} /> */}
        </Field>

        {/* Email */}
        <Field>
          <FieldLabel>
            Email <span className="text-red-500">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              disabled={isPending}
            />
            <FieldDescription>
              We&apos;ll use this to contact you
            </FieldDescription>
          </FieldContent>
          {/* <FieldError errors={getFieldErrors("email")} /> */}
        </Field>

        {/* Address */}
        <Field>
          <FieldLabel>Address (optional)</FieldLabel>
          <FieldContent>
            <Input
              name="address"
              placeholder="Enter address"
              disabled={isPending}
            />
          </FieldContent>
          {/* <FieldError errors={getFieldErrors("address")} /> */}
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
              placeholder="Enter password"
              disabled={isPending}
            />
            <FieldDescription>
              Minimum 6 characters
            </FieldDescription>
          </FieldContent>
          {/* <FieldError errors={getFieldErrors("password")} /> */}
        </Field>
      </FieldGroup>

      {/* Success Message */}
      {/* {state.success && (
        <p className="text-center text-sm font-medium text-green-600">
          {state.message || "Registration successful!"}
        </p>
      )} */}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Registering..." : "Register Patient"}
      </Button>
    </form>
  );
}