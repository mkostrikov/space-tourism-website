import { defineConfig } from "vite";
import { join, dirname } from "path";

export default defineConfig({
  base: "/space-tourism-website",
  build: {
    rollupOptions: {
      input: {
        home: join(dirname("."), "index.html"),
        destination: join(dirname("."), "pages", "destination", "index.html"),
        crew: join(dirname("."), "pages", "crew", "index.html"),
        technology: join(dirname("."), "pages", "technology", "index.html"),
      },
    },
  },
});
