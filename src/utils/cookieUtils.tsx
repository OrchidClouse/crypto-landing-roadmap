// local functions

const setCookie = (name: string, value: string) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 100);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

const getCookie = (requestedCookieName: string) => {
    const cookiesDecoded = document.cookie.split(";");

    for (let i = 0; i < cookiesDecoded.length; i++) {
        let currentCookie = cookiesDecoded[i].trim();
        if (currentCookie.startsWith(requestedCookieName)) {
            return currentCookie.slice(requestedCookieName.length + 1);
        }
    }

    return "";
};

const isDarkModeCookieCheck = () => {
    return getCookie("isDarkMode") === "true";
};

// exports

export const setIsDarkModeCookie = (isDarkMode: boolean) => {
    setCookie("isDarkMode", `${isDarkMode}`);
};

export const isDarkModeBrowserCookieCheck = () => {
    if (getCookie("isDarkMode") === "") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
        return isDarkModeCookieCheck();
    }
};

export const setLanguageCookie = (langCode: string) => {
    setCookie("lang", langCode);
};

export const getLanguageCookie = () => {
    if (getCookie("lang") === "") {
        const userLanguage = navigator.language;

        if (userLanguage.startsWith("ru")) {
            return "ru";
        } else {
            return "en";
        }
    } else {
        return getCookie("lang");
    }
};
