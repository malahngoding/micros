import { server } from "./server.mjs";
import { config } from "./config.mjs";

const start = () => {
  server.listen(config.microsPort || 8080, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Server started at ${address}`);
  });
};

start();
