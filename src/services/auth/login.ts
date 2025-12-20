/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

export const loginPatient = async (_currentState:any, formData:any):Promise<any> => {
 try {
    const loginData = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    console.log(loginData, "Login Data", JSON.stringify(loginData));
   
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

