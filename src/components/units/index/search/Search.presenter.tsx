import React, { useState } from "react";
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
	const [postModalOpen, setPostModalOpen] = useState(false);

	const handlePostModal = () => {
		setPostModalOpen((prev) => !prev);
	};

	const [searchWord, setSearchWord] = useState("");

	const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			{postModalOpen ? <PostModal handlePostModal={handlePostModal} /> : <></>}
			<Search>
				<SearchWrapper>
					<SearchBarBackground>
						<SearchBarAndIconWrap>
							<SearchIcon src="/img/magnifying.png"></SearchIcon>
							<SearchBar
								onChange={handleSearchWord}
								placeholder="내용을 검색해주세요."
							></SearchBar>
						</SearchBarAndIconWrap>
					</SearchBarBackground>
					<CategoryBtnWrapper>
						<CategoryBtnUI />
					</CategoryBtnWrapper>
					<RegisterPost onClick={handlePostModal}>
						<PostIcon src="/img/post.png"></PostIcon>포스트하기
					</RegisterPost>
				</SearchWrapper>
			</Search>
		</>
	);
};

export default SearchPresenter;
