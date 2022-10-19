import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import mainRouter from "../routers/main";

const app = new Hono();

app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: "*",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
  })
);
app.get("/", (c) => c.text(`-`));
app.route("/api", mainRouter);

export default app;
