import { Client, Databases, Account, Storage, ID, type Models } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, APPWRITE_DB } from "@/constants";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
export const $account = new Account(client);
export const $database = new Databases(client);
export const $storage = new Storage(client);

export const $createDocument = async (
  collection: string,
  data: any,
  id?: string,
  permissions?: string[]
): Promise<Models.Document | null> => {
  try {
    const response = await $database.createDocument(
      APPWRITE_DB,
      collection,
      id ?? ID.unique(),
      data,
      permissions
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $updateDocument = async (
  collection: string,
  id: string,
  data: any,
  permissions?: string[]
): Promise<Models.Document | null> => {
  try {
    const response = await $database.updateDocument(
      APPWRITE_DB,
      collection,
      id,
      data,
      permissions
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $deleteDocument = async (
  collection: string,
  id: string
): Promise<boolean> => {
  try {
    //const response =
    await $database.deleteDocument(APPWRITE_DB, collection, id);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const $getDocument = async (
  collection: string,
  id: string
): Promise<Models.Document | null> => {
  try {
    const response = await $database.getDocument(APPWRITE_DB, collection, id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $listDocuments = async (
  collection: string,
  queries: string[] = []
): Promise<Models.DocumentList<Models.Document> | null> => {
  try {
    const response = await $database.listDocuments(
      APPWRITE_DB,
      collection,
      queries
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $createUser = async (
  email: string,
  password: string,
  name?: string,
  id?: string
): Promise<boolean> => {
  try {
    //const response =
    await $account.create(id ?? ID.unique(), email, password, name);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const $getUser = async () => {
  try {
    const response = await $account.get();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $updateUserEmail = async (email: string, password: string) => {
  try {
    const response = await $account.updateEmail(email, password);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $updateUserName = async (name: string) => {
  try {
    const response = await $account.updateName(name);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $updateUserPassword = async (
  password: string,
  oldPassword: string
) => {
  try {
    const response = await $account.updatePassword(password, oldPassword);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $loginUser = async (email: string, password: string) => {
  try {
    const response = await $account.createEmailPasswordSession(email, password);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $logoutUser = async () => {
  try {
    const response = await $account.deleteSession("current");
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $getUserPrefs = async () => {
  try {
    const response = await $account.getPrefs();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $updateUserPrefs = async (prefs: any) => {
  try {
    const response = await $account.updatePrefs(prefs);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $uploadFile = async (
  file: File,
  bucketId: string
): Promise<Models.File | null> => {
  try {
    const response = await $storage.createFile(bucketId, ID.unique(), file);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const $deleteFile = async (
  bucketId: string,
  fileId: string
): Promise<boolean> => {
  try {
    //const response =
    await $storage.deleteFile(bucketId, fileId);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const $listFiles = async (
  bucketId: string
): Promise<Models.FileList | null> => {
  try {
    const response = await $storage.listFiles(bucketId);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
