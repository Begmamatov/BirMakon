import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	_ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { RoundIcon } from "@novomarkt/assets/icons/icons";

const Cource = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerView}>
				<BackHeader name={STRINGS.COURSE} />
			</View>
			<ScrollView
				style={{ backgroundColor: "#E9EEF6", marginBottom: -32 }}
			>
				<View>
					<View style={styles.containerText}>
						<Text style={styles.sectionText}>Изменить Курс</Text>
					</View>
					<View style={styles.werticalView}>
						<View style={styles.sectionBoxView}>
							<Text style={styles.animateText}>EUR €</Text>
							<TouchableOpacity>
								<RoundIcon />
							</TouchableOpacity>
						</View>
						<View style={styles.sectionBoxView}>
							<Text style={styles.animateText}>USD $</Text>
							<TouchableOpacity>
								<RoundIcon />
							</TouchableOpacity>
						</View>
						<View style={styles.sectionBoxView1}>
							<Text style={styles.animateText}>SUM</Text>
							<TouchableOpacity>
								<RoundIcon />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Cource;
