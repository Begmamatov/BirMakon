import requests from "@novomarkt/api/requests";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const useCatalogDetailsHook = () => {
	const route: any = useRoute();
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	let effect = async () => {
		setLoading(true);
		try {
			let res = await requests.categories.getSubCategories(
				route.params?.id as any
			);
			setDetails(res.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		effect();
	}, []);

	let title = route.params?.name;
	let catalogId = route.params?.id;

	return { details, title, loading, catalogId };
};
export default useCatalogDetailsHook;
