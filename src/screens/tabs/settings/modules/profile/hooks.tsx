import requests from "@novomarkt/api/requests";
import { LoginResponse } from "@novomarkt/api/types";
import { useCallback, useEffect, useState } from "react";

type ProfileData = Partial<LoginResponse>;

const useProfileHook = () => {
	let [profileData, setProfileData] = useState<ProfileData>();

	let onTextChange = useCallback((key: string) => {
		return (value: string) => {
			//TODO check
			setProfileData({ ...profileData, [key]: value });
		};
	}, []);
	let fetchData = async () => {
		try {
			let res = await requests.profile.getProfile();
			setProfileData(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const onFieldSubmit = async (val: string, key: string) => {
		try {
			let res = await requests.profile.editProfile({
				...profileData,
				[key]: val,
			});
		} catch (error) {}
	};

	return {
		profileData,
		onTextChange,
		setProfileData,
		onFieldSubmit,
	};
};

export default useProfileHook;
