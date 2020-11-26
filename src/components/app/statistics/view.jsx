import "./style.scss";
import React from "react";
import { Statistic, Typography, Row, Col, Descriptions } from "antd";
import { NATIONALITIES } from "../../../constants/nationalities";
import { GENDER } from "../../../constants/gender";

const View = (props) => {
	return (
		<div className={"statistic-box"}>
			<Typography.Title level={3}>Statistic</Typography.Title>
			<Row>
				<Col style={{ paddingRight: "12px" }}>
					<Statistic
						title="Collection size"
						value={props.data.total}
					/>
				</Col>
				<Col>
					<Row>
						<Col>
							<Row gutter={8}>
								{Object.keys(GENDER).map((a, i) => {
									return (
										<Col>
											<Statistic
												key={i}
												title={
													GENDER[a] ===
													"indeterminate"
														? GENDER[
																a
														  ][0].toUpperCase() +
														  GENDER[a].slice(1)
														: GENDER[
																a
														  ][0].toUpperCase() +
														  GENDER[a].slice(1) +
														  "s"
												}
												value={props.data[a]}
											/>
										</Col>
									);
								})}
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Typography.Text mark>
								{props.data.male > props.data.female
									? "Men predominate"
									: "Women predominate"}
							</Typography.Text>
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Statistic
						title="Nationalities"
						value={props.data}
						formatter={(value) => (
							<Descriptions
								column={{
									xs: 1,
									sm: 2,
									md: 3,
									lg: 4,
									xl: 6,
									xxl: 8,
								}}
							>
								{Object.keys(NATIONALITIES).map((a, i) => {
									return (
										<Descriptions.Item
											key={i}
											label={NATIONALITIES[a].name}
										>
											{props.data[a] + " contacts"}
										</Descriptions.Item>
									);
								})}
							</Descriptions>
						)}
					/>
				</Col>
			</Row>
		</div>
		// <div>

		// 	{Object.keys(NATIONALITIES).map((a, i) => {
		// 		return (
		// 			<div key={i}>
		// 				<b>{NATIONALITIES[a].name}:</b>
		// 				<span>{props.data[a]}</span>
		// 			</div>
		// 		);
		// 	})}
		// 	{/* {Object.keys(NATIONALITIES).map((a, i) => {
		// 		return (
		// 			<Statistic key={i} title={NATIONALITIES[a].name}>
		// 				{props.data[a]}
		// 			</Statistic>
		// 		);
		// 	})} */}
		// 	{Object.keys(GENDER).map((a, i) => {
		// 		return (
		// 			<Statistic
		// 				key={i}
		// 				title={GENDER[a]}
		// 				value={props.data[a]}
		// 			/>
		// 		);
		// 	})}
		// 	<h1>Total {props.data.total}</h1>
		// </div>
	);
};

export { View };
