import { pgTable, uuid, text, timestamp, boolean, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";


export const user = pgTable("user", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar({ length: 255 }),
  email: varchar({ length: 255 }).unique(),
  image: text(),
  hashedPassword: text(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow().$onUpdate(() => new Date()),
});


export const folder = pgTable("folder", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  userId: uuid().references(() => user.id, { onDelete: "cascade" }),
  name: varchar({ length: 255 }),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
});


export const chat = pgTable("chat", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  userId: uuid().references(() => user.id, { onDelete: "cascade" }),
  folderId: uuid().references(() => folder.id, { onDelete: "set null" }), // optional
  title: varchar({ length: 255 }),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  lastMessageAt: timestamp({ withTimezone: true }).defaultNow(),
});


export const message = pgTable("message", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  chatId: uuid().references(() => chat.id, { onDelete: "cascade" }),
  sender: varchar({ length: 10 }).$type<"user" | "ai">(),
  body: text(),
  image: text(),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
});


export const messageReads = pgTable("message_reads", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  messageId: uuid().references(() => message.id, { onDelete: "cascade" }),
  userId: uuid().references(() => user.id, { onDelete: "cascade" }),
  seenAt: timestamp({ withTimezone: true }).defaultNow(),
});
