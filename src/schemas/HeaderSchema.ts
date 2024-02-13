import { z } from "zod";

export const headerSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  summary: z.string().min(10, {
    message: "Summary must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  phone: z.string().min(8, {
    message: "Please enter a valid phone number",
  }),
  socialLink1: z.string().optional(),
  socialLink2: z.string().optional(),
  socialLink3: z.string().optional(),
});
