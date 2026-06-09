import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters")
    .regex(/^[A-Za-z\s]+$/, "Full Name should not contain numbers"),

  email: z
    .string()
    .email("Enter a valid email address"),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});