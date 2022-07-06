import requests from "@novomarkt/api/requests";
import { useEffect, useState } from "react";

const MyPaymentsHooks = () => {
	const [payments, setPayments] = useState([]);

	const getPayments = async () => {
		try {
			let res = await requests.products.getProductPayment();
			setPayments(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPayments();
	}, []);

	return {
		payments,
	};
};

export default MyPaymentsHooks;
