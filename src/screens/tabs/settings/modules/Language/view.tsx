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

const Language = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerView}>
				<BackHeader
					name={STRINGS.Language}
					// style={{ marginTop: -10 }}
				/>
			</View>
			<ScrollView
				style={{ backgroundColor: "#E9EEF6", marginBottom: -32 }}
			>
				<View>
					<View style={styles.containerText}>
						<Text style={styles.sectionText}>Изменить язык</Text>
					</View>
					<View style={styles.werticalView}>
						<View style={styles.sectionBoxView}>
							<Text style={styles.animateText}>Русский</Text>
							<TouchableOpacity>
								<RoundIcon />
							</TouchableOpacity>
						</View>
						<View style={styles.sectionBoxView}>
							<Text style={styles.animateText}>O’zbekcha</Text>
							<TouchableOpacity>
								<RoundIcon />
							</TouchableOpacity>
						</View>
						<View style={styles.sectionBoxView1}>
							<Text style={styles.animateText}>English</Text>
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

export default Language;
