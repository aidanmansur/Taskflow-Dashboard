import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/Taskflow-Dashboard/",

    plugins: [
        tailwindcss()
    ]
});