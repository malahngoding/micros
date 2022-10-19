import { Hono } from "hono";
import auth from "./auth";
import home from "./home";

const mainRouter = new Hono();
/*
Router

 */
mainRouter.route("/auth", auth);
mainRouter.route("/home", home);
export default mainRouter;
