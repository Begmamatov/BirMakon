import requests from "@novomarkt/api/requests";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const useCatalogDetailsHook = () => {
	const route: any = useRoute();
	const [details, setDetails] = useState();
	let effect = async () => {
		try {
			let res = await requests.categories.getSubCategories(
				route.params?.id as any
			);
			setDetails(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	let title = route.params?.name;
	return { details, title };
};
export default useCatalogDetailsHook;
