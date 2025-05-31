import { getLocale } from "astro-i18n-aut";

export const T = (url, data) => {
    const result = {};
    const lang = getLocale(url);
    for (const key in data) {
        result[key] = data[key][lang] || data[key]["zh-Hant"];
    }
    return result;
};

export const L = url => {
    const currentLocale = extractLocale(url);

    return (path, reverseLocale = false) => {
        const basePath = (currentLocale === "en") !== reverseLocale ? "/2025/en" : "/2025";

        if (path.startsWith("#") || path.startsWith("/#")) {
            // 是純錨點，直接接上去
            return basePath + path.replace(/^\//, "");
        }

        return posix.join(basePath, path).replace(/\/+$/, "");
    };
};

export const local = url => getLocale(url);
