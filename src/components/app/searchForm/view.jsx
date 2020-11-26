import "./style.scss";
import React from "react";
import { Form, Input, Select, Checkbox, Button, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { GENDER } from "../../../constants/gender";
import { NATIONALITIES } from "../../../constants/nationalities";

const View = (props) => {
	return (
		<Form
			form={props.form}
			onValuesChange={(changedValues, allValues) => {
				props.dispatchPage(
					allValues.fullname,
					allValues.gender,
					allValues.nationalities,
					allValues.creator
				);
				props.onFormChange();
			}}
			initialValues={{
				fullname: props.fullname,
				gender: props.gender,
				nationalities: props.nat,
				creator: props.creator,
			}}
			layout="horizontal"
			style={{
				background: "white",
			}}
		>
			<Row align="middle" justify="center">
				<Col className={"flex-grow"}>
					<Row align="middle" justify="center">
						<Col
							xs={24}
							lg={11}
							style={{
								padding: "6px",
							}}
						>
							<Form.Item name="fullname">
								<Input.Search
									allowClear
									placeholder="Search by full name"
								/>
							</Form.Item>
						</Col>
						<Col
							xs={24}
							sm={10}
							lg={4}
							style={{
								padding: "6px",
							}}
						>
							<Form.Item name="gender">
								<Select placeholder="Gender" allowClear>
									{Object.keys(GENDER).map((a) => (
										<Select.Option
											key={a}
											value={GENDER[a]}
										>
											{GENDER[a][0].toUpperCase() +
												GENDER[a].slice(1)}
										</Select.Option>
									))}
								</Select>
							</Form.Item>
						</Col>
						<Col
							xs={24}
							sm={14}
							lg={5}
							style={{
								padding: "6px",
							}}
						>
							<Form.Item name="nationalities">
								<Select
									mode="multiple"
									allowClear
									placeholder="Nationality"
									maxTagCount={2}
								>
									{Object.keys(NATIONALITIES)
										.sort((a, b) =>
											NATIONALITIES[a].name >
											NATIONALITIES[b].name
												? 1
												: -1
										)
										.map((a) => (
											<Select.Option key={a} value={a}>
												{NATIONALITIES[a].name}
											</Select.Option>
										))}
								</Select>
							</Form.Item>
						</Col>
						<Col
							xs={24}
							sm={6}
							lg={4}
							style={{
								padding: "6px",
							}}
						>
							<Form.Item name="creator" valuePropName="checked">
								<Checkbox>I am creator</Checkbox>
							</Form.Item>
						</Col>
					</Row>
				</Col>
				<Col
					className={"flex-shirk"}
					style={{
						padding: "6px",
					}}
				>
					<Button
						type="text"
						style={{ color: "#1890ff" }}
						htmlType="button"
						icon={<CloseOutlined />}
						onClick={() => {
							props.dispatchDeletePage();
							props.form.setFields([
								{
									name: "fullname",
									value: "",
								},

								{
									name: "gender",
									value: undefined,
								},

								{
									name: "nationalities",
									value: undefined,
								},

								{
									name: "creator",
									value: false,
								},
							]);
							props.onFormChange();
						}}
					>
						Clear
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export { View };
