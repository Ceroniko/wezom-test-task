import "./style.scss";
import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const View = ({ input }) => {
	return (
		<Form.Item
			name="password"
			rules={[
				{
					required: true,
					message: "The password field is required.",
				},
				{
					min: 8,
					message: "The password must be at least 8 characters.",
				},
				{
					pattern: /^([a-z][A-Z]+)$/i,
					message: "The password format is invalid.",
				},
			]}
			help="Type any valid password"
			hasFeedback
		>
			<Input.Password
				{...input}
				prefix={<LockOutlined />}
				type="password"
				placeholder="Password"
			/>
		</Form.Item>
	);
};

export { View };
