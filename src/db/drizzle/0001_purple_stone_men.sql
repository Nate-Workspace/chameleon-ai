ALTER TABLE "chat" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "chat" RENAME COLUMN "folderId" TO "folder_id";--> statement-breakpoint
ALTER TABLE "chat" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "chat" RENAME COLUMN "lastMessageAt" TO "last_message";--> statement-breakpoint
ALTER TABLE "folder" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "folder" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "message" RENAME COLUMN "chatId" TO "chat_id";--> statement-breakpoint
ALTER TABLE "message" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "hashedPassword" TO "hashed_password";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "chat" DROP CONSTRAINT "chat_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "chat" DROP CONSTRAINT "chat_folderId_folder_id_fk";
--> statement-breakpoint
ALTER TABLE "folder" DROP CONSTRAINT "folder_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "message" DROP CONSTRAINT "message_chatId_chat_id_fk";
--> statement-breakpoint
ALTER TABLE "chat" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "folder" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "message" ALTER COLUMN "sender" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "folder" ADD COLUMN "chat_id" uuid;