import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import CategoryBtnContainer from "./CategoryBtn.container";
import { MUISelect, useStyles } from "./CategoryBtn.styles";
import { ICategoryBtnProps } from "./CategoryBtn.types";

const CategoryBtnUI: React.FC<ICategoryBtnProps> = ({
	handleChange,
	list,
}: ICategoryBtnProps) => {
	const classes = useStyles();

	return (
		<FormControl
			variant="outlined"
			// className={classes.formControl}
		>
			<InputLabel id="demo-simple-select-outlined-label">카테고리</InputLabel>
			<MUISelect
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value={list}
				onChange={handleChange}
				label="전체보기"
				defaultValue="전체보기"
			>
				<MenuItem value="전체보기">
					<em>전체보기</em>
				</MenuItem>
				<MenuItem value="TJ">TJ</MenuItem>
				<MenuItem value="JT">JT</MenuItem>
				<MenuItem value="TIL">TIL</MenuItem>
			</MUISelect>
		</FormControl>
	);
};

export default CategoryBtnUI;
