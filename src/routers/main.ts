import { Hono } from "hono";
import home from "./home";

const mainRouter = new Hono();
/*
Router

 */
mainRouter.route("/home", home);

export default mainRouter;
