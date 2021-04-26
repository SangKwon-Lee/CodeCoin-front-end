import React, { useState } from "react";
import CategoryBtnUI from "./CategoryBtn.presenter";

const CategoryBtn = () => {
	const [list, setList] = React.useState<{
		list: string;
		name: string;
	}>({
		list: "",
		name: "",
	});

	const handleChange = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>,
	) => {
		const name = event.target.name as keyof typeof list;
		setList({
			...list,
			[name]: event.target.value,
		});
	};

	return <CategoryBtnUI handleChange={handleChange} list={list.list} />;
};

export default CategoryBtn;
