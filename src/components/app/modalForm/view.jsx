import "./style.scss";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Form } from "../form";
import { useHistory } from "react-router-dom";
import { randomIntegerInRange } from "../../../utils/random";

const View = (props) => {
	let history = useHistory();

	const [visible, setVisible] = useState(false);

	const showModal = () => {
		setVisible(true);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	const onFinish = () => {
		setVisible(false);
		props.dispatchLogin(props.email.values.email);
		props.dispatchContacts(randomIntegerInRange(1, 1500));
		localStorage.setItem("auth", props.email.values.email);
		setTimeout(() => {
			history.push("/profile");
		}, 500);
	};

	return (
		<div className={"modal"}>
			<Button
				type={"link"}
				htmlType={"button"}
				icon={<LoginOutlined />}
				loading={props.fetching}
				onClick={showModal}
			>
				Sign In
			</Button>
			<Modal
				title="Sign In"
				visible={visible}
				centered
				footer={null}
				onCancel={handleCancel}
				closable={false}
			>
				<Form handleCancel={handleCancel} onFinish={onFinish} />
			</Modal>
		</div>
	);
};

export { View };
