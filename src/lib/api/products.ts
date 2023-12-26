import type { FetchedProduct, Product } from "$lib/types";
import { api_get, api_post } from "./api";

export const apiGetProducts = async (): Promise<Product[]> => {
	try {
		const products: FetchedProduct[] = await api_get('/products');
		// ignore typescript error
		// 
		const parsedProducts = products.map(
			({ _id: id, name, price, rating, images, description, userID }) =>
			({ id, name, price, rating: rating || 0, preview: images[0], images, description, userID }));

		return parsedProducts satisfies Product[];
	} catch (error) {
		return [];
	}
};

export const apiGetProduct = async (id: string) => {
	return await api_get(`/products/${id}`);
};

export const apiCreateProduct = async (data: any) => {
	return await api_post('/products', data);
};

export const apiGetProductByUser = async (userID: string) => {
	return await api_get(`/products/user/${userID}`);
}
