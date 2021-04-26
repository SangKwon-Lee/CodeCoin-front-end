import SearchContainer from "./Search.container";
import {
	Search,
	SearchWrapper,
	SearchBarBackground,
	SearchBar,
	SearchBarAndIconWrap,
	SearchIcon,
	RegisterPost,
	PostIcon,
	CategoryBtnWrapper,
} from "./Search.styles";
import CategoryBtnUI from "../../../commons/CategoryBtn/CategoryBtn.presenter";
import PostModal from "../../../commons/postModal/PostModal.container";

const SearchPresenter = () => {
	return (
		<>
			<PostModal />
			<Search>
				<SearchWrapper>
					<SearchBarBackground>
						<SearchBarAndIconWrap>
							<SearchIcon src="/img/magnifying.png"></SearchIcon>
							<SearchBar placeholder="내용을 검색해주세요."></SearchBar>
						</SearchBarAndIconWrap>
					</SearchBarBackground>
					<CategoryBtnWrapper>
						<CategoryBtnUI></CategoryBtnUI>
					</CategoryBtnWrapper>
					<RegisterPost>
						<PostIcon src="/img/post.png"></PostIcon>포스트하기
					</RegisterPost>
				</SearchWrapper>
			</Search>
		</>
	);
};

export default SearchPresenter;
