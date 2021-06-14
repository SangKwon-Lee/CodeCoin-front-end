import React, { useState } from 'react';
import LoginModalUI from './LoginModal.presenter';

const LoginModal = () => {
	//* 회원관리 모달 오픈 상태
	const [signUpOpen, setSignUpOpen] = useState(false);

	//* 로그인 인풋 데이터 저장
	const [loginInput, setLoginInput] = useState({
		id: '',
		password: '',
	});

	//* 회원관리 모달 오픈 함수
	const handleSignUpOpen = () => {
		setSignUpOpen((prev) => !prev);
	};

	//* 로그인 인풋 데이터 관리 함수
	const handleChangeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newLoginInput = {
			...loginInput,
			[e.target.name]: e.target.value,
		};
		setLoginInput(newLoginInput);
	};

	return (
		<LoginModalUI
			handleSignUpOpen={handleSignUpOpen}
			signUpOpen={signUpOpen}
			handleChangeLoginInput={handleChangeLoginInput}
		/>
	);
};

export default LoginModal;
