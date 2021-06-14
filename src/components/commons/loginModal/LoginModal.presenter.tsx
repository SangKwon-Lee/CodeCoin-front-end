import { Modal } from '@material-ui/core';
import { url } from 'inspector';
import React, { useState } from 'react';
import { SignUp } from '../layout/header/Header.styles';
import {
	Login,
	LoginOpacity,
	LoginWrapper,
	LoginTitle,
	LoginGoogle,
	LoginHr,
	LoginId,
	LoginPw,
	LoginBtn,
	LoginCheck,
	LoginCheckWrapper,
	LoginCheckImg,
	LoginBottomWrapper,
	FindEmail,
	FindPw,
	HorizonLine,
	SignUpBtn,
	LoginGoogleIcon,
	LoginGoogleWrapper,
	LoginGoogleTitle,
} from './LoginModal.styles';
import SignUpModal from '../signup/SignUpModal.container';
import { ILoginModal } from './LoginModal.types';

const LoginModalUI = ({
	handleSignUpOpen,
	signUpOpen,
	handleChangeLoginInput,
}: ILoginModal) => {
	return (
		<>
			<Login>
				{signUpOpen ? (
					<SignUpModal></SignUpModal>
				) : (
					<>
						<LoginWrapper>
							<LoginTitle>Welcome to codecoin!</LoginTitle>
							<LoginGoogle>
								<LoginGoogleWrapper>
									<LoginGoogleIcon src="/img/googleicon.png"></LoginGoogleIcon>
									<LoginGoogleTitle>구글로 로그인하기</LoginGoogleTitle>
								</LoginGoogleWrapper>
							</LoginGoogle>
							<LoginHr />
							<LoginId
								name="id"
								onChange={handleChangeLoginInput}
								placeholder="ID"
							></LoginId>
							<LoginPw
								name="password"
								onChange={handleChangeLoginInput}
								placeholder="Password"
								type="password"
							></LoginPw>
							<LoginBtn>로그인하기</LoginBtn>
							<LoginCheckWrapper>
								<LoginCheck>
									<LoginCheckImg src="/img/loginCheck.png"></LoginCheckImg>
									로그인 상태 유지
								</LoginCheck>
							</LoginCheckWrapper>
							<LoginHr />
							<LoginBottomWrapper>
								<FindEmail>이메일 찾기</FindEmail>
								<HorizonLine></HorizonLine>
								<FindPw>비밀번호 찾기</FindPw>
								<HorizonLine></HorizonLine>
								<SignUpBtn onClick={handleSignUpOpen}>회원가입</SignUpBtn>
							</LoginBottomWrapper>
						</LoginWrapper>
					</>
				)}
				<LoginOpacity></LoginOpacity>
			</Login>
		</>
	);
};

export default LoginModalUI;
