import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";

const app = new App();

app.use(logger());
app.use((req, res) => res.send("Hello world!"));

app.listen(3000, () => console.log("Started on http://localhost:3000"));
