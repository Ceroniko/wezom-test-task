import React from "react";
import { Switch, Route } from "react-router-dom";
import { LayoutBase } from "layouts";
import { routes } from "../tree";
import { PageError } from "../../pages";

const View = React.memo((props) => {
	return (
		<Switch>
			{Object.keys(routes).map((key) => {
				const { page: Page, ...route } = routes[key];
				return (
					<Route
						key={route.path}
						{...route}
						render={(matchProps) => (
							<LayoutBase>
								{route.path === "/" ||
								(route.private && props.logined) ? (
									<Page {...matchProps} />
								) : (
									<PageError />
								)}
							</LayoutBase>
						)}
					/>
				);
			})}
		</Switch>
	);
});

export { View };
