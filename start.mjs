import server from "./server.mjs";
import { config } from "./config.mjs";
import consola from "./utils/debug.mjs";

const start = () => {
  server.listen(
    { port: config.microsPort || 8080, host: "0.0.0.0" },
    (err, address) => {
      if (err) {
        consola.error(err);
        process.exit(1);
      }
      consola.success(`Server started at ${address}`);
    }
  );
};

start();
