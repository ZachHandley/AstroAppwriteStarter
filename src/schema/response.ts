import { z } from "zod";

export const ResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  data: z.any().optional(),
});

export type Response = z.infer<typeof ResponseSchema>;
