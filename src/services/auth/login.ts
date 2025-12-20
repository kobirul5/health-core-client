/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";

const loginValidationZodSchema = z.object({
    email: z.email({
        error: "Invalid email address",
    }),
    password: z.string().min(4, "Password must be at least 6 characters").max(32, "Password must be at most 32 characters"),
})

export const loginPatient = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        }

        const valiDatedField = loginValidationZodSchema.safeParse(loginData);
        if (!valiDatedField.success) {
           return {
            success: false,
            errors: valiDatedField.error.issues.map((issue) => {
                return {
                    field: issue.path[0],
                    message: issue.message
                }
            }),
           }
        }

        const res = await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => res.json());

        return res

    } catch (error) {
        console.log(error, "Patient registration Failed");
    }
}

