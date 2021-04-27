import React, { useState } from "react";
import PostModalUI from "./PostModal.presenter";
import { IPostModal } from "./PostModal.types";

const PostModal = ({ handlePostModal }: IPostModal) => {
	return <PostModalUI handlePostModal={handlePostModal} />;
};

export default PostModal;
