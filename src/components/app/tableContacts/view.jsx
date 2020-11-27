import "./style.scss";
import React, { useState, useEffect } from "react";
import { Table, Avatar, Typography, Tag, Form } from "antd";
import { SearchForm } from "../searchForm";
import { Statistics } from "../statistics";
import { NATIONALITIES } from "../../../constants/nationalities";
import { GENDER } from "../../../constants/gender";
import { NavLink } from "react-router-dom";

const { Paragraph } = Typography;

let array;

const columns = [
	{
		align: "center",
		title: "Avatar",
		dataIndex: "picture",
		fixed: "left",
		key: "avatar",
		width: 80,
		render: (picture, record) => {
			return (
				<NavLink to={`contacts/${array.indexOf(record)}`}>
					<Avatar
						key={record.id.value}
						src={picture.thumbnail}
						size="small"
					/>
				</NavLink>
			);
		},
	},
	{
		title: "Full name",
		dataIndex: "name",
		key: "fullname",
		render: (name, record) => {
			return (
				<NavLink to={`contacts/${array.indexOf(record)}`}>
					<span key={record.id.value}>
						{`${name.title}. ${name.first} ${name.last} `}
					</span>
				</NavLink>
			);
		},
		sorter: (a, b) => {
			let firstPerson = `${a.name.title}. ${a.name.first} ${a.name.last}`.toLowerCase();
			let secondPerson = `${b.name.title}. ${b.name.first} ${b.name.last}`.toLowerCase();
			if (firstPerson < secondPerson) return -1;
			if (firstPerson > secondPerson) return 1;
			return 0;
		},
	},
	{
		title: "Birtday",
		dataIndex: "dob",
		key: "birthday",
		width: 250,
		render: (dob, record) => {
			return (
				<div key={record.id.value}>
					<span>
						{new Date(Date.parse(dob.date)).toLocaleString(
							"en-US",
							{
								weekday: "long",
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
								second: "2-digit",
							}
						)}
					</span>
					<br />
					<span>{`${dob.age} years`}</span>
				</div>
			);
		},
	},
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
		render: (email, record) => {
			return (
				<Paragraph
					key={record.id.value}
					className={"copyable"}
					copyable={{ text: email }}
				>
					<Paragraph ellipsis>
						<a href={`mailto:${email}`}>{email}</a>{" "}
					</Paragraph>
				</Paragraph>
			);
		},
	},
	{
		title: "Phone",
		dataIndex: "phone",
		key: "phone",
		width: "auto",
		render: (phone, record) => {
			return (
				<Paragraph
					key={record.id.value}
					className={"copyable"}
					copyable={{ text: phone }}
				>
					<a href={`tel:${phone}`}>{phone}</a>
				</Paragraph>
			);
		},
	},
	{
		title: "Location",
		dataIndex: "location",
		key: "location",
		width: 250,
		render: (location, record) => {
			return (
				<Paragraph
					key={record.id.value}
					className={"copyable"}
					copyable={{
						text: `[${location.country}] ${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`,
					}}
				>
					<span>
						<span>{`/${location.country}/`}</span>
						<br />
						<span>{`${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`}</span>
					</span>
				</Paragraph>
			);
		},
	},
	{
		title: "Nationality",
		dataIndex: "nat",
		key: "nationality",
		align: "right",
		render: (nat, record) => {
			return (
				<Tag key={record.id.value} color={NATIONALITIES[nat].color}>
					{NATIONALITIES[nat].name}
				</Tag>
			);
		},
	},
];

const sumStatistic = (data) => {
	let countNat = {};
	let countGender = {};
	for (let key in NATIONALITIES) {
		countNat[key] = 0;
	}

	for (let key in GENDER) {
		countGender[key] = 0;
	}

	data.forEach((contact) => {
		countNat[contact.nat]++;
		countGender[contact.gender]++;
	});

	return { ...countNat, ...countGender, ...{ total: data.length } };
};

const View = (props) => {
	const [form] = Form.useForm();
	const [fullName, setFulname] = useState();
	const [gender, setGender] = useState();
	const [nat, setNat] = useState();
	const [creator, setCreator] = useState(false);
	const [data, setData] = useState(props.dataSource);
	const [stat, setStat] = useState(sumStatistic(props.dataSource));

	array = props.dataSource;

	const onFormChange = () => {
		let values = form.getFieldsValue();
		setFulname(values.fullname);
		setGender(values.gender);
		if (Array.isArray(values.nationalities)) {
			setNat(
				values.nationalities.length === 0
					? undefined
					: values.nationalities
			);
		} else {
			setNat(values.nationalities);
		}

		setCreator(values.creator);
	};

	useEffect(() => {
		onFormChange();
		if (!fullName && !gender && !nat) {
			setData(props.dataSource);
			setStat(sumStatistic(props.dataSource));
		} else {
			let filteredData = props.dataSource.filter((contact) => {
				if (!fullName) {
					return true;
				} else {
					let name = `${contact.name.title}. ${contact.name.first} ${contact.name.last} `.toLowerCase();
					if (name.indexOf(fullName.toLowerCase()) !== -1) {
						return true;
					}
				}
				return false;
			});
			filteredData = filteredData.filter((contact) => {
				if (!gender) {
					return true;
				} else {
					if (contact.gender === gender) {
						return true;
					}
				}
				return false;
			});
			filteredData = filteredData.filter((contact) => {
				if (!nat) {
					return true;
				} else {
					if (nat.includes(contact.nat)) {
						return true;
					}
				}
				return false;
			});

			setStat(sumStatistic(filteredData));
			setData(filteredData);
		}
	}, [props.fetching, fullName, gender, nat]);

	return (
		<Table
			columns={columns}
			dataSource={data}
			loading={props.fetching}
			pagination={{
				onChange: (page, size) => {
					props.dispatchPage(page, size);
				},
				current: props.current,
				pageSize: props.pageSize,
				size: "small",
			}}
			size="small"
			scroll={{
				x: 1200,
			}}
			title={() => {
				return <SearchForm form={form} onFormChange={onFormChange} />;
			}}
			footer={() => {
				return <Statistics data={stat} />;
			}}
		/>
	);
};

export { View };
