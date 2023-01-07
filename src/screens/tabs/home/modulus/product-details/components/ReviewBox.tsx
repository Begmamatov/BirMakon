import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Rating } from "react-native-ratings";

const ReviewBox = ({ percent, separate, rating }: any) => {

	return (
		<View style={styles.container}>
			<View style={styles.box1}>
				<Text style={styles.bigger}>{percent ? percent : 0}</Text>
				<Text style={styles.reviewTxt}>{STRINGS.withReviews}</Text>

				<Rating
					type="custom"
					ratingCount={5}
					imageSize={18}
					ratingColor="#EE4927"
					ratingBackgroundColor="#313131"
					readonly={true}
					startingValue={rating}
					style={{ backgroundColor: COLORS.lightGray }}
				/>
			</View>
			<View>
				<View style={styles.diagram}>
					<Text>5</Text>
					<View style={styles.diagramRow}>
						<View style={styles.blue}></View>
						<View style={styles.gray}></View>
					</View>
					<Text>83%</Text>
				</View>
				<View style={styles.diagram}>
					<Text>5</Text>
					<View style={styles.diagramRow}>
						<View style={styles.blue}></View>
						<View style={styles.gray}></View>
					</View>
					<Text>83%</Text>
				</View>
				<View style={styles.diagram}>
					<Text>5</Text>
					<View style={styles.diagramRow}>
						<View style={styles.blue}></View>
						<View style={styles.gray}></View>
					</View>
					<Text>83%</Text>
				</View>
				<View style={styles.diagram}>
					<Text>5</Text>
					<View style={styles.diagramRow}>
						<View style={styles.blue}></View>
						<View style={styles.gray}></View>
					</View>
					<Text>83%</Text>
				</View>
				<View style={styles.diagram}>
					<Text>5</Text>
					<View style={styles.diagramRow}>
						<View style={styles.blue}></View>
						<View style={styles.gray}></View>
					</View>
					<Text>83%</Text>
				</View>
			</View>
		</View>
	);
};

export default ReviewBox;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		marginHorizontal: 20,
		backgroundColor: COLORS.lightGray,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	box1: {
		paddingRight: 10,
	},

	stars: {
		flexDirection: "row",
	},

	bigger: {
		fontSize: 35,
		color: COLORS.defaultBlack,
	},

	reviewTxt: {
		fontSize: 12,
		width: 100,
		marginBottom: 10,
	},

	diagram: {
		flexDirection: "row",
		marginVertical: 2,
	},

	diagramRow: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 5,
	},

	blue: {
		// width: 100,
		paddingHorizontal: 50,
		borderBottomWidth: 2,
		borderColor: COLORS.red,
	},

	gray: {
		// width: 100,
		paddingHorizontal: 20,
		borderBottomWidth: 2,
		borderColor: COLORS.whiteGray,
	},
});
