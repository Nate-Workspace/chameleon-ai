import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { chat } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    // Get userId from auth session or query params
    // const { searchParams } = new URL(request.url);
    // const userId = searchParams.get("userId");

    // if (!userId) {
    //   return NextResponse.json(
    //     { error: "User ID is required" },
    //     { status: 400 }
    //   );
    // }

    const chats = await db
      .select({
        id: chat.id,
        title: chat.title,
        folderId: chat.folderId,
        lastMessageAt: chat.lastMessageAt,
        createdAt: chat.createdAt,
      })
      .from(chat)
    //   .where(eq(chat.userId, userId))
      .orderBy(desc(chat.lastMessageAt));

    return NextResponse.json({ chats }, { status: 200 });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return NextResponse.json(
      { error: "Failed to fetch chats" },
      { status: 500 }
    );
  }
}
