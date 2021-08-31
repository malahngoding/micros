import { app } from './app';
import { watchDog } from './utils/dog';

const start = () => {
  app.listen(4000, (err: Error, address: string) => {
    if (err) {
      watchDog.error(err);
      process.exit(1);
    }
    watchDog.info(`Server started at ${address}`);
  });
};

start();
