export const t = (lang, data) => {
    const result = {};
    for (const key in data) {
        result[key] = data[key][lang] || data[key]["en"];
    }
    return result;
};

export const local = url => {
    const langs = ["en", "zh-Hant", "zh-Hans"];
    return langs.find(lang => url.toString().startsWith(`/${lang}`)) || "en";
};

export const l = url => {
    const currentLocale = local(url.pathname);
    return (path, lang = "") => {
        const base = lang || currentLocale;
        if (!path) path = url.pathname.replace(`${currentLocale}/`, "");
        console.log(`l: ${base} and ${path}`);
        return `/${base}${path}`;
    };
};
