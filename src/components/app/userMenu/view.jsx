import "./style.scss";
import React from "react";
import { Menu, Avatar, Spin, notification, Row, Col } from "antd";
import { UserOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const View = (props) => {
	const history = useHistory();
	return props.fetching ? (
		<Spin />
	) : (
		<Menu mode="horizontal" selectable className={"dropdown"}>
			<Menu.SubMenu
				className={"dropdown"}
				mode="horizontal"
				title={
					<Row align="middle">
						<Col className="user-menu_title">
							<span>
								{"Hello! " +
									props.userName.title +
									". " +
									props.userName.first +
									" " +
									props.userName.last +
									" "}
							</span>
							<DownOutlined />
						</Col>
						<Col>
							<Avatar src={props.avatar.thumbnail} size="large" />
						</Col>
					</Row>
				}
			>
				<Menu.Item icon={<UserOutlined />}>
					<NavLink to="/profile">Profile</NavLink>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item
					icon={<LogoutOutlined />}
					onClick={() => {
						localStorage.removeItem("auth");
						props.dispatchLogout();
						history.push("/");
						notification.success({
							message: "Successfully logged out",
						});
					}}
				>
					Logout
				</Menu.Item>
			</Menu.SubMenu>
		</Menu>
	);
};

export { View };
