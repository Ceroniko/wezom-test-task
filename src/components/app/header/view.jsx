import "./style.scss";
import React from "react";
import { Col, Row } from "antd";
import { Logo } from "../logo";
import { NavBar } from "../navbar";
import { UserMenu } from "../userMenu";
import { ModalForm } from "../modalForm";
import { randomIntegerInRange } from "../../../utils/random";

const View = (props) => {
	if (!props.name && !props.contact && props.logined) {
		props.dispatchLogin(localStorage.getItem("auth"));
		props.dispatchContacts(randomIntegerInRange(1, 1500));
	}

	return (
		<div className={"header"}>
			<Row type={"flex"} gutter={36} align={"middle"}>
				<Col>
					<Logo />
				</Col>
				<Col className={"_flex-grow"}>
					<Row type={"flex"} gutter={16} align={"middle"}>
						<Col className={"_flex-grow"}>
							<NavBar />
						</Col>
						<Col>
							{props.logined ? <UserMenu /> : <ModalForm />}
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export { View };
