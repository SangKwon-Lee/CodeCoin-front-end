import LoginModal from "../../loginModal/LoginModal.container";
import HeaderContainer from "./Header.container";
import {
	HeaderWrapper,
	Logo,
	Login,
	HeaderRightLogoutWrapper,
	HeaderRightLoginWrapper,
	HeaderProfile,
	HeaderarrowDown,
	SignUp,
} from "./Header.styles";

import { HeaderProps } from "./Header.types";

const HeaderPresenter: React.FC<HeaderProps> = ({ isLogin }) => (
	<>
		<HeaderWrapper>
			<Logo src="/img/logo.png" alt="logo"></Logo>
			{isLogin ? (
				<HeaderRightLoginWrapper>
					<HeaderProfile src="/img/profile.png" alt="profile"></HeaderProfile>
					<HeaderarrowDown
						src="img/arrowDown.png"
						alt="arrowDown"
					></HeaderarrowDown>
				</HeaderRightLoginWrapper>
			) : (
				<HeaderRightLogoutWrapper>
					<Login>로그인</Login>
					<SignUp>회원가입</SignUp>
				</HeaderRightLogoutWrapper>
			)}
		</HeaderWrapper>
	</>
);

export default HeaderPresenter;
