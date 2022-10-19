import { Hono } from "hono";
import { getHome, postHome } from "../modules/home.handler";

const home = new Hono();
/*
Home API Handler
--> /api/home

 */
home.get("/", (c) => getHome(c));
home.post("/", (c) => postHome(c));

export default home;
