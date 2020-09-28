import React, { useState } from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

async function loadMessages(language) {
	return await import(`@lingui/loader!./locales/${language}/messages.json`);
}

function LocalizedApp() {
	const [catalogs, setCatalogs] = useState({});
	const [language, setLanguage] = useState("en");

	async function handleLanguageChange(language) {
		const newCatalog = await loadMessages(language);

		const newCatalogs = { ...catalogs, [language]: newCatalog };

		setCatalogs(newCatalogs);
		setLanguage(language);
	}

	return (
		<BrowserRouter>
			<I18nProvider language={language} catalogs={catalogs}>
				<App
					language={language}
					onLanguageChange={handleLanguageChange}
				/>
			</I18nProvider>
		</BrowserRouter>
	);
}

ReactDOM.render(<LocalizedApp />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter } from "react-router-dom";

// import catalogFR from "./locales/fr/messages.js";
// import catalogES from './locales/es/messages.js';

// import { I18nProvider } from "@lingui/react";

// const catalogs = { fr: catalogFR, es: catalogES };

// ReactDOM.render(
// 	<BrowserRouter>
//    <I18nProvider language="fr" catalogs={catalogs}>
// 			<App />
// 		</I18nProvider>
// 	</BrowserRouter>,
// 	document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
