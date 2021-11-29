"use strict";
import app from "../server.mjs";

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
