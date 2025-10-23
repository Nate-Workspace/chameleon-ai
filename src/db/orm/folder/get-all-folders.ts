import { db } from "@/db";
import { folder } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getFolders() {
  const result = await db
    .select({
      id: folder.id,
      name: folder.name,
      createdAt: folder.createdAt,
    })
    .from(folder)
    .orderBy(desc(folder.createdAt));

  return result.map((folder) => ({
    ...folder,
    createdAt: folder.createdAt?.toISOString() ?? new Date().toISOString(),
  }));
}
