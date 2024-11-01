import { defineConfig } from "vite";
import { join, dirname } from "path";

export default defineConfig({
  base: "/space-tourism-website",
  build: {
    rollupOptions: {
      input: {
        home: join(dirname("."), "index.html"),
        destination: join(dirname("."), "destination", "index.html"),
      },
    },
  },
});
