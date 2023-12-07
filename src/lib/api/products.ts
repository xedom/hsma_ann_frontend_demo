import { api_get, api_post } from "./api";

export const apiGetProducts = async () => {
	return await api_get('/products');
};

export const apiGetProduct = async (id: string) => {
	return await api_get(`/products/${id}`);
};

export const apiCreateProduct = async (data: any) => {
	return await api_post('/products', data);
};
