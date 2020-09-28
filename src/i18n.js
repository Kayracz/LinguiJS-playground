import { setupI18n } from "@lingui/core";

export const locales = {
	en: "English",
	fr: "Česky",
	es: "Spanish",
};

export const defaultLocale = "en";

function loadCatalog(locale) {
    return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `./locales/${locale}/messages.js`);
  }

  