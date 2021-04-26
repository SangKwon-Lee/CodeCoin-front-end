import CardContainer from "./Card.container";
import {
	CardDesign,
	CardDesignTitleAndIConWrapper,
	CardDesignTitle,
	CardDesignTitleIcon,
	CardDesignProfileWrapper,
	CardDesignProfileimg,
	CardDesignProfileNumber,
	CardDesignProfileName,
	CardDesignContentsWrapper,
	CardDesignContents,
	CardDesignDateAndLikeWrapper,
	CardDesignDate,
	CardDesignLikeWrapper,
	CardDesginLikeImg,
	CardDesginLikeCount,
	CardDesginScrapImg,
	CardDesginScrapCount,
} from "./Card.styles";

import { ICardProps } from "./Card.types";

const CardUIItem: React.FC<ICardProps> = ({ data }) => {
	return (
		<CardDesign>
			<CardDesignTitleAndIConWrapper>
				<CardDesignTitle
					src="/img/smallLogo.png"
					alt="smallLogo"
				></CardDesignTitle>
				<CardDesignTitleIcon
					src="/img/velog.png"
					alt="velog"
				></CardDesignTitleIcon>
			</CardDesignTitleAndIConWrapper>
			<CardDesignProfileWrapper>
				<CardDesignProfileimg
					src="/img/profile.png"
					alt="profile"
				></CardDesignProfileimg>
				<CardDesignProfileNumber>{data.stage}기</CardDesignProfileNumber>
				<CardDesignProfileName>{data.name}</CardDesignProfileName>
			</CardDesignProfileWrapper>
			<CardDesignContentsWrapper>
				<CardDesignContents>{data.title}</CardDesignContents>
			</CardDesignContentsWrapper>
			<CardDesignDateAndLikeWrapper>
				<CardDesignDate>{data.date}</CardDesignDate>
				<CardDesignLikeWrapper>
					<CardDesginLikeImg src="/img/like.png" alt="like"></CardDesginLikeImg>
					<CardDesginLikeCount>{data.like}</CardDesginLikeCount>
					<CardDesginScrapImg
						src="/img/scrap.png"
						alt="scrap"
					></CardDesginScrapImg>
					<CardDesginScrapCount>{data.scrap}</CardDesginScrapCount>
				</CardDesignLikeWrapper>
			</CardDesignDateAndLikeWrapper>
		</CardDesign>
	);
};

export default CardUIItem;
