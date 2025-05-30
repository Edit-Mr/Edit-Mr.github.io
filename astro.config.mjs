// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
    site: "https://elvismao.com",
    base: "",
    output: "static",
    trailingSlash: "never"
    //   integrations: [
    //     i18n({
    //       locales: { zh: "zh-Hant", en: "en-US" },
    //       defaultLocale: "zh",
    //       redirectDefaultLocale: true,
    //     }),
    //     astroIcon(),
    //   ],
});
