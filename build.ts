import { builtinModules } from "node:module";

import { build } from "rolldown"

await build({
  input: "src/index.ts",
  platform: "node",
  external: [
    ...builtinModules,
    ...builtinModules.map((m) => `node:${m}`),
  ]
})
