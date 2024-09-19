#!/usr/bin/env -S deno --unstable --allow-read --allow-write --allow-net --allow-env --allow-run
export { React, ReactDOM, ReactDOMServer } from "./deps.ts";
export { t, Trans } from "./src/plugins/i18n.tsx";

import Pagic from "./src/Pagic.ts";
export default Pagic;
export * from "./src/Pagic.ts";

if (import.meta.main) {
  await import("./cli.ts");
}
