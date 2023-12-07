import { api_get } from "./api";

export const apiGetOrders = async () => {
	return await api_get('/orders');
};
