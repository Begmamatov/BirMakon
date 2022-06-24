import React from "react";
import { useState } from "react";
const useCartSelectItemHooks = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return { isModalVisible, toggleModal };
};

export default useCartSelectItemHooks;
