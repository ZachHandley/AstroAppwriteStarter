import { z } from "zod";

export const AuthUserSchema = z.object({
  $id: z.string(),
  $createdAt: z.string(),
  $updatedAt: z.string(),
  name: z.string().optional(),
  email: z.string(),
  phone: z.string().optional(),
  prefs: z.record(z.string()).optional().default({}),
  labels: z.array(z.string()).optional().default([]),
});

export type AuthUser = z.infer<typeof AuthUserSchema>;

export const AuthUserCreateSchema = AuthUserSchema.omit({
  $id: true,
  $createdAt: true,
  $updatedAt: true,
  labels: true,
});

export type AuthUserCreate = z.infer<typeof AuthUserCreateSchema>;
