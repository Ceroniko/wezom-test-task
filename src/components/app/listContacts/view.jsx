import "./style.scss";
import React, { useState, useEffect } from "react";
import { List, Form, Col } from "antd";
import { SearchForm } from "../searchForm";
import { Statistics } from "../statistics";
import { CardContact } from "../cardContact";
import { NATIONALITIES } from "../../../constants/nationalities";
import { GENDER } from "../../../constants/gender";

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
		<List
			grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 6, gutter: 16 }}
			dataSource={data}
			loading={props.fetching}
			header={
				<div className="search-box">
					<SearchForm form={form} onFormChange={onFormChange} />
				</div>
			}
			renderItem={(item) => {
				return (
					<Col>
						<CardContact user={item} id={data.indexOf(item)} />
					</Col>
				);
			}}
			footer={
				<div className="statistic-box">
					<Statistics data={stat} />
				</div>
			}
			pagination={{
				onChange: (page) => {
					props.dispatchPage(page);
				},
				current: props.current,
				pageSize: 6,
				size: "small",
			}}
		/>
	);
};

export { View };
