import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const emailSchema = insertSubscriberSchema.extend({
        email: z.string().email("Please enter a valid email address"),
      });
      
      const result = emailSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error.errors[0].message });
      }

      const existingSubscriber = await storage.getSubscriberByEmail(result.data.email);
      if (existingSubscriber) {
        return res.status(400).json({ error: "This email is already subscribed" });
      }

      const subscriber = await storage.createSubscriber(result.data);
      return res.status(201).json({ message: "Successfully subscribed!", subscriber });
    } catch (error) {
      console.error("Subscribe error:", error);
      return res.status(500).json({ error: "Failed to subscribe. Please try again." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
