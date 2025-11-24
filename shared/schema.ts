import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type SeerahEvent = {
  id: string;
  title: string;
  titleArabic?: string;
  date: string;
  year: number;
  period: "pre-prophethood" | "makkah" | "madinah";
  category: "revelation" | "battle" | "treaty" | "migration" | "social-reform" | "companion-story" | "spiritual" | "family";
  location: string;
  description: string;
  significance: "low" | "medium" | "high" | "critical";
  relatedEvents?: string[];
  sealedNectarReference?: string;
};

export type TimelinePeriod = {
  id: string;
  name: string;
  nameArabic: string;
  startYear: number;
  endYear: number;
  color: string;
  description: string;
};
