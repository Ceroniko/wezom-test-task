import "./style.scss";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "routes";

const View = (props) => {
	const navbarRoutes = useMemo(() => [{ name: "Home", key: "home" }], []);

	if (props.logined) navbarRoutes.push({ name: "Contacts", key: "contacts" });

	return (
		<div className={"navbar"}>
			<ul className={"navbar__list"}>
				{navbarRoutes.map((route) => (
					<li key={route.key} className={"navbar__item"}>
						<NavLink
							to={routes[route.key].link()}
							className={"navbar__link"}
						>
							{route.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export { View };
