import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Hamburger from "../Lib/Hamburger";
import SearchIcon from '@material-ui/icons/Search';
import "./styles.scss";


const navLinks = [
	{
		title: "Home",
		path: "/",
		id: 1
	}, {
		title: "Blog",
		path: "/blog",
		id: 2
	}, {
		title: "About",
		path: "/about",
		id: 3
	}, {
		title: "Hire",
		path: "/hire",
		id: 4
	},
];

function Navbar({user}) {

	const [search, setSearch] = useState(false);
	const openSearch = () => setSearch(!search);
	const [menuActive, setMenuActive] = useState(false);

	const submitSearch = (e) => {
		e.preventDefault();
		alert("Search")
	};
	const searchClass = search ? "searchInput active" : "searchInput";
	console.log("## menuactive", menuActive);
	return (
		<nav className={"navbar"}>
			<span className={"navTitle"}>BlogLand</span>
			{/*TODO add an event that if you press out of the menu the menu toggles back*/}
			<div className={`navbarMenuContainer ${menuActive && "active"}`}>
				<ul className={"navbarMenu"}>
					{navLinks.map((link) => (

						<NavLink
							onClick={() => setMenuActive(false)}
							key={link.id}
							className="nav__link"
							activeStyle={{fontWeight: "bold"}}
							to={link.path}>
							{link.title}
						</NavLink>

					))}
				</ul>
				<span className={"avatarContainer"}>
					<div className={"avatar"}/>
					<span className={"avatarName"}>{`${user.firstName} ${user.lastName}`}</span>
				</span>
			</div>
			<Hamburger
				menuActive={menuActive}
				onClick={() => setMenuActive(!menuActive)}
			/>
			{/*<div className={"search"}>*/}
			{/*	<form onSubmit={submitSearch}>*/}
			{/*		<input className={searchClass} type={"text"} placeholder={"Search"}/>*/}
			{/*		<SearchIcon onClick={openSearch} className={"searchIcon"}/>*/}
			{/*	</form>*/}
			{/*</div>*/}
		</nav>
	);
}

export default Navbar;
