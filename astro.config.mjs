// @ts-check
import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "zh-Hant";
const locales = {
    en: "en-US", // the `defaultLocale` value must present in `locales` keys
    "zh-Hant": "zh-Hant",
    "zh-Hans": "zh-Hans"
};

export default defineConfig({
    site: "https://elvismao.com",
    trailingSlash: "always",
    build: {
        format: "directory"
    },
    redirects: {
        "/zh": {
            status: 301,
            destination: "/zh-Hant/"
        }
    },
    integrations: [
        i18n({
            locales,
            defaultLocale
        }),
        sitemap({
            i18n: {
                locales,
                defaultLocale
            },
            filter: filterSitemapByDefaultLocale({ defaultLocale })
        })
    ]
});
