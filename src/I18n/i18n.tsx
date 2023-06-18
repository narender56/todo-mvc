import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.json";

declare module "i18next" {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

export default function initTranslation() {
    use(initReactI18next)
        .init({
            returnNull: false,
            resources: {
                en,
            },
            lng: "en",
            fallbackLng: "en",
            debug: true,
            supportedLngs: ["en"],
            interpolation: {
                escapeValue: false,
            },
            detection: {
                order: ["querystring", "localStorage"],
                caches: ["localStorage"],
            },
        });
}
