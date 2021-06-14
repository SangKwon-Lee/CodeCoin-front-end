import React from 'react';
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
} from './Search.styles';
import CategoryBtnUI from '../../../commons/CategoryBtn/CategoryBtn.container';
import PostModal from '../../../commons/postModal/PostModal.container';
import { ISearchProps } from './Search.types';

const SearchPresenter = ({
	postModalOpen,
	handlePostModal,
	handleSearchWord,
}: ISearchProps) => {
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
