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
} from "./Search.styles";
import CategoryBtnPresenter from "../../../commons/CategoryBtn/CategoryBtn.presenter";
import PostModalContainer from "../../../commons/postModal/PostModal.container";

const SearchPresenter = () => {
	return (
		<>
			{<PostModalContainer />}
			<Search>
				<SearchWrapper>
					<SearchBarBackground>
						<SearchBarAndIconWrap>
							<SearchIcon src="/img/magnifying.png"></SearchIcon>
							<SearchBar placeholder="내용을 검색해주세요."></SearchBar>
						</SearchBarAndIconWrap>
					</SearchBarBackground>
					<CategoryBtnPresenter></CategoryBtnPresenter>
					<RegisterPost>
						<PostIcon src="/img/post.png"></PostIcon>포스트하기
					</RegisterPost>
				</SearchWrapper>
			</Search>
		</>
	);
};

export default SearchPresenter;
