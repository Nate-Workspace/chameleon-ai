import { pgTable, uuid, text, timestamp, boolean, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";


export const user = pgTable("user", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  image: text("image"),
  hashedPassword: text("hashed_password"),
  createdAt: timestamp("created_at",{ withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at",{ withTimezone: true }).defaultNow().$onUpdate(() => new Date()),
});


export const folder = pgTable("folder", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  userId: uuid("user_id").notNull(),
  chatId: uuid("chat_id"),
  name: varchar("name",{ length: 255 }).notNull(),
  createdAt: timestamp("created_at",{ withTimezone: true }).defaultNow(),
});


export const chat = pgTable("chat", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  userId: uuid("user_id"),
  folderId: uuid("folder_id"),
  title: varchar("title",{ length: 255 }).notNull(),
  createdAt: timestamp("created_at",{ withTimezone: true }).defaultNow(),
  lastMessageAt: timestamp("last_message",{ withTimezone: true }).defaultNow(),
});


export const message = pgTable("message", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  chatId: uuid("chat_id").notNull(),
  sender: varchar("sender",{ length: 10 }).$type<"user" | "ai">().notNull(),
  body: text("body"),
  image: text("image"),
  createdAt: timestamp("created_at",{ withTimezone: true }).defaultNow(),
});


export const messageReads = pgTable("message_reads", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  messageId: uuid().references(() => message.id, { onDelete: "cascade" }),
  userId: uuid().references(() => user.id, { onDelete: "cascade" }),
  seenAt: timestamp({ withTimezone: true }).defaultNow(),
});
