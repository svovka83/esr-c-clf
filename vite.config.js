import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		nunjucks(),
		ViteImageOptimizer({
			png: {
				quality: 40,
			},
			jpg: {
				quality: 40,
			},
		}),
	],

	base: "/",

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
		},
	},
});

// const base = import.meta.env.BASE_URL;
