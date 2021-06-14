import React, { useState } from 'react';
import CategoryRadioUI from './CategoryRadio.presenter';

interface IProps {
	items: string[];
	setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryRadio = ({ items, setRadioValue }: IProps) => {
	const [value, setValue] = React.useState('TJ');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
		setRadioValue(event.target.value);
	};

	return (
		<CategoryRadioUI items={items} value={value} handleChange={handleChange} />
	);
};

export default CategoryRadio;
