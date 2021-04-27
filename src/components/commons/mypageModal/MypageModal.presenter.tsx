import React, { useState } from "react";
import { SignUp } from "../layout/header/Header.styles";
import {
	MyPageContentsWrapper,
	MyPageModal,
	MyPageModalHrBlod,
	MyPageModalProfileEmail,
	MyPageModalProfileImg,
	MyPageModalProfileName,
	MypageModalProfileNameEmailWrapper,
	MyPageModalProfileWrapper,
	MypagePostImg,
	MyPageBtnWrapper,
	MypageText,
	MypageLikeImg,
	MypageModalHrLight,
	MypageBookImg,
	MypageLogoutImg,
} from "./MypageModal.styles";

const MyPageModalUI = () => {
	return (
		<>
			<MyPageModal>
				<MyPageModalProfileWrapper>
					<MyPageModalProfileImg src="/img/profile.png"></MyPageModalProfileImg>
					<MypageModalProfileNameEmailWrapper>
						<MyPageModalProfileName>노원두</MyPageModalProfileName>
						<MyPageModalProfileEmail>
							captain@newbizstart.com
						</MyPageModalProfileEmail>
					</MypageModalProfileNameEmailWrapper>
				</MyPageModalProfileWrapper>
				<MyPageModalHrBlod />
				<MyPageContentsWrapper>
					<MyPageBtnWrapper>
						<MypagePostImg src="/img/postIcon.png"></MypagePostImg>
						<MypageText>내 포스트</MypageText>
					</MyPageBtnWrapper>
					<MypageModalHrLight />
					<MyPageBtnWrapper>
						<MypageLikeImg src="/img/likeIcon.png"></MypageLikeImg>
						<MypageText>좋아요</MypageText>
					</MyPageBtnWrapper>
					<MypageModalHrLight />
					<MyPageBtnWrapper>
						<MypageBookImg src="/img/bookIcon.png"></MypageBookImg>
						<MypageText>북마크</MypageText>
					</MyPageBtnWrapper>
					<MypageModalHrLight />
					<MyPageBtnWrapper>
						<MypageLogoutImg src="/img/logoutIcon.png"></MypageLogoutImg>
						<MypageText>로그아웃</MypageText>
					</MyPageBtnWrapper>
				</MyPageContentsWrapper>
			</MyPageModal>
		</>
	);
};

export default MyPageModalUI;
