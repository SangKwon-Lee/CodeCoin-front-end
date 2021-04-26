import React, { useState } from "react";
import { Button, DialogActions } from "@material-ui/core";

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
} from "./PostModal.styles";

import CategoryRadio from "../../commons/CategoryRadio/CategoryRadio.container";

const items = ["TJ", "TJT", "TIL"];

const PostModalUI = () => {
	const [open, setOpen] = React.useState(false);
	const [radioValue, setRadioValue] = useState("TJ");
	const [postTitle, setPostTitle] = useState("");
	const [blogLink, setBlogLink] = useState("");
	const [isBlog, setIsBlog] = useState(false);
	const [blogName, setBlogName] = useState("");
	const [ablogName, setaBlogName] = useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handlePostTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPostTitle(e.target.value);
	};

	const handleBlogLink = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBlogLink(e.target.value);
	};

	const handleBlogOpen = () => {
		setIsBlog(!isBlog);
	};

	const handleBlogName = (event: any) => {
		setBlogName(event.target.innerText);
	};

	return (
		<>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Slide in alert dialog
			</Button>

			<Modal
				open={true}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				PaperProps={{
					style: {
						width: "41.75rem",
						height: "84.625rem",
						display: "flex",
						alignItems: "center",
					},
				}}
				maxWidth={"lg"}
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
							onChange={handlePostTitle}
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
						{isBlog ? (
							<ModalBlogSelectWrapper>
								<ModalBlogNotion onClick={handleBlogName}>
									Notion
								</ModalBlogNotion>
								<ModalBlogVelog onClick={handleBlogName}>Velog</ModalBlogVelog>
								<ModalBlogTistory onClick={handleBlogName}>
									Tistory
								</ModalBlogTistory>
								<ModalBlogGitBlog onClick={handleBlogName}>
									Git Blog
								</ModalBlogGitBlog>
							</ModalBlogSelectWrapper>
						) : (
							<></>
						)}
					</ModalBlogWrapper>
					<ModalLinkWrapper>
						<ModalLinkTitle>링크</ModalLinkTitle>
						<ModalLinkTextBox
							placeholder="링크를 입력해주세요."
							onChange={handleBlogLink}
						></ModalLinkTextBox>
					</ModalLinkWrapper>
					<ModalHrWapper>
						<ModalHr></ModalHr>
					</ModalHrWapper>
				</ModalContentsWrapper>

				<DialogActions>
					<ModalPostBtn onClick={handleClose} color="primary">
						포스트하기
					</ModalPostBtn>
				</DialogActions>
			</Modal>
		</>
	);
};

export default PostModalUI;
