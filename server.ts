import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const PORT = 3001;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("listening on port " + PORT);
await app.listen({ port: PORT });
