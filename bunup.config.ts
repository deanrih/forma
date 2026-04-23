/** biome-ignore-all lint/style/noDefaultExport: build config */
import { defineConfig } from "bunup";

export default defineConfig({
	// weird behaviour  when doing export { ... } vs export *
	// export { ... } from "..." works with ./src/**/*.ts but not ./src/*.ts
	entry: [
		"./src/**/*.ts",
		// "./src/*.ts",
	],
	// compile: true,// executable compile https://bunup.dev/docs/advanced/compile.html
	minify: true,
	target: "bun",
	format: "esm",
	outDir: "./dst",
	// splitting: true, //nodeProtocol
	// exports: true,
	// noExternal: []
	silent: true,
	unused: {
		level: "error",
	},
});
