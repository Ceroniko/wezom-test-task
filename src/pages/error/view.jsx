import "./style.scss";
import React from "react";
import { Button, Result } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const View = (props) => {
	const history = useHistory();

	return (
		<div className={"page page--errorPage"}>
			<Result
				title={<p>404</p>}
				icon={<div></div>}
				subTitle={<p>Requested page not found!</p>}
				extra={
					<Button
						style={{ width: "140px" }}
						type="primary"
						icon={<DoubleLeftOutlined />}
						onClick={() => {
							history.push("/");
						}}
					>
						Back to home
					</Button>
				}
			/>
		</div>
	);
};

export { View };
