import { z } from "zod";
export const api = {
  contact: {
    create: {
      path: "/api/contact",
      input: z.any()
    }
  }
};
export function buildUrl(path: string) { return path; }
