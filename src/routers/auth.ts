import { Hono } from "hono";
import { privateServerAuthenticated } from "../middlewares/auth";
import { generateToken } from "../modules/auth.handler";

const auth = new Hono();
/*
auth API Handler
--> /api/auth

 */
auth.use("/token", (c, next) => privateServerAuthenticated(c, next));
auth.post("/token", (c) => generateToken(c));
export default auth;
