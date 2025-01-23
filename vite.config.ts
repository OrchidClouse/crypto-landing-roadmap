import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "cryptorollLandingPage",
            filename: "remoteEntry.js",
            exposes: {
                "./HomeLanding": "./src/components/Home.tsx",
                "./WhitepaperLanding": "./src/components/Whitepaper.tsx",
            },
            shared: ["react", "react-router-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
