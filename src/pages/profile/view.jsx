import "./style.scss";
import React from "react";
import { PageHeader, Typography } from "antd";
import { Profile } from "components";

const View = (props) => {
	return (
		<div className={"page page--profile"}>
			<PageHeader
				className={"centered"}
				onBack={false}
				title={<Typography.Title level={1}>Profile</Typography.Title>}
			/>
			<Profile user={props.user} fetching={props.fetching} />
		</div>
	);
};

export { View };
