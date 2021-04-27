import LoginModal from "../loginModal/LoginModal.container";
import HeaderContainer from "./header/Header.container";

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
	<div>
		<HeaderContainer />
		<div>{children}</div>
	</div>
);

export default Layout;
