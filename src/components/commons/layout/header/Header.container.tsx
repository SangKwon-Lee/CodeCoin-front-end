import React, { useState } from "react";
import HeaderPresenter from "./Header.presenter";

const HeaderContainer = () => {
	const [isLogin, setIsLogin] = useState(true);
	return <HeaderPresenter isLogin={isLogin} />;
};

export default HeaderContainer;
