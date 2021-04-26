import CardContainer from "./Card.container";
import CardPresenterItem from "./Card.presenterItem";
import {
	Card,
	CardTitle,
	CardWrapper,
	CardDesign,
	EmptyCard,
} from "./Card.styles";

const datas = [
	{
		stage: 1,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 20,
		scrap: 33,
	},
	{
		stage: 2,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 22,
		scrap: 33,
	},
	{
		stage: 3,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 21,
		scrap: 33,
	},
	{
		stage: 4,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 25,
		scrap: 33,
	},
	{
		stage: 5,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 52,
		scrap: 33,
	},
	{
		stage: 6,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 29,
		scrap: 33,
	},
	{
		stage: 7,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 32,
		scrap: 33,
	},
	{
		stage: 8,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 9,
		scrap: 33,
	},
	{
		stage: 9,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 87,
		scrap: 33,
	},
	{
		stage: 10,
		name: "노원두",
		title: "Contents Title",
		date: "2020.00.00",
		like: 31,
		scrap: 33,
	},
];

const CardPresenter = () => {
	return (
		<Card>
			<CardTitle>CC 포스트!</CardTitle>
			<CardWrapper>
				{datas?.map((data) => (
					<CardPresenterItem data={data} />
				))}
				{new Array(datas?.length % 4).fill("").map((data) => (
					<EmptyCard key={data.stage} />
				))}
			</CardWrapper>
		</Card>
	);
};

export default CardPresenter;
