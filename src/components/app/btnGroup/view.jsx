import "./style.scss";
import React, { useState } from "react";
import { Button, Tooltip, Row, Col } from "antd";
import {
	ReloadOutlined,
	UnorderedListOutlined,
	AppstoreOutlined,
} from "@ant-design/icons";

const View = (props) => {
	const view = localStorage.getItem("view")
		? localStorage.getItem("view")
		: "tabular";

	const [tabularType, setTabularType] = useState(
		view === "tabular" ? "primary" : "default"
	);
	const [tiledType, setTiledType] = useState(
		view === "tiled" ? "primary" : "default"
	);

	const [tabularTitle, setTabularTitle] = useState(
		view === "tabular" ? "" : "Tabular view"
	);
	const [tiledTitle, setTiledTitle] = useState(
		view === "tiled" ? "" : "Tiled view"
	);

	const onTiledClick = () => {
		localStorage.setItem("view", "tiled");
		setTiledType("primary");
		setTiledTitle("");
		setTabularType("dafault");
		setTabularTitle("Tabular view");
		props.onChange();
	};
	const onTabularClick = () => {
		localStorage.setItem("view", "tabular");
		setTabularType("primary");
		setTabularTitle("");
		setTiledType("default");
		setTiledTitle("Tiled view");
		props.onChange();
	};

	return (
		<Row gutter={8}>
			<Col>
				<Tooltip title="Update data">
					<Button
						type="dashed"
						shape="circle"
						icon={<ReloadOutlined />}
						loading={props.fetching}
						onClick={() => {
							props.updateData();
						}}
					/>
				</Tooltip>
			</Col>
			<Col>
				<Tooltip title={tiledTitle}>
					<Button
						type={tiledType}
						icon={<AppstoreOutlined />}
						onClick={onTiledClick}
					/>
				</Tooltip>
				<Tooltip title={tabularTitle}>
					<Button
						type={tabularType}
						icon={<UnorderedListOutlined />}
						onClick={onTabularClick}
					/>
				</Tooltip>
			</Col>
		</Row>
	);
};

export { View };
