import { Router } from "https://deno.land/x/oak/mod.ts";

import Root from "./controllers/root.ts";
import Valid from "./controllers/valid.ts";
import Choice from "./controllers/choice.ts";

const router = new Router();

router.get("/", Root);
router.get("/valid", Valid);
router.get("/choice", Choice);

export default router;
