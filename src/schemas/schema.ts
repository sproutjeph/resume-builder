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
export const aboutSchema = z.object({
  about: z.string().min(10, {
    message: "About section must be at least 20 characters.",
  }),
});

export const workSchema = z.object({
  company: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  jobType: z.string().min(10, {
    message: "Summary must be at least 10 characters.",
  }),
  position: z.string().email({
    message: "Please enter a valid email",
  }),
  descprition: z.string().min(8, {
    message: "Please enter a valid phone number",
  }),
});
