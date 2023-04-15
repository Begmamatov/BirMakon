import requests from "@novomarkt/api/requests";
import { useEffect, useState } from "react";

const MyPaymentsHooks = () => {
	const [payments, setPayments] = useState<any>([]);
	const [state, setState] = useState();
	const transaction = async () => {
		try {
			let res = await requests.profile.getTransaction();
			setState(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		transaction();
	}, []);

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
		state,
	};
};

export default MyPaymentsHooks;
