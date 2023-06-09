// import '@app/common/env';
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/_server.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outDir: "dist",
  minify: true,
});
