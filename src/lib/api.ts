import { env } from '$env/dynamic/public';

export const api_get = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
		headers: {
			contentType: 'application/json',
			// Authorization: `Bearer ${loggedUserToken}`
		}
	});
	const res = await response.json();

	if (response.status == 401) 
		throw new Error('Unauthorized');
	else if (response.status != 200) 
		throw new Error('Something went wrong');

	return res;
};

export const api_post = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;

	const response = await fetch(url, {
		method: 'POST',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_put = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'PUT',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_delete = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'DELETE',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
	});
	return response.json();
};

export const apiGetLoggedUser = async () => {
	return await api_get('/users/profile');
};

export const apiGetProducts = async () => {
	return await api_get('/products');
};

export const apiGetProduct = async (id: string) => {
	return await api_get(`/products/${id}`);
}

export const apiGetUsers = async () => {
	return await api_get('/users');
}

export const apiGetUser = async (username: string) => {
	return await api_get(`/users/${username}`);
}

export const apiCreateProduct = async (data: any) => {
	return await api_post('/products', data);
}

export const apiAddProductToCart = async (id: string, quantity: number) => {
	return await api_post(`/cart/items`, { productID: id, quantity });
}

export const apiGetCart = async () => {
	return await api_get('/cart');
}

export const apiClearCart = async () => {
	return await api_delete('/cart');
}

export const apiCheckoutCart = async () => {
	return await api_post('/cart/checkout', {});
}

export const apiRemoveItemFromCart = async (itemID: string) => {
	return await api_delete(`/cart/items/${itemID}`);
}

export const apiUpdateItemInCart = async (itemID: string, quantity: number) => {
	return await api_put(`/cart/items/${itemID}`, { quantity });
}

export const apiGetOrders = async () => {
	return await api_get('/orders');
}