import { db } from "@/db";
import { chat } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getChats() {
  const result = await db
    .select({
      id: chat.id,
      title: chat.title,
      folderId: chat.folderId,
      lastMessageAt: chat.lastMessageAt,
      createdAt: chat.createdAt,
    })
    .from(chat)
    .orderBy(desc(chat.lastMessageAt));

  // Convert dates to ISO strings
  return result.map((chat) => ({
    ...chat,
    lastMessageAt: chat.lastMessageAt?.toISOString() ?? new Date().toISOString(),
    createdAt: chat.createdAt?.toISOString() ?? new Date().toISOString(),
  }));
}
