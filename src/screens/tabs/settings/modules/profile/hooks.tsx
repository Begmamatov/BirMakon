import requests from "@novomarkt/api/requests";
import { LoginResponse } from "@novomarkt/api/types";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

type ProfileData = Partial<LoginResponse>;

const useProfileHook = () => {
	let [profileData, setProfileData] = useState<ProfileData>();
	const [url, setUrl] = useState();
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		name: "",
		phone: "",
		email: "",
		birthday: "",
		photo: {},
		addresses: [],
		last_address: "",
		gender: activePol,
	});
	useEffect(() => {
		setState({
			name: profileData?.name ?? "",
			phone: profileData?.phone ?? "",
			email: profileData?.email ?? "",
			birthday: profileData?.birthday ?? "",
			photo: profileData?.photo ?? {},
			addresses: profileData?.addresses ?? [],
			last_address: profileData?.last_address ?? "",
			gender: profileData?.gender ?? activePol,
		});
	}, [profileData]);
	console.log(JSON.stringify(profileData, null, 2));

	const [activePol, setActivePol] = useState(profileData?.gender ?? 0);

	let fetchData = async () => {
		try {
			let res = await requests.profile.getProfile();
			setProfileData(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		fetchData();
	}, []);

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	const changePhoto = async () => {
		await launchImageLibrary({ mediaType: "photo" }, ({ assets }: any) => {
			if (assets) {
				setUrl(assets[0].uri);
				setState({
					...state,
					photo: {
						name: assets[0].fileName,
						type: assets[0].type,
						uri:
							Platform.OS === "ios"
								? assets[0].uri.replace("file://", "")
								: assets[0].uri,
					},
				});
			}
		});
	};
	const removAcountHandler = () => {
		setLoading(true);
		try {
			let res = requests.profile.removAcount();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		profileData,
		onStateChange,
		setProfileData,
		fetchData,
		changePhoto,
		url,
		state,
		setActivePol,
		activePol,
		removAcountHandler,
		loading,
	};
};

export default useProfileHook;
