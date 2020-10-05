import React from "react";
import "./styles/App.css";
import { Trans } from "@lingui/macro";
import Main from "./Main.js";
import Navigation from "./Navigation.js";
import LanguageSelector from "./LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";


const App = ({ language, onLanguageChange }) => {
	return (
		<div className="App">
			<Trans id="navigation.title">
				<h1 style={{ margin: 26 }}>Playground</h1>
			</Trans>
			<Navigation />
			<header className="App-header">
				<Main />
				<LanguageSelector
					language={language}
					onChangeLangage={onLanguageChange}
				/>
			</header>
		</div>
	);
};

export default App;
// #2 onlanguagechange from index.js to onchangelanguage. passing handlelanguagechange characteristics.