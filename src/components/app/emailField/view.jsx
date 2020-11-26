import "./style.scss";
import React from "react";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const View = ({ input, form }) => {
	return (
		<Form.Item
			name="Email"
			required
			help={"Type any valid email"}
			rules={[
				{
					required: true,
					message: "The email field is required.",
				},
				{
					type: "email",
					message: "The email format is invalid.",
				},
			]}
			hasFeedback
		>
			<Input {...input} prefix={<UserOutlined />} placeholder="Email" />
		</Form.Item>
	);
};

export { View };
