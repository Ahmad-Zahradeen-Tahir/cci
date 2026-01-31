import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", (req, res) => {
    res.status(201).json({ message: "Success (Mock)" });
  });
  return httpServer;
}
