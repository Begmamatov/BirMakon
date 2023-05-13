import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay/lib";

const Loading = ({ diseblet }: any) => {
	const ladingOf = () => {
		setLading(true);
	};
	const ladingOn = () => {
		setLading(false);
	};
	useEffect(() => {
		if (diseblet === true) {
			ladingOf();
		} else {
			ladingOn();
		}
	}, [diseblet]);
	const [loading, setLading] = useState(false);
	return <Spinner textStyle={{}} textContent="" visible={true} />;
};

export default Loading;
