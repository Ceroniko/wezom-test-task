import "./style.scss";
import React from "react";
import { Col, Row, Typography, Spin, Divider, Tag } from "antd";
import { NATIONALITIES } from "../../../constants/nationalities";

const { Paragraph, Title, Text } = Typography;

const View = (props) => {
	return (
		<div className={"profile"}>
			{props.fetching ? (
				<Spin />
			) : (
				<Row gutter={[16, 16]} justify="center">
					<Col>
						<img
							width={"260px"}
							alt={props.user.picture.large}
							src={props.user.picture.large}
						/>
					</Col>
					<Col>
						<Title level={3}>
							<span>{`${props.user.name.title}. ${props.user.name.first} ${props.user.name.last} `}</span>
							<Text type="secondary">
								<small>{`(${props.user.dob.age} years)`}</small>
							</Text>
						</Title>
						<Divider dashed style={{ margin: "12px 0" }} />
						<Paragraph
							className={"copyable"}
							copyable={{ text: props.user.email }}
						>
							<a href={`mailto:${props.user.email}`}>
								{props.user.email}
							</a>
						</Paragraph>
						<Paragraph
							className={"copyable"}
							copyable={{ text: props.user.phone }}
						>
							<a href={`tel:${props.user.phone}`}>
								{props.user.phone}
							</a>
						</Paragraph>
						<Paragraph
							className={"copyable"}
							copyable={{
								text: `[${props.user.location.country}] ${props.user.location.street.number} ${props.user.location.street.name}, ${props.user.location.city}, ${props.user.location.state} ${props.user.location.postcode}`,
							}}
						>
							<span className={"addr"}>
								<span>{`/${props.user.location.country}/`}</span>
								<br />
								<span>{`${props.user.location.street.number} ${props.user.location.street.name}, ${props.user.location.city}, ${props.user.location.state} ${props.user.location.postcode}`}</span>
							</span>
						</Paragraph>
						<Divider dashed style={{ margin: "12px 0" }} />
						<Tag color={NATIONALITIES[props.user.nat].color}>
							{props.user.location.country}
						</Tag>
					</Col>
				</Row>
			)}
		</div>
	);
};

export { View };
