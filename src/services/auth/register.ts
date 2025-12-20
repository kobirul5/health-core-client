/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";

const registerValidationZodSchema = z.object({
    email: z.email({
        error: "Invalid email address",
    }),
    password: z.string().min(4, "Password must be at least 6 characters").max(32, "Password must be at most 32 characters"),
    name: z.string().min(4, "Name must be at least 4 characters").max(32, "Name must be at most 32 characters"),
    address: z.string().min(4, "Address must be at least 4 characters").max(32, "Address must be at most 32 characters"),
})

export const registerPatient = async (_currentState:any, formData:any):Promise<any> => {
 try {


    const valiDatedField = registerValidationZodSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        address: formData.get("address"),
    });
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

        const registerData = {
        password: formData.get("password"),
        patient: {
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
        }
    }

    const newFromData = new FormData();
    newFromData.append("data", JSON.stringify(registerData));
   
    const res = await fetch("http://localhost:5000/api/v1/user/create-patient", {
        method: "POST",
        body: newFromData,
    }).then((res) => res.json());

    return res

 } catch (error) {
    console.log(error, "Patient registration Faild");
 }
}

