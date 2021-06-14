import React, { useState } from 'react';
import SignUpModalUI from './SignUpModal.presenter';

const SignUpModal = () => {
	//* 회원가입 기수 & 포지션 모달 상태
	const [signUpNumberOpen, setSignUpNumberOpen] = useState(false);
	const [signUpPositionOpen, setSignUpPositionOpen] = useState(false);

	//* 인풋 데이터 상태
	const [inputData, setInputData] = useState({
		position: '',
		number: '',
		name: '',
	});

	//* 회원가입 기수 & 포지션 모달 오픈 함수
	const handleNumberOpen = () => {
		setSignUpNumberOpen((prev) => !prev);
	};
	const handlePositionOpen = () => {
		setSignUpPositionOpen((prev) => !prev);
	};

	//* 인풋 데이터 관리 함수
	const handleInputData = (
		e:
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| React.ChangeEvent<HTMLInputElement>,
	) => {
		let newInputData = {
			...inputData,
			[e.target.name]: e.target.id,
		};
		setInputData(newInputData);
	};
	return (
		<SignUpModalUI
			handleNumberOpen={handleNumberOpen}
			handlePositionOpen={handlePositionOpen}
			signUpNumberOpen={signUpNumberOpen}
			signUpPositionOpen={signUpPositionOpen}
			handleInputData={handleInputData}
			inputData={inputData}
		/>
	);
};

export default SignUpModal;
