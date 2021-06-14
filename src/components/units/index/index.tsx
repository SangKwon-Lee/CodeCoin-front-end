import styled from "@emotion/styled";
import Search from "./search/Search.container";
import Card from "./card/Card.container";
import LoginModal from "../../commons/loginModal/LoginModal.container";
import MyPageModal from "../../commons/mypageModal/MypageModal.container";

const Home = () => (
	<>
		{/* <MyPageModal /> */}
		<HomeWrapper>
			<Banner src="img/banner.png" alt="banner"></Banner>
			<Search />
			<Card />
		</HomeWrapper>
	</>
);

const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Banner = styled.img`
	padding-top: 3.75rem;
	width: 100%;
	padding-bottom: 3.75rem;
`;

export default Home;
