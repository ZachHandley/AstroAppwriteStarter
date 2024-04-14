import { $createUser, $getUser, $loginUser, $logoutUser } from "./appwrite";
import type { Models } from "appwrite";
import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { z } from "zod";
import { AuthUserSchema, AuthUserCreateSchema } from "@schema/authUser";
import type { Response } from "@schema/response";

type AuthUser = z.infer<typeof AuthUserSchema>;
type AuthUserCreate = z.infer<typeof AuthUserCreateSchema>;

export const $user = atom<AuthUser | null>(null);
export const $userSession = persistentAtom<Models.Session | null>(
  "userSession",
  null,
  {
    encode: JSON.stringify,
    decode: (value) => {
      if (value === null) return null;
      return JSON.parse(value);
    },
  }
);

export const createUser = async (
  user: AuthUserCreate,
  password: string
): Promise<Response> => {
  const response = await $createUser(user.email, password, user.name);
  if (response === null) return { status: 500, message: "An error occurred" };
  return {
    status: 200,
    message: "User account created",
    data: response,
  };
};

export const getUser = async (): Promise<Response> => {
  const response = await $getUser();
  if (response === null) return { status: 500, message: "An error occurred" };
  $user.set(response);
  return {
    status: 200,
    message: "User account retrieved",
    data: response,
  };
};

export const loginUser = async (
  email: string,
  password: string
): Promise<Response> => {
  // Send the params to appwrite login
  const response = await $loginUser(email, password);
  if (response === null) return { status: 500, message: "An error occurred" };
  const user = await $getUser();

  // Set values in store
  $user.set(user);
  $userSession.set(response);
  return {
    status: 200,
    message: "User logged in",
    data: response,
  };
};

export const logoutUser = async (): Promise<Response> => {
  const response = await $logoutUser();
  if (response === null) return { status: 500, message: "An error occurred" };
  return {
    status: 200,
    message: "User logged out",
  };
};
