import "./style.scss";
import React from "react";
import { PageHeader, Typography, Button } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Profile } from "components";
import { useParams, useHistory } from "react-router-dom";

const View = (props) => {
	const param = useParams();
	const history = useHistory();

	return (
		<div className={"page page--contactProfile"}>
			<PageHeader onBack={false}>
				<Typography.Title level={1}>Contact View</Typography.Title>
			</PageHeader>
			<Profile
				user={props.user[+param.contactId]}
				fetching={props.fetching}
			/>
			<Button
				style={{ width: "100px" }}
				type="primary"
				icon={<DoubleLeftOutlined />}
				onClick={() => {
					history.goBack();
				}}
			>
				Back
			</Button>
		</div>
	);
};

export { View };
