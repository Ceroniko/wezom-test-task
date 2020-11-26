import "./style.scss";
import React, { useEffect, useState, useRef } from "react";
import { PageHeader, Typography } from "antd";
import { BtnGroup, TableContacts, ListContacts } from "components";

const View = (props) => {
	const [view, setView] = useState(localStorage.getItem("view"));
	const [update, setUpdate] = useState(false);

	const mounted = useRef();
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else if (mounted.current && update) {
			props.updateContacts(props.seed.info.seed, props.seed.info.results);
			setUpdate(false);
		}
	}, [view, update]);

	const changeView = () => {
		setView(localStorage.getItem("view"));
	};

	const updateData = () => {
		setUpdate(true);
	};

	return (
		<div className={"page page--Contact"}>
			<PageHeader
				className={"centered"}
				onBack={false}
				style={{ padding: "0" }}
				title={<Typography.Title level={1}>Contacts</Typography.Title>}
			>
				<BtnGroup onChange={changeView} updateData={updateData} />
			</PageHeader>
			{view === "tiled" ? <ListContacts /> : <TableContacts />}
		</div>
	);
};

export { View };
