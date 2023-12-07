import { api_get, api_post, api_put, api_delete } from "./api";


export const apiGetCart = async () => {
	return await api_get('/cart');
};

export const apiAddProductToCart = async (id: string, quantity: number) => {
	return await api_post(`/cart/items`, { productID: id, quantity });
};

export const apiCheckoutCart = async () => {
	return await api_post('/cart/checkout', {});
};

export const apiUpdateItemInCart = async (itemID: string, quantity: number) => {
	return await api_put(`/cart/items/${itemID}`, { quantity });
};

export const apiClearCart = async () => {
	return await api_delete('/cart');
};

export const apiRemoveItemFromCart = async (itemID: string) => {
	return await api_delete(`/cart/items/${itemID}`);
};
