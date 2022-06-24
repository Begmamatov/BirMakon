import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DotElement = ({ inactive = false }) => {
	return (
		<View style={inactive ? styles.inactive : styles.active}>
			<Text></Text>
		</View>
	);
};

export default DotElement;

const styles = StyleSheet.create({
    inactive: {
        width: 20,
        borderRadius: 20,
        backgroundColor: "green",
        marginRight: 10,
        marginLeft: 10,
    },

    active: {
        width: 40 ,
        borderRadius: 10,
        backgroundColor: "red"
    }
});
