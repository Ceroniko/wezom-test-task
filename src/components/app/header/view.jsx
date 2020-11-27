import "./style.scss";
import React from "react";
import { Col, Row, notification } from "antd";
import { Logo } from "../logo";
import { NavBar } from "../navbar";
import { UserMenu } from "../userMenu";
import { ModalForm } from "../modalForm";
import { randomIntegerInRange } from "../../../utils/random";
import { useHistory } from "react-router-dom";

const View = (props) => {
	let history = useHistory();

	if (!props.name && !props.contact.length && props.logined) {
		if (props.error) {
			localStorage.removeItem("auth");
			props.dispatchLogout();
			history.push("/");
			notification.error({
				message: "TypeError: Failed to fetch",
			});
		} else {
			props.dispatchLogin(localStorage.getItem("auth"));
			props.dispatchContacts(randomIntegerInRange(1, 1500));
		}
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
