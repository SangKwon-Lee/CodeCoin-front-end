
export interface ICategoryBtnProps {
	handleChange: (
		event: React.ChangeEvent<{
			name?: string;
			value: unknown;
		}>,
	) => void;
	list: string
}