import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<header className="Header">
				<img src={logo} className="Header-logo" alt="logo" />
				<h1 className="Header-title">Welcome to React</h1>
				<ul className="Header-menu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/article/1">Article #1</Link>
					</li>
					<li>
						<Link to="/article/2">Article #2</Link>
					</li>
					<li>
						<Link to="/page">Page</Link>
					</li>
				</ul>
			</header>
		);
	}
}

export default Header;
