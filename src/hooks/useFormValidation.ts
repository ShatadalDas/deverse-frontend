import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo } from "react"

const FormInputSchema = z.object({
    firstName: z.string().trim().min(1, { message: "Please enter your first name" }).min(3, { message: "This is too short for a name (min: 3 chars)" }).max(30, { message: "This is too big for a name (max: 30 chars)" }),
    lastName: z.string().trim().min(1, { message: "Please enter your last name" }).min(3, { message: "This is too short for a name (min: 3 chars)" }).max(30, { message: "This is too big for a name (max: 30 chars)" }),
    email: z.string().trim().min(1, { message: "Please enter your email" }).email({ message: "This is not a valid email" }),
    password: z.string().trim().min(1, { message: "Please enter a password" }).min(8, { message: "Too short for a password (atleast 8 chars)" }).max(20, { message: "Too long for a password (atmost 30 chars)" }),
    confirmPassword: z.string().trim().min(1, { message: "Please enter your password" }).min(8, { message: "Too short for a password (atleast 8 chars)" }).max(20, { message: "Too long for a password (atmost 30 chars)" }),
})

const LoginInputSchema = FormInputSchema.pick({ email: true, password: true })

const SignupInputSchema = FormInputSchema.refine((data) => (data.password === data.confirmPassword), { message: "Password and Confirm Password don't match", path: ["confirmPassword"] })

type SignupInputType = z.infer<typeof SignupInputSchema>

type LoginInputType = z.infer<typeof LoginInputSchema>

type FormTypes = "login" | "signup"

type FormInputType<T> = (T extends "login" ? LoginInputType : SignupInputType)

function useFormValidation<T extends FormTypes>(formType: T, onSubmit: SubmitHandler<FormInputType<T>>) {
    const resolver = useMemo(() => zodResolver(formType === "login" ? LoginInputSchema : SignupInputSchema), [formType])
    
    const { handleSubmit, register, ...others } = useForm<FormInputType<T>>({ resolver })

    return {
        onSubmit,
        hasError: Object.keys(others.formState.errors).length !== 0,
        handleSubmit: handleSubmit(onSubmit),
        takeInput: register,
        errors: others.formState.errors,
        others
    }
}

export default useFormValidation