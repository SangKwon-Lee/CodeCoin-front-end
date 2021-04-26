import React, { useState } from "react";

import { ModalRadioGroup, ModalFormControlLabel } from "./CategoryRadio.styles";

import Radio from "@material-ui/core/Radio";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import { RadioProps } from "@material-ui/core/Radio";

export const GreenRadio = withStyles({
	root: {
		color: "#009FA7",
		"&$checked": {
			color: "#009FA7",
		},
	},
	checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

interface IProps {
	items: string[];
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryRadioUI = ({ items, value, handleChange }: IProps) => {
	return (
		<FormControl component="fieldset">
			<FormLabel component="legend"></FormLabel>
			<ModalRadioGroup
				aria-label="Category"
				name="Category"
				value={value}
				onChange={handleChange}
				style={{
					justifyContent: "space-between",
					width: 328,
				}}
			>
				{items.map((item) => (
					<ModalFormControlLabel
						value={item}
						control={<GreenRadio />}
						label={item}
					/>
				))}
			</ModalRadioGroup>
		</FormControl>
	);
};

export default CategoryRadioUI;
