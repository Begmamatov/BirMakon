import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";

const Delivery = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
					>
						<LeftArrow />
					</TouchableOpacity>
					<Text style={{ fontSize: 15, color: COLORS.black, marginLeft: 10 }}>
						Home
					</Text>
				</View>
				<View style={styles.boxContent}>
					<Text style={styles.boxContent_ttile}>Доставка</Text>
					<View style={styles.left_right_container}>
						<Text style={styles.title}>
							Быстро доставим любой Ваш заказ по всей России
						</Text>
						<View style={styles.left_content}>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Image
									style={{ width: 25, height: 25 }}
									source={{
										uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgB7ZbNbtNAEMdnxoakSNCkKkjcXAmVilPfAPeWcmneAPMEzRskfQLaJ4jzBKQnIrg4T0CPLT3UNw4UYgmppLTeYTeNjb24/mh77P8Qxbuz+xvtzO4MQkWd2Fbjcf1B+wIM7/no0K+yFssafm+9sA00tuXfdjTGzG4Y8t6zz8cHZfYohM0gYHSlpX2tEYMnQAyWR8cuVIWpo3pSf7iNiI78tLTpMTK6jKzmXmtzvmCx82t6MVzx/CAXFkMIO9LbRsIqQOAhCBo0R4deNDxprVkCRQ8B3+pQecTeH6CdZFxnsKx4RBAG3KOz6W4zw9MUlLiDDFv6Sai4RlA83VxtE+CHNIMPBOCAfp+7eZAsnbbWHELu6tCQcYOAqaEvYMaAWQRVQbO1cOnLH18fRwgtM3OFzDwCsn9uvuzmBTxSQULFIsiXRUj9xYXalx+t1f43GRsdIse7i49qJxLUi0EqoZBdmbXvkvYmlJOlvK4BO3Jzl0W4T4apMvAqoXhupSXURHOuLCyWgqJhOqmxKKHOzt2lnOOuDNOkLnivOTryyhjfBjZe+nhkV1lQlCB3qnvYPSyWqiQM3E+OmfLy+3BHmr2RCzVH1i31uqynJgUG9FQWQ3kxV6QXA7ihUm8kwPsUiHlf7r+x/OnrMFWpE5VXlXurgDEOOZS25BDhll7Zs4puZg8ykZ6G9Xo7qwgWyGdUb2R2ZS/sruaV14H/m5uk5m/kv/4kS6X7xsmbV+uCLzup5kbFA2i3CFIZFkOvapQN0+mwatvwF2fcD31ERGxdAAAAAElFTkSuQmCC",
									}}
								/>
								<Text style={{ marginLeft: 10 }}>Бесплатная доставка</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 10,
								}}
							>
								<Image
									style={{ width: 25, height: 25 }}
									source={{
										uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAYAAAAiwE4nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMNSURBVHgB7VbBUhpBEO0eEDBVRhC0KjcOiVK5hHyByyVBL/IH4BcQv0D8AskXgF8gJyHmwPoFIZeUYlLiyaqogVwELHc6PcvuiosIW6nc8i7buzPbb3qmp18jTInL9EtNoC8JRG8QMG5/lyS/Akk9dvijMo0fnDThKp3ICaAsz9QmTG0RUfkWxN6L2nHLM+FFOhEPApVGiBA6QPDbsufZDruJpUFbscNmZSzhr/RKna24Qbi5WDvWf66/TvrJ2OehuE1CgB+FBD3C48MO2rwwA4C3m7ad+QyOthCtNXdGCNuZZJj63bb5wlvSA7ETRKrbPyNCBW76mxG91YEJuF5PFNjHtkMqYSv66aQ4GuHaiiLQeAo7xY5NRog70YPjAniAuTtg1O2tvruTb5c+nzbscWE6Jjqy+MPgbAtVpLzTr96/Kl69W87AlFg6+NaQRJv2u98vdsEdoToHQjob74Y6C9VmBDzgem25zNcnq2zOjdSidfZmhJwILQI4H0sHuAceIUgUbNsPMut8v/dKZcdWqQ9wxIvYwm4/Eq2efACPiAzuou5iYXKbOfSsKPvdjiBsQLfXmCYrJwH5mgHKJNzc6vAf/wpOLT3T4uHns8EckezEaqdl+Esof3OhmYxSFi7oZbugO0kzFwrxIO0iCmhr8YrXpLEJ+A4lBYoNVZvtMRaBVX6klO0kLF+Blm3LUMDzNZgLBYpMVBJC5IfJLGgcRPgBoVkJEMyaxwU7r+QJvGFYpkaKiBEIaA8IFbgGWnKC4SDKfXtV0yBWa2b43qVUoeDaXHKPI5I2QhirsmgqORpMSdJsoOSFVGklH0ceEQvWp5ZVtQCFWDWf7p8sffwC92LaMshgYf6uP0WmkmZ+NqgiGygLEyH4UpKMHJPkzU8c/aMthqUe9SFSlVW6BLknDWjY+naRjsdnJDdWKDThE1mn3bDIIixVl+mE5kNzi88Xqifak03U9fpKEWmwOg844rPMRcY0UhO7NhWtRFngc9l4pGFyExXcPY9nQhe5JpFUb+oQCxAt6PWmLhR/AGsiTf2ZAwSEAAAAAElFTkSuQmCC",
									}}
								/>
								<Text style={{ marginLeft: 10 }}>
									Доставка круглый год в России
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 10,
								}}
							>
								<Image
									style={{ width: 25, height: 25 }}
									source={{
										uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgB1ZY9UgJBEIVf925pKFqUqQYKhBxhyRYT8QTiCcATwA2EE8gRzKDKxBuIGWpAGRmgoAfYaXs3wJWSH/evyi/a7Z6at7PzpqcJysQ9chh8jhQQkU9j0Nu/fR7Sq1s63CYZI2U8oQpvkTSRASxezdZ15kAUBASmy2LdICEMG4eEWoEY0Y4dTopguDsY3SEh3nSLiGT+zsiQ/yk2qRab02rhfuKWHMQRCyZyi+N3t9D6LT/TvbGAK4DKFkwzspgvEExE0M2m9rrx6uxcJDFfKCygvuoiBvayhNq2rrZth2N6GhvTarGxOFYg2IQVKzM1JIy9PMVaSeR0IfiCNRhPOvirWH4w6umv1DIj16HweK//WEFEVhrEFzRCF6GQgxistX4gCDlTdzyoDS4RA3uTQfn+k38TxL4NMq2NP1ZGoAO/RUBSiFcGcUiM6GMuptXCgoXEoO9Ho70Iq9sSu5lXwWR1Au3ZyXHZCOr6KTmkAAv3/A7gC3LsdyM/DP64AAAAAElFTkSuQmCC",
									}}
								/>
								<Text style={{ marginLeft: 10 }}>
									Возврат товара при примерке
								</Text>
							</View>
						</View>
						<View style={styles.right_content}>
							<Image
								source={{
									uri: "https://birmakon-birmakon.netlify.app/static/media/image%2039.fa7f4298ced9ef17ae9b.png",
								}}
								style={{
									width: "100%",
									height: 180,
								}}
							/>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Delivery;

const styles = StyleSheet.create({
	container: {
		position: "relative",
		width: "100%",
		height: "100%",
		padding: 10,
		backgroundColor: COLORS.white,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 40,
	},
	boxContent: {
		flexDirection: "column",
		width: "100%",
	},
	boxContent_ttile: {
		fontWeight: "600",
		color: COLORS.black,
		fontSize: 18,
	},
	left_right_container: {
		flexDirection: "column",
		width: "100%",
		marginTop: 20,
		padding: 15,
		backgroundColor: COLORS.white,
		height: "auto",
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
	},
	left_content: {
		marginTop: 30,
		marginBottom: 30,
		flexDirection: "column",
		justifyContent: "center",
	},
	right_content: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
