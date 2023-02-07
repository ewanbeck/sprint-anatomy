import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "src/assets/sprint_anatomy_favicon.svg",
      favicons: {
        appName: "Anatomy of a sprint",
        appShortName: "Sprint Anatomy",
        appDescription:
          "A tiny react UI demo showing how a 2 week development sprint might look.",
        developerName: "Ewan Beckett",
        developerURL: "https://github.com/ewanbeck"
      },
    }),
  ],
  base: "/sprint-anatomy/",
});
