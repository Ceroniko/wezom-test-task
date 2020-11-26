import React from "react";
import { Form, Button, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Field } from "redux-form";
import { EmailField } from "../emailField";
import { PassField } from "../passField";

const View = (props) => {
	return (
		<Form onFinish={props.onFinish}>
			<Field name="email" component={EmailField} />
			<Field name="password" component={PassField} />
			<Form.Item>
				<Row>
					<Col span={18}>
						<Button
							style={{ width: "100%" }}
							type="primary"
							htmlType="submit"
						>
							Sign In
						</Button>
					</Col>
					<Col span={6}>
						<Button
							type="text"
							htmlType="button"
							danger={true}
							style={{ width: "100%" }}
							icon={<CloseOutlined />}
							onClick={props.handleCancel}
						>
							Cancel
						</Button>
					</Col>
				</Row>
			</Form.Item>
		</Form>
	);
};

export { View };
