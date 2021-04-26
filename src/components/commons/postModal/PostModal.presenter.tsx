import React, { useState } from "react";
import { Modal, Button } from "antd";

const PostModalPresenter = () => {
	const [isModalVisible, setIsModalVisible] = useState(true);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			{/* <Button type="primary" onClick={showModal}>
				Open Modal
			</Button> */}
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				style={{ zIndex: 10 }}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default PostModalPresenter;
