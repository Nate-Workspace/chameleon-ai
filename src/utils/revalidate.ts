"use server";

import { revalidatePath } from "next/cache";

export async function revalidateChat(path: string) {
  revalidatePath(path);
}
