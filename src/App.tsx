// import "./i18n";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import { isDarkModeBrowserCookieCheck } from "./utils/cookieUtils";
import { Helmet } from "react-helmet";
import { assets } from "./images";
import { HOME_URL, WHITEPAPER_URL } from "./constants";

interface ApplicationContextInterface {
    isDarkMode: boolean;
}

export const ApplicationContext = createContext<ApplicationContextInterface>({
    isDarkMode: false,
});

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        isDarkModeBrowserCookieCheck(),
    );
    // const { i18n, t } = useTranslation();

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("cryptorollDarkModeBg");
            document.body.classList.remove("cryptorollWhiteBg");
        } else {
            document.body.classList.add("cryptorollWhiteBg");
            document.body.classList.remove("cryptorollDarkModeBg");
        }

        // i18n.changeLanguage(getLanguageCookie());
    }, [isDarkMode]);

    return (
        <ApplicationContext.Provider value={{ isDarkMode }}>
            <Helmet>
                <meta name="description" />
                <link
                    rel="icon"
                    type="image/png"
                    href={
                        isDarkMode
                            ? assets.icons.favicon.darkMode
                            : assets.icons.favicon.lightMode
                    }
                />
            </Helmet>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={HOME_URL}
                        element={<Home setIsDarkMode={setIsDarkMode} />}
                    />
                    <Route
                        path={WHITEPAPER_URL}
                        element={<Whitepaper setIsDarkMode={setIsDarkMode} />}
                    />
                </Routes>
            </BrowserRouter>
        </ApplicationContext.Provider>
    );
}

export default App;
