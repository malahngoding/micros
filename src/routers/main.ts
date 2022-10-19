import { Hono } from "hono";
import { pingBack } from "../modules/etc.handler";
import auth from "./auth";
import home from "./home";

const mainRouter = new Hono();
/*
Router

 */
mainRouter.get("ping", (c) => pingBack(c));
mainRouter.route("/auth", auth);
mainRouter.route("/home", home);
export default mainRouter;
