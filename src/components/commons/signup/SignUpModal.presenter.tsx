import React, { useState } from "react";
import { SignUp } from "../layout/header/Header.styles";
import {
	SignUpArrowDown,
	SignUpCehckText,
	SignUpCheckImg,
	SignUpCheckWrapper,
	SignUpContentsWrapper,
	SignUpCreateBtn,
	SignUpHr,
	SignUpModal,
	SignUpModalWrapper,
	SignUpNameBox,
	SignUpNumberBox,
	SignUpPositionBox,
	SignUpTitle,
	SignUpNumberSelectWrapper,
	SignUpNumber1,
	SignUpNumber2,
	SignUpPositionSelectWrapper,
	SignUpMentor,
	SignUpMentee,
} from "./SignUpModal.styles";

const SignUpModalUI = () => {
	const [signUpNumberOpen, setSignUpNumberOpen] = useState(false);
	const [signUpPositionOpen, setSignUpPositionOpen] = useState(false);

	const handleNumberOpen = () => {
		setSignUpNumberOpen((prev) => !prev);
	};

	const handlePositionOpen = () => {
		setSignUpPositionOpen((prev) => !prev);
	};

	return (
		<>
			<SignUpModal>
				<SignUpModalWrapper>
					<SignUpTitle>추가 정보를 입력해주세요!</SignUpTitle>
					{/* <SignUpContentsWrapper> */}
					<SignUpNameBox>노원두</SignUpNameBox>
					<SignUpNumberBox onClick={handleNumberOpen}>
						기수를 선택해주세요.*
						<SignUpArrowDown src="/img/arrowDown2.png"></SignUpArrowDown>
					</SignUpNumberBox>

					{signUpNumberOpen ? (
						<SignUpNumberSelectWrapper>
							<SignUpNumber1 className="ss">1기</SignUpNumber1>
							<SignUpNumber2>2기</SignUpNumber2>
						</SignUpNumberSelectWrapper>
					) : (
						<></>
					)}

					<SignUpPositionBox onClick={handlePositionOpen}>
						포지션을 골라주세요.*
						<SignUpArrowDown src="/img/arrowDown2.png"></SignUpArrowDown>
					</SignUpPositionBox>
					{signUpPositionOpen ? (
						<SignUpPositionSelectWrapper>
							<SignUpMentor>Mentor</SignUpMentor>
							<SignUpMentee>Mentee</SignUpMentee>
						</SignUpPositionSelectWrapper>
					) : (
						<></>
					)}

					{/* </SignUpContentsWrapper> */}
					<SignUpCheckWrapper>
						<SignUpCheckImg src="/img/loginCheck.png"></SignUpCheckImg>
						<SignUpCehckText>이용약관•­­­­­­개인정보 동의 내용</SignUpCehckText>
					</SignUpCheckWrapper>
					<SignUpHr></SignUpHr>
					<SignUpCreateBtn>계정 생성하기</SignUpCreateBtn>
				</SignUpModalWrapper>
			</SignUpModal>
		</>
	);
};

export default SignUpModalUI;
