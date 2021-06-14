import React, { useState } from 'react';
import SearchPresenter from './Search.presenter';

const SearchContainer = () => {
	//* 포스트 모달 상태
	const [postModalOpen, setPostModalOpen] = useState(false);

	//* 포스트 모달 오픈 함수
	const handlePostModal = () => {
		setPostModalOpen((prev) => !prev);
	};

	//* 검색어 상태
	const [searchWord, setSearchWord] = useState('');

	//* 검색어 함수
	const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
	};

	return (
		<SearchPresenter
			postModalOpen={postModalOpen}
			handlePostModal={handlePostModal}
			handleSearchWord={handleSearchWord}
		/>
	);
};

export default SearchContainer;
