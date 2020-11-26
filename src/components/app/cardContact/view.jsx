import "./style.scss";
import React from "react";
import { Typography, Divider, Tag, Card } from "antd";
import { NATIONALITIES } from "../../../constants/nationalities";
import { NavLink } from "react-router-dom";

const { Paragraph, Text } = Typography;

const View = (props) => {
	return (
		<Card
			key={props.user.id.value}
			hoverable
			cover={
				<NavLink to={`contacts/${props.id}`}>
					<img
						alt={props.user.picture.large}
						src={props.user.picture.large}
					/>
				</NavLink>
			}
		>
			<Card.Meta
				title={
					<NavLink to={`contacts/${props.id}`}>
						<span>{`${props.user.name.title}. ${props.user.name.first} ${props.user.name.last} `}</span>
						<Text type="secondary">
							<small>{`(${props.user.dob.age} years)`}</small>
						</Text>
						<Divider />
					</NavLink>
				}
				description={
					<div>
						<Paragraph
							className={"copyable"}
							copyable={{
								text: props.user.email,
							}}
						>
							<a href={`mailto:${props.user.email}`}>
								{props.user.email}
							</a>
						</Paragraph>
						<Paragraph
							className={"copyable"}
							copyable={{
								text: props.user.phone,
							}}
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
							<span>
								<span>{`/${props.user.location.country}/`}</span>
								<br />
								<span>{`${props.user.location.street.number} ${props.user.location.street.name}, ${props.user.location.city}, ${props.user.location.state} ${props.user.location.postcode}`}</span>
							</span>
						</Paragraph>
						<Divider />
						<Tag color={NATIONALITIES[props.user.nat].color}>
							{props.user.location.country}
						</Tag>
					</div>
				}
			/>
		</Card>
	);
};

export { View };
