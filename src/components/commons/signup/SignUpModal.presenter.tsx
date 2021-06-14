import React, { useState } from 'react';
import { SignUp } from '../layout/header/Header.styles';
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
} from './SignUpModal.styles';

import { ISignUpModalProps } from './SignUpModal.types';

const SignUpModalUI = ({
	handleNumberOpen,
	handlePositionOpen,
	signUpNumberOpen,
	signUpPositionOpen,
	handleInputData,
	inputData,
}: ISignUpModalProps) => {
	return (
		<>
			<SignUpModal>
				<SignUpModalWrapper>
					<SignUpTitle>추가 정보를 입력해주세요!</SignUpTitle>
					<SignUpNameBox
						name="name"
						onChange={handleInputData}
						placeholder="이름을 입력해주세요."
					></SignUpNameBox>
					<SignUpNumberBox onClick={handleNumberOpen}>
						기수를 선택해주세요.*
						<SignUpArrowDown src="/img/arrowDown2.png"></SignUpArrowDown>
					</SignUpNumberBox>

					{signUpNumberOpen && (
						<SignUpNumberSelectWrapper>
							<SignUpNumber1
								id="1기"
								name="number"
								onClick={handleInputData}
								isActive={inputData.number === '1기'}
							>
								1기
							</SignUpNumber1>
							<SignUpNumber2
								name="number"
								id="2기"
								onClick={handleInputData}
								isActive={inputData.number === '2기'}
							>
								2기
							</SignUpNumber2>
						</SignUpNumberSelectWrapper>
					)}

					<SignUpPositionBox onClick={handlePositionOpen}>
						포지션을 골라주세요.*
						<SignUpArrowDown src="/img/arrowDown2.png"></SignUpArrowDown>
					</SignUpPositionBox>
					{signUpPositionOpen && (
						<SignUpPositionSelectWrapper>
							<SignUpMentor
								name="position"
								id="Mentor"
								onClick={handleInputData}
								isActive={inputData.position === 'Mentor'}
							>
								Mentor
							</SignUpMentor>
							<SignUpMentee
								name="position"
								id="Mentee"
								onClick={handleInputData}
								isActive={inputData.position === 'Mentee'}
							>
								Mentee
							</SignUpMentee>
						</SignUpPositionSelectWrapper>
					)}
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
