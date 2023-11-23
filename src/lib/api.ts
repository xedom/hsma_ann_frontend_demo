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
	// console.log(res);

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
		// headers: { Authorization: `Bearer ${loggedUserToken}` },
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_put = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'PUT',
		// headers: { Authorization: `Bearer ${loggedUserToken}` },
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_delete = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'DELETE',
		// headers: { Authorization: `Bearer ${loggedUserToken}` }
	});
	return response.json();
};

export const apiGetLoggedUser = async () => {
	console.log('fetching apiGetLoggedUser');
	return await api_get('/users/profile');
};

export const apiGetProducts = async () => {
	console.log('fetching apiGetProducts');
	return await api_get('/products');
};

export const apiGetProduct = async (id: string) => {
	console.log('fetching apiGetProduct with id: ' + id);
	return await api_get(`/products/${id}`);
}

export const apiGetUsers = async () => {
	console.log('fetching apiGetUsers');
	return await api_get('/users');
}

export const apiGetUser = async (username: string) => {
	console.log('fetching apiGetUser with username: ' + username);
	return await api_get(`/users/${username}`);
}

export const apiCreateProduct = async (data: any) => {
	console.log('fetching apiCreateProduct');
	return await api_post('/products', data);
}