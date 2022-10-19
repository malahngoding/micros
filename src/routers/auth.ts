import { Hono } from "hono";
import { generateToken } from "../modules/auth.handler";

const auth = new Hono();
/*
auth API Handler
--> /api/auth

 */
auth.post("/token", (c) => generateToken(c));

export default auth;
