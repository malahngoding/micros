"use strict";

// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();
import app from "./server.mjs";

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
