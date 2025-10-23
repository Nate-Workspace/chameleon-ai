DROP TABLE "message_reads" CASCADE;--> statement-breakpoint
DROP TABLE "user" CASCADE;--> statement-breakpoint
ALTER TABLE "chat" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "folder" DROP COLUMN "user_id";