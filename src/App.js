import React from "react";
import "./styles/App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Trans } from "@lingui/macro";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

import LanguageSelector from "./LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => (
	<Navbar bg="dark" expand="lg" className="navigationBar">
		<Trans id="navigation">
			<span>
				<NavLink to="/">Home</NavLink>
			</span>

			<span>
				<NavLink to="/about">About</NavLink>
			</span>

			<span>
				<NavLink to="/contact">Contact</NavLink>
			</span>
		</Trans>
	</Navbar>
);

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home}></Route>
		<Route exact path="/about" component={About}></Route>
		<Route exact path="/contact" component={Contact}></Route>
	</Switch>
);

function App({ language, onLanguageChange }) {
	return (
		<div className="App">
			<Trans id="navigation.title">
				<h1 style={{ margin: 26 }}>Playground</h1>
			</Trans>
			<Navigation />
			<header className="App-header">
				<Main />
				<section className="section">
					<LanguageSelector
						language={language}
						onChangeLangage={onLanguageChange}
					/>
				</section>
			</header>
		</div>
	);
}

export default App;
