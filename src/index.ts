import { serve } from "@honojs/node-server";
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hono meets Node.js"));

serve({
  fetch: app.fetch,
  port: 4444,
});
