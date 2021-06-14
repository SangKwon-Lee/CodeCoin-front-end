import React, { useEffect, useState } from 'react';
import { DialogActions } from '@material-ui/core';
import { IPostModal } from './PostModal.types';
import {
	Modal,
	ModalProfileWrapper,
	ModalProfileImg,
	ModalNumberAndNameWrapper,
	ModalProfileNumber,
	ModalProfileName,
	ModalHrWapper,
	ModalHr,
	ModalContentsWrapper,
	ModalContentTitleWrapper,
	ModalContentTitle,
	ModalContentTitleTextBox,
	ModalContentCategoryWrapper,
	ModalContentCategoryTitle,
	ModalBlogWrapper,
	ModalBlogSelectTitle,
	ModalBlogTitle,
	ModalLinkWrapper,
	ModalBlogArrowDown,
	ModalBlogSelectBtn,
	ModalBlogSelectWrapper,
	ModalLinkTitle,
	ModalLinkTextBox,
	ModalPostBtn,
	ModalBlogNotion,
	ModalBlogVelog,
	ModalBlogTistory,
	ModalBlogGitBlog,
} from './PostModal.styles';

import CategoryRadio from '../../commons/CategoryRadio/CategoryRadio.container';

const items = ['TJ', 'TJT', 'TIL'];

const PostModalUI = ({ handlePostModal }: IPostModal) => {
	//* 모달 오픈 상태
	const [open, setOpen] = useState(false);

	//* 블로그 선택 오픈 상태
	const [isBlog, setIsBlog] = useState(false);

	//* 인풋 데이터 상태
	const [radio, setRadioValue] = useState('TJ');
	const [inputData, setInputData] = useState({
		radio: '',
		title: '',
		blogName: '',
		blogLink: '',
	});

	//* 라디오는 CategoryRadio Container에서 MaterialUI를 이용함.
	//* 상태를 그쪽에서 변경해주기 때문에 UseEffect를 사용함.
	useEffect(() => {
		setInputData({
			...inputData,
			radio,
		});
	}, [radio]);

	//* 인풋 데이터 변경 함수
	const handleInputData = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		let newInputData = {
			...inputData,
			[e.target.name]: e.target.value,
		};
		setInputData(newInputData);
	};

	//* 블로그 종류 모달 오픈 함수
	const handleBlogOpen = () => {
		setIsBlog((prev) => !prev);
	};

	return (
		<>
			<Modal
				open={true}
				keepMounted
				onClose={handlePostModal}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				PaperProps={{
					style: {
						// top: "200px",
						width: '41.75rem',
						display: 'flex',
						alignItems: 'center',
						// maxHeight: "1354px",
					},
				}}
				maxWidth={'lg'}
			>
				<ModalProfileWrapper id="alert-dialog-slide-title">
					<ModalProfileImg src="/img/postProfile.png"></ModalProfileImg>
					<ModalNumberAndNameWrapper>
						<ModalProfileNumber>1기</ModalProfileNumber>
						<ModalProfileName>노원두</ModalProfileName>
					</ModalNumberAndNameWrapper>
				</ModalProfileWrapper>
				<ModalContentsWrapper>
					<ModalHrWapper>
						<ModalHr></ModalHr>
					</ModalHrWapper>
					<ModalContentTitleWrapper>
						<ModalContentTitle>제목</ModalContentTitle>
						<ModalContentTitleTextBox
							placeholder="제목을 입력해주세요."
							name="title"
							onChange={handleInputData}
						></ModalContentTitleTextBox>
					</ModalContentTitleWrapper>
					<ModalContentCategoryWrapper>
						<ModalContentCategoryTitle>내용</ModalContentCategoryTitle>
						<CategoryRadio
							items={items}
							setRadioValue={setRadioValue}
						></CategoryRadio>
					</ModalContentCategoryWrapper>
					<ModalBlogWrapper>
						<ModalBlogTitle>블로그</ModalBlogTitle>
						<ModalBlogSelectBtn onClick={handleBlogOpen}>
							<ModalBlogSelectTitle>
								블로그 종류를 선택해주세요.
							</ModalBlogSelectTitle>
							<ModalBlogArrowDown src="/img/arrowDown2.png"></ModalBlogArrowDown>
						</ModalBlogSelectBtn>
						{isBlog && (
							<ModalBlogSelectWrapper>
								<ModalBlogNotion
									name="blogName"
									value="Notion"
									onClick={handleInputData}
								>
									Notion
								</ModalBlogNotion>
								<ModalBlogVelog
									name="blogName"
									value="Velog"
									onClick={handleInputData}
								>
									Velog
								</ModalBlogVelog>
								<ModalBlogTistory
									name="blogName"
									value="Tistory"
									onClick={handleInputData}
								>
									Tistory
								</ModalBlogTistory>
								<ModalBlogGitBlog
									name="blogName"
									value="GitBlog"
									onClick={handleInputData}
								>
									Git Blog
								</ModalBlogGitBlog>
							</ModalBlogSelectWrapper>
						)}
					</ModalBlogWrapper>
					<ModalLinkWrapper>
						<ModalLinkTitle>링크</ModalLinkTitle>
						<ModalLinkTextBox
							placeholder="링크를 입력해주세요."
							onChange={handleInputData}
							name="blogLink"
						></ModalLinkTextBox>
					</ModalLinkWrapper>
					<ModalHrWapper>
						<ModalHr></ModalHr>
					</ModalHrWapper>
				</ModalContentsWrapper>
				<DialogActions>
					<ModalPostBtn onClick={handlePostModal} color="primary">
						포스트하기
					</ModalPostBtn>
				</DialogActions>
			</Modal>
		</>
	);
};

export default PostModalUI;
