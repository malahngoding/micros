import { serve } from "@honojs/node-server";
import app from "./config/boot";
import { microsPort } from "./config/environments";

serve({
  fetch: app.fetch,
  port: microsPort,
});
