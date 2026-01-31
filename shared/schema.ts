import { z } from "zod";
export const contactMessages = { $inferSelect: {} as any };
export const insertContactMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string(),
});
